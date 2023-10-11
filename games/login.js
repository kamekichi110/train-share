window.onload = setTimeout(() => {
    var key = "tobu";
    var num = 8500;
    var set = 1;
    var pw = window.prompt("認証IDを入力してください。", "a1b2c3d4");
    if (pw == "8110") {
        window.alert("認証完了しました。");
        var pass1 = 8000 - 54 + 163;
        var pass2 = pass1 - set;
        var pass3 = num * 0;
        var result = pass3 + pass2;
        var id = key + result + "f";
        if (id = "tobu8110f") {
            var page = document.getElementById("page").value;
            window.location.href = "https://train-share.f5.si/games/" + page + "/" + id + page + ".html";
        } else {
            window.alert("ホームに戻ります。");
            console.log(getURL);
            window.location.href = "https://train-share.f5.si/index.html"
        };
    } else {
        window.alert("認証失敗");
    }
}, 200);