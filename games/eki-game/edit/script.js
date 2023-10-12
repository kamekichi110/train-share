let inputValue = 0; // 初期値を設定します


var startTime;
var timerInterval;

function incrementInput() {
    inputValue += 1; // 1を加えます
    document.getElementById("time").value = inputValue; // HTMLのinput要素に値をセットします
    setTimeout(incrementInput, 10); // 1ミリ秒後に再度incrementInput関数を呼び出します
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
            var times = Number(time) * 10
            resultDiv.textContent += '{ "track": ' + `${track}` + ',' + ' "targetTime": ' + `${time}` + '},' + '\n';
        }

        function updateTime() {
            var currentTime = Date.now();
            var elapsedTime = currentTime - startTime;
            document.getElementById("time").value = elapsedTime;
        }
        function record() {
            setTimeout(() => {
                incrementInput();
                document.getElementById('audioPlayer').play();
            }, 1500);
        }