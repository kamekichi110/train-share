function search() {
    var fromTXT = document.getElementById("from");
    var fromAREA = document.getElementById(location0);
    var forTXT = document.getElementById("for").value;
    var forAREA = document.getElementById(location1);
    var viaSec = document.getElementById("via-sec");
    var viaTXT = document.getElementById("via");

    //utf-8 encode
    var fromData = fromTXT.value + fromAREA.value;
    var forData = forTXT.value + forAREA.value;
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
    location = url;
    document.getElementById("link").href = url;
    document.getElementById("link").innerHTML = url;
}