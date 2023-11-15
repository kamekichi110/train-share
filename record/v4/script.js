// 録音を制御するための変数
let mediaRecorder;
let audioChunks = [];
let selectedSampleRate = 96000;

document.addEventListener('DOMContentLoaded', () => {
  const startRecordingButton = document.getElementById('startRecordingButton');
  const stopRecordingButton = document.getElementById('stopRecordingButton');
  const recordedAudio = document.getElementById('recordedAudio');
  const sampleRateSelect = document.getElementById('sampleRateSelect');
  const customSelect = document.querySelector('.custom-select');
  const placeholder = document.querySelector('.placeholder');
  const options = document.querySelector('.options');

  // セレクトボックスの値を取得し、録音のサンプリングレートを変更
  sampleRateSelect.addEventListener('change', () => {
    selectedSampleRate = parseInt(sampleRateSelect.value);
  });

  // カスタムセレクトボックスの開閉を制御
  placeholder.addEventListener('click', () => {
    options.classList.toggle('active');
  });

  // カスタムセレクトボックスの選択された値を反映
  options.querySelectorAll('li').forEach(option => {
    option.addEventListener('click', () => {
      placeholder.textContent = option.textContent;
      selectedSampleRate = parseInt(option.getAttribute('data-value'));
      options.classList.remove('active');
    });
  });

  // 録音開始
  startRecordingButton.addEventListener('click', () => {
    startRecording();
    startRecordingButton.disabled = true;
    stopRecordingButton.disabled = false;
  });

  // 録音停止
  stopRecordingButton.addEventListener('click', () => {
    stopRecording();
    startRecordingButton.disabled = false;
    stopRecordingButton.disabled = true;
  });

  // 録音の開始
  function startRecording() {
    audioChunks = [];
    navigator.mediaDevices.getUserMedia({ audio: true, sampleRate: 96000 })
      .then(stream => {
        mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.ondataavailable = event => {
          audioChunks.push(event.data);
        };
        mediaRecorder.onstop = () => {
          const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
          recordedAudio.src = URL.createObjectURL(audioBlob);
          recordedAudio.style.display = 'block';
        };
        mediaRecorder.start();
      })
      .catch(error => console.error('録音の開始に失敗しました:', error));
  }

  // 録音の停止
  function stopRecording() {
    if (mediaRecorder.state === 'recording') {
      mediaRecorder.stop();
    }
  }
});
const audio = document.getElementById('recordedAudio');
const canvas = document.getElementById('playWave');
const canvasCtx = canvas.getContext('2d');

const audioCtx = new AudioContext();
const audioSrc = audioCtx.createMediaElementSource(audio);
const analyser = audioCtx.createAnalyser();

audioSrc.connect(analyser);
audioSrc.connect(audioCtx.destination);

analyser.fftSize = 2048;
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);

canvasCtx.clearRect(0, 0, canvas.width, canvas.height);

function draw() {
  const drawVisual = requestAnimationFrame(draw);

  analyser.getByteTimeDomainData(dataArray);

  canvasCtx.fillStyle = 'rgb(200, 200, 200)';
  canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

  canvasCtx.lineWidth = 2;
  canvasCtx.strokeStyle = 'rgb(0, 0, 0)';

  canvasCtx.beginPath();

  const sliceWidth = (canvas.width * 1.0) / bufferLength;
  let x = 0;

  for (let i = 0; i < bufferLength; i++) {
    const v = dataArray[i] / 128.0;
    const y = (v * canvas.height) / 2;

    if (i === 0) {
      canvasCtx.moveTo(x, y);
    } else {
      canvasCtx.lineTo(x, y);
    }

    x += sliceWidth;
  }

  canvasCtx.lineTo(canvas.width, canvas.height / 2);
  canvasCtx.stroke();
}

draw();
function downloadWav() {
  window.location.href = document.getElementById("recordedAudio").src;
}