function searchTRAIN() {
    var result = document.getElementById("result");
    var location1 = document.getElementById("location1").value;
    var location2 = document.getElementById("location2").value;
    var set1 = "https://api.ekispert.jp/v1/json/search/course/light?from=";
    var set2 = "&to";
    var set3 = "&searchType=departure&shinkansen=true&limitedExpress=true&redirect=false&contentsMode=pc&key={ご自身のアクセスキーを入力してください}";
    var fromData = document.getElementById("from").value;
    var forData = document.getElementById("for").value;
    var fromText = fromData + location1;
    var forText = forData + location2;
    var url = set1 + fromText + set2 + forText + set3;
    var encode = encodeURI(url);
    result.innerHTML = "<p>" + encode + "</p>"
}