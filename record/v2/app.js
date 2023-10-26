const startRecordButton = document.getElementById('startRecord');
const stopRecordButton = document.getElementById('stopRecord');
const playAudioButton = document.getElementById('playAudio');
const downloadWavButton = document.getElementById('downloadWav');
const downloadMp3Button = document.getElementById('downloadMp3');
const canvas = document.getElementById('waveformCanvas');
const audioPlayer = document.getElementById('audioPlayer');
const downloadLink = document.getElementById('downloadLink');

let audioContext;
let audioStream;
let mediaRecorder;
let audioChunks = [];
let isRecording = false;

// ユーザーが録音を開始
startRecordButton.addEventListener('click', async () => {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });

    mediaRecorder = new MediaRecorder(audioStream);
    mediaRecorder.ondataavailable = event => {
        if (event.data.size > 0) {
            audioChunks.push(event.data);
        }
    };

    mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
        audioPlayer.src = URL.createObjectURL(audioBlob);
    };

    mediaRecorder.start();
    isRecording = true;
});

// ユーザーが録音を停止
stopRecordButton.addEventListener('click', () => {
    if (isRecording) {
        mediaRecorder.stop();
        audioStream.getTracks().forEach(track => track.stop());
        isRecording = false;
    }
});

// ユーザーが再生
playAudioButton.addEventListener('click', () => {
    audioPlayer.play();
});

// ユーザーがWAVとしてダウンロード
downloadWavButton.addEventListener('click', () => {
    if (audioChunks.length > 0) {
        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
        downloadLink.href = URL.createObjectURL(audioBlob);
        downloadLink.download = Date.now() + "_(train-share).wav"
        downloadLink.style.display = 'block';
    }
});

// ユーザーがMP3としてダウンロード
downloadMp3Button.addEventListener('click', () => {
    if (audioChunks.length > 0) {
        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
        const audioFile = new File([audioBlob], 'recording.wav', { type: 'audio/wav' });

        const reader = new FileReader();
        reader.onload = function () {
            const wavData = new Uint8Array(reader.result);

            // WAVからMP3への変換
            convertWavToMp3(wavData, mp3Data => {
                const mp3Blob = new Blob([mp3Data], { type: 'audio/mp3' });
                downloadLink.href = URL.createObjectURL(mp3Blob);
                downloadLink.style.display = 'block';
                downloadLink.download = Date.now() + "_(train-share).mp3"
            });
        };

        reader.readAsArrayBuffer(audioFile);
    }
});

// Canvas描画（前回のコードを保持）

// ここにWAVからMP3への変換関数を追加する必要があります。
function convertWavToMp3(wavData, callback) {
    const lame = require('lame');
    const encoder = new lame.Encoder({
        channels: 2,
        bitDepth: 16,
        sampleRate: 44100,
        bitRate: 192,
        outSampleRate: 22050,
        mode: lame.STEREO
    });

    encoder.on('data', data => {
        callback(data);
    });

    encoder.on('end', () => {
        // エンコード完了
    });

    const buffer = Buffer.from(wavData.buffer);
    encoder.end(buffer);
}
