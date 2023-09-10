window.onload = setTimeout(() => {
    var output0 = document.getElementById("delay-list");
    var output1 = document.getElementById("stop-list");
    var innerNot = "[遅延・運転見合わせ等情報無し]<br>手動入力のため、<br>タイムラグがある可能性があります。";
    var innerDelay = "";
    var innerStop = "JR常磐線【水戸〜いわき】<br>久留里線【久留里〜上総亀山】<br>内房線【館山〜安坊鴨川】";
    var update = document.getElementById("UpdateTime");
    var UpYear = "2023";
    var UpMonth = "09";
    var UpDay = "10";
    var UpTime = "15:20更新";
    var UpdateTime = UpTime + "/" + UpMonth + "/" + UpDay + "/" + UpTime;
    update.innerHTML = UpdateTime;
    output0.innerHTML = innerNot;
    output1.innerHTML = innerNot;
}, 2500);