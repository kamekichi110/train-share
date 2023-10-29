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
                                                                                                                  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                                                                                                                    const audioBuffer = audioContext.createBuffer(2, audioChunks.length * 4096, audioContext.sampleRate);

                                                                                                                      for (let channel = 0; channel < 2; channel++) {
                                                                                                                          const nowBuffering = audioBuffer.getChannelData(channel);
                                                                                                                              for (let i = 0; i < audioChunks.length; i++) {
                                                                                                                                    const chunk = audioChunks[i];
                                                                                                                                          const dataView = new DataView(chunk);
                                                                                                                                                const buffer = new Float32Array(dataView.byteLength / 4); // 32-bit per sample

                                                                                                                                                      for (let j = 0; j < dataView.byteLength; j += 4) {
                                                                                                                                                              buffer[j / 4] = dataView.getInt32(j, true) / 0x7FFFFFFF; // Convert S32LE to Float32
                                                                                                                                                                    }

                                                                                                                                                                          nowBuffering.set(buffer, i * 4096);
                                                                                                                                                                              }
                                                                                                                                                                                }

                                                                                                                                                                                  const wavBlob = encodeWavFromAudioBuffer(audioBuffer);

                                                                                                                                                                                    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
                                                                                                                                                                                      const fileName = `${timestamp} (train-share.f5.si).wav`;

                                                                                                                                                                                        const a = document.createElement('a');
                                                                                                                                                                                          a.href = URL.createObjectURL(wavBlob);
                                                                                                                                                                                            a.download = fileName;
                                                                                                                                                                                              a.style.display = 'none';
                                                                                                                                                                                                document.body.appendChild(a);
                                                                                                                                                                                                  a.click();
                                                                                                                                                                                                    document.body.removeChild(a);
                                                                                                                                                                                                    }

                                                                                                                                                                                                    function encodeWavFromAudioBuffer(audioBuffer) {
                                                                                                                                                                                                      const numberOfChannels = audioBuffer.numberOfChannels;
                                                                                                                                                                                                        const sampleRate = audioBuffer.sampleRate;
                                                                                                                                                                                                          const interleaved = interleave(audioBuffer);
                                                                                                                                                                                                            const dataLength = interleaved.length * 4; // 32-bit per sample, so 4 bytes
                                                                                                                                                                                                              const buffer = new ArrayBuffer(44 + dataLength);
                                                                                                                                                                                                                const view = new DataView(buffer);

                                                                                                                                                                                                                  writeString(view, 0, 'RIFF');
                                                                                                                                                                                                                    view.setUint32(4, 36 + dataLength, true);
                                                                                                                                                                                                                      writeString(view, 8, 'WAVE');
                                                                                                                                                                                                                        writeString(view, 12, 'fmt ');
                                                                                                                                                                                                                          view.setUint32(16, 16, true); // PCM format
                                                                                                                                                                                                                            view.setUint16(20, 1, true); // 1 for PCM
                                                                                                                                                                                                                              view.setUint16(22, numberOfChannels, true);
                                                                                                                                                                                                                                view.setUint32(24, sampleRate, true);
                                                                                                                                                                                                                                  view.setUint32(28, sampleRate * 4, true); // byte rate (sample rate * block align)
                                                                                                                                                                                                                                    view.setUint16(32, numberOfChannels * 4, true); // block align (channel count * bytes per sample)
                                                                                                                                                                                                                                      view.setUint16(34, 32, true); // bits per sample

                                                                                                                                                                                                                                        writeString(view, 36, 'data');
                                                                                                                                                                                                                                          view.setUint32(40, dataLength, true);

                                                                                                                                                                                                                                            // PCM data
                                                                                                                                                                                                                                              floatTo32BitPCM(view, 44, interleaved);

                                                                                                                                                                                                                                                return new Blob([view], { type: 'audio/wav' });
                                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                                function interleave(audioBuffer) {
                                                                                                                                                                                                                                                  const numberOfChannels = audioBuffer.numberOfChannels;
                                                                                                                                                                                                                                                    const length = audioBuffer.length * numberOfChannels;
                                                                                                                                                                                                                                                      const result = new Float32Array(length);
                                                                                                                                                                                                                                                        const inputL = audioBuffer.getChannelData(0);
                                                                                                                                                                                                                                                          const inputR = audioBuffer.getChannelData(1);

                                                                                                                                                                                                                                                            for (let i = 0; i < length; i += 2) {
                                                                                                                                                                                                                                                                result[i] = inputL[i / 2];
                                                                                                                                                                                                                                                                    result[i + 1] = inputR[i / 2];
                                                                                                                                                                                                                                                                      }

                                                                                                                                                                                                                                                                        return result;
                                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                                        function floatTo32BitPCM(output, offset, input) {
                                                                                                                                                                                                                                                                          for (let i = 0; i < input.length; i++, offset += 4) {
                                                                                                                                                                                                                                                                              const s = Math.max(-1, Math.min(1, input[i]));
                                                                                                                                                                                                                                                                                  output.setInt32(offset, s < 0 ? s * 0x7FFFFFFF : s * 0x7FFFFFFF, true);
                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                                                    function writeString(view, offset, string) {
                                                                                                                                                                                                                                                                                      for (let i = 0; i < string.length; i++) {
                                                                                                                                                                                                                                                                                          view.setUint8(offset + i, string.charCodeAt(i));
                                                                                                                                                                                                                                                                                            }
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
                                                                                                                                                                                                                                                                                                                      for (let i = 0; i < dataView.byteLength; i += 4) {
                                                                                                                                                                                                                                                                                                                            const y = (dataView.getInt32(i, true) / 0x7FFFFFFF) * (HEIGHT / 2);
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
                                                                                                                                                                                                                                                                                                                                                                              