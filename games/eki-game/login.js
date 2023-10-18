window.onload = setTimeout(() => {
    var key = "tobu";
    var num = 8500;
    var set = 1;
    var pw = window.prompt("認証IDを入力してください。", "a1b2c3d4");
    var pwSet = encodeURI(pw);
    var pwResult = pwSet.replace(/[A-Za-z%012]/g, '');
    console.log('setting pw in login program...');
    window.alert('認証中です…')
    if (pwResult == "69668") {
        window.alert("認証完了しました。");
        var pass1 = 8000 - 54 + 163;
        var pass2 = pass1 - set;
        var pass3 = num * 0;
        var result = pass3 + pass2;
        var id = key + result + "F";
        if (id = "tobu8110F") {
            id = "tobu8110f"
            var page = document.getElementById("page").value;
            window.location.href = "https://train-share.f5.si/games/eki-game/" + page + "/" + id + page + ".html";
        } else {
            window.alert("ホームに戻ります。");
            console.log('getURL');
            window.location.href = "../index.html"
        };
    } else {
        window.alert("認証失敗\n処理中です…\nしばらくお待ちください");
        setTimeout(() => {
            console.log('set access user id...');
            console.log('waiting...');
            console.log('redirect url set...');
            console.log('urlID: home');
            console.log('pw-data: ./data/db/pw/sec0/ty09.json');
            console.log('waiting...');
            console.log('end message waiting...');
            console.log('function end!');
        }, 500);
        setTimeout(() => {
            window.alert("処理が完了しました");
            console.log('add blackList...');
            window.alert('関数[addBlackList()]実行中…')
            window.alert('完了しました。ページ移動します。')
            console.log('success!');
            window.location.href = "https://train-share.f5.si/login-error.html"
        }, 1500);
    };
}, 200);