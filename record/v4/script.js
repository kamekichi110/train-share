// 録音を制御するための変数
let mediaRecorder;
let audioChunks = [];
let selectedSampleRate = 48000;

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
    navigator.mediaDevices.getUserMedia({ audio: true, sampleRate: selectedSampleRate })
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