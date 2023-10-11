window.onload = setting();
function setting() {
    console.log("page data loaded!");
}
function RedirectPage(URL) {
    var getURL = "f5si"
    if (URL = "tobu8110f") {
        var page = document.getElementById("page").value;
        window.location.href = "https://train-share.f5.si/games/" + URL + page + ".html";
    } else if(URL = "0000") {
        window.alert("ホームに戻ります。");
        console.log(getURL);
        window.location.href = "https://train-share.f5.si/index.html"
    }
}