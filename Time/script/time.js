window.onload = setTimeout(() => {
    var now = new Date();
    var time = now.getHours();
    var target = document.getElementById(time);
    target.classList.replace("unJust", "Just");
    alert("情報の読み込み完了しました。");
    setTimeout(() => {
        var TimeList = document.getElementById("TimeList");
        TimeList.style.display = "block";
        window.location.href = "#" + time;
    }, 640);
}, 1000);