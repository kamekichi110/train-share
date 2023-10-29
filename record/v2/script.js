const recordButton = document.getElementById('recordButton');
const stopButton = document.getElementById('stopButton');
const audioPlayer = document.getElementById('audioPlayer');
const sampleRateSelect = document.getElementById('sampleRateSelect');
const bitDepthSelect = document.getElementById('bitDepthSelect');
const canvas = document.getElementById('waveform');
const canvasContext = canvas.getContext('2d');

let mediaRecorder;
let audioChunks = [];
let audioConstraints = {
  audio: {
      sampleRate: parseInt(sampleRateSelect.value),
          channelCount: 2,
              bitDepth: parseInt(bitDepthSelect.value),
                },
                };

                sampleRateSelect.addEventListener('change', updateAudioConstraints);
                bitDepthSelect.addEventListener('change', updateAudioConstraints);

                function updateAudioConstraints() {
                  audioConstraints.audio.sampleRate = parseInt(sampleRateSelect.value);
                    audioConstraints.audio.bitDepth = parseInt(bitDepthSelect.value);
                    }

                    recordButton.addEventListener('click', startRecording);
                    stopButton.addEventListener('click', stopRecording);

                    async function startRecording() {
                      try {
                          const stream = await navigator.mediaDevices.getUserMedia(audioConstraints);
                              mediaRecorder = new MediaRecorder(stream);

                                  mediaRecorder.ondataavailable = (e) => {
                                        if (e.data.size > 0) {
                                                audioChunks.push(e.data);
                                                        drawWaveform();
                                                              }
                                                                  };

                                                                      mediaRecorder.onstop = () => {
                                                                            encodeWav(audioChunks);
                                                                                  audioChunks = [];
                                                                                      };

                                                                                          mediaRecorder.start();
                                                                                              recordButton.disabled = true;
                                                                                                  stopButton.disabled = false;
                                                                                                    } catch (error) {
                                                                                                        console.error('録音を開始できません: ', error);
                                                                                                          }
                                                                                                          }

                                                                                                          function stopRecording() {
                                                                                                            mediaRecorder.stop();
                                                                                                              recordButton.disabled = false;
                                                                                                                stopButton.disabled = true;
                                                                                                                }

                                                                                                                function encodeWav(audioChunks) {
                                                                                                                  const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });

                                                                                                                    const reader = new FileReader();
                                                                                                                      reader.onload = function(event) {
                                                                                                                          const wavData = new Uint8Array(event.target.result);
                                                                                                                              const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
                                                                                                                                  const fileName = `${timestamp} (train-share.f5.si).wav`;
                                                                                                                                      const wavBlob = new Blob([wavData], { type: 'audio/wav' });

                                                                                                                                          // ダウンロード用のリンクを作成
                                                                                                                                              const a = document.createElement('a');
                                                                                                                                                  a.href = URL.createObjectURL(wavBlob);
                                                                                                                                                      a.download = fileName;
                                                                                                                                                          a.style.display = 'none';
                                                                                                                                                              document.body.appendChild(a);
                                                                                                                                                                  a.click();
                                                                                                                                                                      document.body.removeChild(a);
                                                                                                                                                                        };

                                                                                                                                                                          reader.readAsArrayBuffer(audioBlob);
                                                                                                                                                                          }

                                                                                                                                                                          function drawWaveform() {
                                                                                                                                                                            const WIDTH = canvas.width;
                                                                                                                                                                              const HEIGHT = canvas.height;

                                                                                                                                                                                canvasContext.clearRect(0, 0, WIDTH, HEIGHT);
                                                                                                                                                                                  canvasContext.strokeStyle = 'black';
                                                                                                                                                                                    canvasContext.lineWidth = 2;

                                                                                                                                                                                      canvasContext.beginPath();

                                                                                                                                                                                        let x = 0;
                                                                                                                                                                                          const sliceWidth = WIDTH * 1.0 / audioChunks.length;

                                                                                                                                                                                            audioChunks.forEach((chunk) => {
                                                                                                                                                                                                const dataView = new DataView(chunk);
                                                                                                                                                                                                    for (let i = 0; i < dataView.byteLength; i += 2) {
                                                                                                                                                                                                          const y = (dataView.getInt16(i, true) / 32768.0) * (HEIGHT / 2); // 正確な描画位置に修正
                                                                                                                                                                                                                if (i === 0) {
                                                                                                                                                                                                                        canvasContext.moveTo(x, y);
                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                      canvasContext.lineTo(x, y);
                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                  x += sliceWidth;
                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                        });

                                                                                                                                                                                                                                                          canvasContext.lineTo(WIDTH, HEIGHT / 2);
                                                                                                                                                                                                                                                            canvasContext.stroke();
                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                            