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
var url = url0 + text + url1 + key;
selectElement.innerHTML = "";

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('ネットワークエラーまたはHTTPエラーが発生しました');
    }
    return response.json(); // JSONデータを解析してJavaScriptオブジェクトに変換
  })
  .then(data => {
    // JSONデータを取得した後の処理
    console.log(data);
    var resultSet = data.ResultSet;
    var point = resultSet.Point;
    var station = point.Station;

    station.forEach(item => {

        var code = station.code;
        var name = station.Name;

    var optionElement = document.createElement('option');
    optionElement.value = code; // Optionの値を設定
    optionElement.text = name;  // Optionの表示テキストを設定
    selectElement.appendChild(optionElement);
    });
  })
  .catch(error => {
    console.error('JSONデータの読み込みエラー', error);
  });
}
function box1() {
    var selectElement = document.getElementById('ForArea');
var text = document.getElementById("for").value;
var url0 = "https://api.ekispert.jp/v1/json/station?name=";
var url1 = "&offset=1&limit=100&direction=up&gcs=tokyo&key=";
var key = "LE_DDLV9n4GxgPku";
var url = url0 + text + url1 + key;
selectElement.innerHTML = "";

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('ネットワークエラーまたはHTTPエラーが発生しました');
    }
    return response.json(); // JSONデータを解析してJavaScriptオブジェクトに変換
  })
  .then(data => {
    // JSONデータを取得した後の処理
    console.log(data);

    var resultSet = data.ResultSet;
    var point = resultSet.Point;
    var station = point.Station;

    station.forEach(item => {
        var code = station.code;
        var name = station.Name;

    // 取得したデータを使用してOption要素を生成して追加する
    var optionElement = document.createElement('option');
    optionElement.value = code; // Optionの値を設定
    optionElement.text = name;  // Optionの表示テキストを設定
    selectElement.appendChild(optionElement);
    });
  })
  .catch(error => {
    console.error('JSONデータの読み込みエラー', error);
  });
}