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
function scoreList1() {
  // 別のURLからJSONデータを取得
fetch('http://trainshare1.starfree.jp/tower/data.json')
.then(response => response.json())
.then(data => {
  // JSONデータ内の"score"値を表示
  data.forEach(item => {
    document.getElementById("list").textContent = item.score;
  });
})
.catch(error => {
  console.error('データの取得に失敗しました', error);
});

}

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
});

function loadList() {
  // 別のURLからJSONデータを取得
fetch('https://trainshare1.starfree.jp/tower/data.json')
.then(response => response.json())
.then(data => {
  // JSONデータ内の"score"値を取り出して表示
  var scores = data.map(item => parseInt(item.score));
  document.getElementById("list").textContent = scores;
})
.catch(error => {
  console.error('データの取得に失敗しました', error);
});
}
function loadList1() {
  fetch('http://trainshare1.starfree.jp/tower/data.json')
  .then(response => response.json())
  .then(data => {
    // JSONデータ内の"score"値を取り出して配列に格納
    var scores = data.map(item => parseInt(item.score));

    // "list"というIDを持つdiv要素を取得
    var listDiv = document.getElementById('list');

    // "list" div内に"score"値を挿入
    scores.forEach(score => {
      var scoreElement = document.createElement('p');
      scoreElement.textContent = 'Score: ' + score;
      listDiv.appendChild(scoreElement);
    });
  })
  .catch(error => {
    console.error('データの取得に失敗しました', error);
  });
}

window.onload = setTimeout(() => {
  userName();
  loadList1();
}, 500);