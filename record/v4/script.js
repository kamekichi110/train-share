const startRecordingButton = document.getElementById('startRecording');
const stopRecordingButton = document.getElementById('stopRecording');
const audioPlayer = document.getElementById('audioPlayer');
const timerElement = document.getElementById('timer');
const sampleRateSelect = document.getElementById('sampleRateSelect');
const bitDepthSelect = document.getElementById('bitDepthSelect');
let mediaRecorder;
let recordedChunks = [];
let startTime;
let selectedSampleRate = sampleRateSelect.value;
let selectedBitDepth = bitDepthSelect.value;

function formatTime(seconds) {
  const min = Math.floor(seconds / 60).toString().padStart(2, '0');
  const sec = (seconds % 60).toString().padStart(2, '0');
  return `${min}:${sec}`;
}

function updateTime() {
  const currentTime = Math.floor((Date.now() - startTime) / 1000);
  timerElement.textContent = `経過時間: ${formatTime(currentTime)}`;
}

function updateSampleRate() {
  selectedSampleRate = sampleRateSelect.value;
}

function updateBitDepth() {
  selectedBitDepth = bitDepthSelect.value;
}

function stopRecording() {
  mediaRecorder.stop();
  startRecordingButton.disabled = false;
  stopRecordingButton.disabled = true;
  clearInterval();
  timerElement.textContent = '経過時間: 00:00';
  
  const audioBlob = new Blob(recordedChunks, { type: 'audio/wav' });
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const fileName = `${timestamp} (train-share).wav`;

  const downloadLink = document.createElement('a');
  downloadLink.href = URL.createObjectURL(audioBlob);
  downloadLink.download = fileName;
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}

navigator.mediaDevices.getUserMedia({ audio: {
  sampleRate: selectedSampleRate,
  channelCount: 1,
  bitDepth: selectedBitDepth
}})
.then(stream => {
  mediaRecorder = new MediaRecorder(stream);

  startRecordingButton.addEventListener('click', () => {
    startTime = Date.now();
    mediaRecorder.start();
    startRecordingButton.disabled = true;
    stopRecordingButton.disabled = false;
    recordedChunks = [];
    setInterval(updateTime, 1000);
  });

  stopRecordingButton.addEventListener('click', stopRecording);

  mediaRecorder.ondataavailable = event => {
    recordedChunks.push(event.data);
  };

  mediaRecorder.onstop = stopRecording;

  sampleRateSelect.addEventListener('change', updateSampleRate);
  bitDepthSelect.addEventListener('change', updateBitDepth);
})
.catch(err => {
  console.error('録音エラー:', err);
});