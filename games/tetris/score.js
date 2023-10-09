
const scoreBox = document.getElementById("scoreNum");
scoreBox.addEventListener("click", function() {
  scoreBox.blur();
})
function ScoreList() {
    // JSONファイルのURL
const jsonFileUrl = "http://trainshare1.starfree.jp/tetris/data.json";

// JSONファイルを取得
fetch(jsonFileUrl)
  .then(response => response.json())
  .then(data => {
    // "score"を基準に降順でソート
    data.sort((a, b) => b.score - a.score);

    // テーブルのヘッダーを作成
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");

    for (const key in data[0]) {
      const th = document.createElement("th");
      th.textContent = key;
      tr.appendChild(th);
    }

    thead.appendChild(tr);
    table.appendChild(thead);

    // テーブルのボディを作成
    const tbody = document.createElement("tbody");

    data.forEach(item => {
      const tr = document.createElement("tr");

      for (const key in item) {
        const td = document.createElement("td");
        td.innerHTML = `${item[key]}<hr>`;
        tr.appendChild(td);
      }

      tbody.appendChild(tr);
    });

    table.appendChild(tbody);

    // テーブルをページに追加
    document.getElementById("scoreList").appendChild(table);
  })
  .catch(error => {
    console.error("JSONファイルの取得中にエラーが発生しました。", error);
  });
}

function scorelist1() {
  // 別のURLからJSONデータを取得
fetch('http://trainshare1.starfree.jp/tetris/data.json')
.then(response => response.json())
.then(data => {
  // JSONデータ内の"score"値を表示
  data.forEach(item => {
    document.getElementById("scoreList").textContent = item.score;
  });
})
.catch(error => {
  console.error('データの取得に失敗しました', error);
});

}

window.onload = setTimeout(() => {
  scoreList1();
}, 500);