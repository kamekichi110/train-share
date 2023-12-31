var startTime;
var timerInterval;
var count = 0;

function incrementInput() {
    var timeMP3 = document.getElementById('audioPlayer');
    document.getElementById("time").value = timeMP3.currentTime; // HTMLのinput要素に値をセットします
    setTimeout(incrementInput, 1); // 1ミリ秒後に再度incrementInput関数を呼び出します
}


        function changeMP3() {
            const mp3FileInput = document.getElementById('mp3File');
            const audioPlayer = document.getElementById('audioPlayer');
            const file = mp3FileInput.files[0];
            if (file) {
                const objectURL = URL.createObjectURL(file);
                audioPlayer.src = objectURL;
            }
        };

        function add(track) {
            var countValue = document.getElementById('count');
            count += 1;
            countValue.innerHTML ="note数:" + count + "個";
            const resultDiv = document.getElementById('result');
            var time = document.getElementById("time").value;
            var setTime = Number(time) * 1000;
            var value0 = parseInt(setTime, 10);
            resultDiv.innerHTML += '{ "track": ' + `${track}` + ',' + ' "targetTime": ' + `${value0}` + '},<br>';
            console.log('{ "track": ' + `${track}` + ',' + ' "targetTime": ' + `${value0}` + '}');
            download();
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

function download() {
  // テキストを含む変数を作成
  var header = document.getElementById("header").textContent;
  var inContent = document.getElementById("result").textContent;
  var fotter = document.getElementById("fotter").textContent;
  var myText = header + inContent + fotter;
  document.getElementById('FileName').value = myText;
};
