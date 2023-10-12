let inputValue = 0; // 初期値を設定します

function incrementInput() {
    inputValue += 1; // 1を加えます
    document.getElementById("yourInputId").value = inputValue; // HTMLのinput要素に値をセットします
  }
  function timestamp() {
  // 1ミリ秒ごとにincrementInput関数を呼び出すタイマーを設定します
  setInterval(incrementInput, 1);
  }

var startTime;
var timerInterval;

function incrementInput() {
    inputValue += 1; // 1を加えます
    document.getElementById("time").value = inputValue; // HTMLのinput要素に値をセットします
    setTimeout(incrementInput, 1); // 1ミリ秒後に再度incrementInput関数を呼び出します
}

const mp3FileInput = document.getElementById('mp3File');
        const audioPlayer = document.getElementById('audioPlayer');

        mp3FileInput.addEventListener('change', function() {
            const file = mp3FileInput.files[0];
            if (file) {
                const objectURL = URL.createObjectURL(file);
                audioPlayer.src = objectURL;
            }
        });

        function add(track) {
            const resultDiv = document.getElementById('result');
            var time = document.getElementById("time").value;
            var times = Number(time) * 1;
            resultDiv.textContent += '{ "track": ' + `${track}` + ',' + ' "targetTime": ' + `${times}` + '},' + '\n';
        }

        function updateTime() {
            var currentTime = Date.now();
            var elapsedTime = currentTime - startTime;
            document.getElementById("time").value = elapsedTime;
        }
        function record() {
            setTimeout(() => {
                timestamp();
                document.getElementById('audioPlayer').play();
            }, 1500);
        }