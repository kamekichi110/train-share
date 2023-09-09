window.onload = setTimeout(() => {
    var output0 = document.getElementById("delay-list");
    var output1 = document.getElementById("stop-list");
    var innerNot = "[遅延・運転見合わせ等情報無し]<br>手動入力のため、<br>タイムラグがある可能性があります。";
    var innerDelay = "JR八高川越線【八王子〜川越】<br>常磐線【品川〜水戸】<br>常磐線(快速)【品川〜取手】<br>両毛線";
    var innerStop = "JR常磐線【水戸〜いわき】<br>久留里線【久留里〜上総亀山】<br>内房線【館山〜安坊鴨川】";
    var update = document.getElementById("UpdateTime");
    var UpYear = "2023";
    var UpMonth = "09";
    var UpDay = "09";
    var UpTime = "23:00";
    var UpdateTime = UpTime + "/" + UpMonth + "/" + UpDay + "/" + UpTime;
    update.innerHTML = UpdateTime;
    output0.innerHTML = innerDelay;
    output1.innerHTML = innerStop;
}, 2000);