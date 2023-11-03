const canvas = document.getElementById('GameCanvas');
    const startButton = document.getElementById('startRecord');
    const stopButton = document.getElementById('stopRecord');
    const stream = canvas.captureStream();
    const audioStream = new MediaStream(); // 空のオーディオストリーム
    const mediaRecorder = new MediaRecorder(stream, { audioBitsPerSecond: 128000 }); // オーディオビットレートを設定
    const recordedChunks = [];

    mediaRecorder.ondataavailable = (e) => {
      if (e.data.size > 0) {
        recordedChunks.push(e.data);
      }
    };

    mediaRecorder.onstop = () => {
      const audioTracks = audioStream.getAudioTracks();
      const audioBlob = new Blob(recordedChunks, { type: 'video/mp4' });
      const audioURL = URL.createObjectURL(audioBlob);

      // Canvasとオーディオを組み合わせたメディアストリームを作成
      const mediaStream = new MediaStream([...audioTracks, ...stream.getVideoTracks()]);

      const video = document.createElement('video');
      video.src = URL.createObjectURL(mediaStream);
      video.controls = true;
      document.body.appendChild(video);

      const a = document.createElement('a');
      a.href = audioURL;
      a.download = 'recorded-audio.mp4';
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();

      window.URL.revokeObjectURL(audioURL);
    };

    startButton.addEventListener('click', () => {
      mediaRecorder.start();
      startButton.disabled = true;
      stopButton.disabled = false;
    });

    stopButton.addEventListener('click', () => {
      mediaRecorder.stop();
      startButton.disabled = false;
      stopButton.disabled = true;
    });