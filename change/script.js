function searchTRAIN() {
    var result = document.getElementById("result");
    var set1 = "https://api.ekispert.jp/v1/json/search/course/light?from=";
    var set2 = "&to";
    var set3 = "&searchType=departure&shinkansen=true&limitedExpress=true&redirect=false&contentsMode=pc&key={ご自身のアクセスキーを入力してください}";
    var fromData = document.getElementById("from").value;
    var forData = document.getElementById("for").value;
    var url = set1 + fromData + set2 + forData + set3;
    var encode = encodeURI(url);
    result.innerHTML = "<p>" + encode + "</p>"
}