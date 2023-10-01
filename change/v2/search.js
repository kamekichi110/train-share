function area0() {
    document.getElementById("from").value = document.getElementById("FromArea").value;
}
function area1() {
    document.getElementById("for").value = document.getElementById("ForArea").value;
}
function box0() {
    // select要素を取得
var selectElement = document.getElementById('FromArea');
var text = document.getElementById("from").value;
var url0 = "https://api.ekispert.jp/v1/json/station?name=";
var url1 = "&offset=1&limit=100&direction=up&gcs=tokyo&key=";
var key = "LE_DDLV9n4GxgPku";
var URL = url0 + text + url1 + key;
selectElement.innerHTML = "";

// メインのJSONファイルを読み込む
fetch(URL)
  .then(response => response.json())
  .then(data => {
    // メインのJSONデータを取得した後の処理
    console.log(data);

    // JSONデータからOption要素を生成し、select要素に追加する
    data.forEach(item => {
      const optionElement = document.createElement('option');
      optionElement.value = item.ResultSet.Point.Station.code; // Optionの値を設定
      optionElement.text = item.ResultSet.Point.Station.Name;   // Optionの表示テキストを設定
      selectElement.appendChild(optionElement); // select要素にOption要素を追加
    });
  })
  .catch(error => {
    console.error('メインのJSONファイルの読み込みエラー', error);
  });

}
function box1() {}