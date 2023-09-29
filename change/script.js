function searchTRAIN() {
    var result = document.getElementById("result");
    var ver = document.getElementById("version");
    result.src = "wait.html";
    var location1 = document.getElementById("location1").value;
    var location2 = document.getElementById("location2").value;
    var set1 = "https://api.ekispert.jp/v1/json/search/course/light?from=";
    var set2 = "&to";
    var set3 = "&searchType=departure&shinkansen=";
    var set3_list = document.getElementById("set3").value;
    var set4 = "&limitedExpress=";
    var set4_list = document.getElementById("set4").value;
    var set5 = "&redirect=true&contentsMode=sp&key="
    var fromData = document.getElementById("from").value;
    var forData = document.getElementById("for").value;
    var fromText = fromData + location1;
    var forText = forData + location2;
    var url = set1 + fromText + set2 + forText + set3 + set3_list + set4 + set4_list +set5;
    var encodeData = encodeURI(url);
    var encode = encodeData + "LE_DDLV9n4GxgPku";
    //リクエストオブジェクト生成
    const xhr = new XMLHttpRequest;

    //リクエスト
    xhr.open("get", encode);

    //リクエスト送信
    xhr.send();

    //自動的に実行される関数
    xhr.onreadystatechange = function () {
        // readyState XMLHttpRequest の状態 4: リクエストが終了して準備完了
        // status httpステータス
        if (xhr.readyState == 4 && xhr.status == 200) {
            const jsonData = JSON.parse(xhr.responseText);

            for (let item of jsonData) {
                var requestURL = item.ResultSet.ResourceURI;
                result.src = requestURL;
                ver.innerHTML = "API-version:" + item.ResultSet.apiVersion;
                document.getElementById("url").value = encode;
            }
        }
    }
}