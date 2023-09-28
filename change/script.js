function searchTRAIN() {
    var result = document.getElementById("result");
    var ver = document.getElementById("version");
    result.src = "wait.html";
    var location1 = document.getElementById("location1").value;
    var location2 = document.getElementById("location2").value;
    var set1 = "https://api.ekispert.jp/v1/json/search/course/light?from=";
    var set2 = "&to";
    var set3 = "&searchType=departure&shinkansen=true&limitedExpress=true&redirect=false&contentsMode=pc&key=LE_DDLV9n4GxgPku";
    var fromData = document.getElementById("from").value;
    var forData = document.getElementById("for").value;
    var fromText = fromData + location1;
    var forText = forData + location2;
    var url = set1 + fromText + set2 + forText + set3;
    var encode = encodeURI(url);
    setTimeout(() => {
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
                var requestURL = item.ResourceURI;
                result.src = requestURL;
                ver.innerHTML = "API-version:" + item.apiVersion;
                window.location.href = requestURL;
            }
        }
    }
}, 1500);
}