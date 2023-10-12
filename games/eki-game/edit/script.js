let inputValue = 0; // 初期値を設定します

function incrementInput() {
  inputValue += 1; // 1を加えます
  document.getElementById("time").value = inputValue; // HTMLのinput要素に値をセットします
}
function timestamp() {
// 1ミリ秒ごとにincrementInput関数を呼び出すタイマーを設定します
setInterval(incrementInput, 1);
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
            resultDiv.textContent += '{ "track": ' + `${track}` + ',' + ' "targetTime": ' + `${time}` + '},' + '\n';
        }
        function record() {
            setTimeout(() => {
                timestamp();
                document.getElementById('audioPlayer').play();
            }, 1500);
        }