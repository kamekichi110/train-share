function scoreList() {
    // JSONファイルのURL
const jsonFileUrl = "http://trainshare1.starfree.jp/tower/data.json";

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
    document.getElementById("list").appendChild(table);
  })
  .catch(error => {
    console.error("JSONファイルの取得中にエラーが発生しました。", error);
  });
}

window.onload = setTimeout(() => {
    scoreList();
}, 500);

const targetElement = document.getElementById("name");
// 特定の要素がクリックされたときの処理
targetElement.addEventListener("click", function(event) {
  // クリックイベントの伝播を停止
  event.stopPropagation();

  // ここに特定の要素がクリックされたときの処理を追加
});

const targetElement2 = document.getElementById("scoreNum");

// 特定の要素がクリックされたときの処理
targetElement2.addEventListener("click", function(event) {
  // クリックイベントの伝播を停止
  event.stopPropagation();

  // ここに特定の要素がクリックされたときの処理を追加
});

const targetElement3 = document.getElementById("send");

// 特定の要素がクリックされたときの処理
targetElement3.addEventListener("click", function(event) {
  // クリックイベントの伝播を停止
  event.stopPropagation();

  // ここに特定の要素がクリックされたときの処理を追加
});

function userName() {
  window.alert('tower-game\n次のダイアログで\nユーザーネームを入力\n入力しない場合は「名無し」と\n入力してください。')
  var user = window.prompt("ユーザーネームを入力してください。", "名無し");
  var data = document.getElementById("name").value;
  data = user;
}

targetElement2.addEventListener("click", function() {
  targetElement2.blur();
})