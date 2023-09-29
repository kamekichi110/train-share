function search() {
    var fromTXT = document.getElementById("from").value;
    var fromAREA = document.getElementById(location0).value;
    var forTXT = document.getElementById("for").value;
    var forAREA = document.getElementById(location1).value;
    var viaSec = document.getElementById("via-sec").value;
    var viaTXT = document.getElementById("via").value;

    //utf-8 encode
    var fromData = fromTXT + fromAREA;
    var forData = forTXT + forAREA;
    var from = encodeURI(fromData);
    var for0 = encodeURI(forData);

    var URL0 = "https://api.ekispert.jp/v1/xml/search/course/light?from=";
    var URL1 = "&to=";
    var URL2 = "&searchType=";
    var type = "departure";
    var URL3 = "&shinkansen=";
    var shinkansen = document.getElementById("shinkansen").value;
    var URL4 = "&limitedExpress=";
    var exp = document.getElementById("exp").value;
    var URL5 = "&redirect=true&contentsMode=sp";
    var URL6 = "&key=";
    var key = "LE_DDLV9n4GxgPku";
    var url = URL0 + from + URL1 + for0 + URL2 + type + URL3 + shinkansen + URL4 + exp + URL5 +URL6 + key;
    document.getElementById(result).src = url;
    alert('検索処理完了')
}