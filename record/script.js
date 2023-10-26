const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const recordButton = document.getElementById("recordButton");
    const audioPlayer = document.getElementById("audioPlayer");
    const waveformCanvas = document.getElementById("waveform");
    const waveformContext = waveformCanvas.getContext("2d");

    let isRecording = false;
    let mediaRecorder;
    let audioChunks = [];

    navigator.mediaDevices.getUserMedia({ audio: true })
      .then((stream) => {
        mediaRecorder = new MediaRecorder(stream);

        mediaRecorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            audioChunks.push(event.data);
          }
        };

        mediaRecorder.onstop = () => {
          const audioBlob = new Blob(audioChunks, { 'type': 'audio/wav' });
          audioChunks = [];
          const audioUrl = URL.createObjectURL(audioBlob);
          audioPlayer.src = audioUrl;
        };

        recordButton.addEventListener('click', () => {
          if (isRecording) {
            mediaRecorder.stop();
            recordButton.textContent = "録音開始";
          } else {
            mediaRecorder.start();
            recordButton.textContent = "録音停止";
            drawWaveform(); // 録音開始時に波形描画を開始
          }
          isRecording = !isRecording;
        });
      })
      .catch((error) => {
        console.error('録音の許可がありません: ', error);
      });

    function drawWaveform() {
      const analyser = audioContext.createAnalyser();
      const source = audioContext.createMediaStreamSource(mediaRecorder.stream);
      source.connect(analyser);

      analyser.fftSize = 256;
      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      waveformContext.clearRect(0, 0, waveformCanvas.width, waveformCanvas.height);

      function draw() {
        analyser.getByteTimeDomainData(dataArray);
        
        // ランダムな色を生成
        const color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        
        waveformContext.fillStyle = 'black';
        waveformContext.lineWidth = 2;
        waveformContext.strokeStyle = color;
        waveformContext.beginPath();

        const sliceWidth = waveformCanvas.width * 1.0 / bufferLength;
        let x = 0;

        for (let i = 0; i < bufferLength; i++) {
          const v = dataArray[i] / 128.0;
          const y = v * waveformCanvas.height / 2;
          if (i === 0) {
            waveformContext.moveTo(x, y);
          } else {
            waveformContext.lineTo(x, y);
          }
          x += sliceWidth;
        }

        waveformContext.lineTo(waveformCanvas.width, waveformCanvas.height / 2);
        waveformContext.stroke();
        waveformContext.imageSmoothingEnabled = true;

        requestAnimationFrame(draw);
      }

      draw();
    }

function download() {
  var link = document.getElementById("down");
  var url = document.getElementById("audioPlayer");
  link.href = url.src;
  link.download = Date.now() + "(train-share_record-tool)" + ".wav";
  link.click();
}