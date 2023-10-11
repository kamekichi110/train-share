var divClicked = false;

// 赤いdivをクリックしたときの処理
document.getElementById("redDiv").addEventListener("click", function() {
    if (!divClicked) {
        // ボタンが赤いdivの場合の処理
        // JSONファイルを読み込み、誤差に基づいて処理を実行
        loadAndProcessJSON(0);
        divClicked = true;
    }
});

// 青いdivをクリックしたときの処理
document.getElementById("blueDiv").addEventListener("click", function() {
    if (!divClicked) {
        // ボタンが青いdivの場合の処理
        // JSONファイルを読み込み、誤差に基づいて処理を実行
        loadAndProcessJSON(1);
        divClicked = true;
    }
});

function loadAndProcessJSON(parameterValue) {
    // 外部JSONファイルのURL
    var jsonFileUrl = "https://train-share.f5.si/stamero/json/test.json";

    // HTTPリクエストを作成
    var xhr = new XMLHttpRequest();
    xhr.open("GET", jsonFileUrl, true);

    // リクエストが完了した際の処理
    xhr.onload = function () {
        if (xhr.status === 200) {
            // JSONデータを取得
            var jsonData = JSON.parse(xhr.responseText);

            // 許容誤差を設定
            var tolerance = 100;

            var currentTime = new Date().getTime();

            // JSONから取得した"time"の値と比較
            var timeDifference = Math.abs(currentTime - jsonTime);

            if (timeDifference <= tolerance) {
                // 誤差が100以下の場合
                if (parameterValue === 0) {
                    // JSONの"parameter"が0の場合、赤いdiv用の処理
                    // 例: 赤いdivをクリックしたら何か動作を実行
                    document.getElementById("comment").textContent = "perfect";
                } else if (parameterValue === 1) {
                    // JSONの"parameter"が1の場合、青いdiv用の処理
                    // 例: 青いdivをクリックしたら何か別の動作を実行
                    document.getElementById("comment").textContent = "perfect";
                }
            } else if (timeDifference > 100 && timeDifference <= 500) {
                // 誤差が100より上かつ500以下の場合、"good"の処理
                // 例: 何かgoodの動作を実行
                document.getElementById("comment").textContent = "good";
            } else {
                // 誤差が500より大きい場合、何も処理しない
                document.getElementById("comment").textContent = "";
            }
        } else {
            // エラー処理
            console.error("JSONファイルの読み込み中にエラーが発生しました");
        }
        divClicked = false; // クリックが終了したらフラグをリセット
    };

    // リクエストを送信
    xhr.send();
}


function GameStart() {
    // 外部JSONファイルを読み込む
  fetch('https://train-share.f5.si/stamero/json/test.json')
  .then(response => response.json())
  .then(jsonData => {
    function createColorDiv(data) {
      const colorDiv = document.createElement("div");
      colorDiv.classList.add("note");
      colorDiv.style.transform = `translate(${data.positionX}px, ${data.positionY}px)`;

      if (data.parameter === 0) {
        colorDiv.style.backgroundColor = "red";
      } else if (data.parameter === 1) {
        colorDiv.style.backgroundColor = "blue";
      }

      const panel = document.getElementById("panel");
      panel.appendChild(colorDiv);

      // 背景色を灰色に変更するアニメーション
      setTimeout(() => {
        colorDiv.style.backgroundColor = "grey"; // 背景色を灰色に変更
      }, data.time); // 指定の時間後に背景色を変更

      // 移動アニメーションを設定
      requestAnimationFrame(function move() {
        let startTime;
        function animate(time) {
          if (!startTime) startTime = time;
          const progress = (time - startTime) / (data.time * 1000);
          if (progress < 1) {
            colorDiv.style.transform = `translate(${data.positionX * progress}px, ${data.positionY * progress}px)`;
            requestAnimationFrame(animate);
          }
        }
        requestAnimationFrame(animate);
      });
    }

    jsonData.forEach(createColorDiv);
  });
  setInterval(() => {
    document.getElementById("timestamp").value += 1;
  }, 1);
}