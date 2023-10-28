window.onload = setTimeout(() => {
    var out = document.getElementById("day");
    var year = "2023";
    var month = "10";
    var day = "18";
    var time = "08:00"
    out.innerText = year + "/" + month + "/" + day + "/" + time + "更新";
}, 2000);
window.onload = setTimeout(() => {
    var out = document.getElementById("day");
    out.innerHTML = "情報取得中…";
    var icon = document.getElementsByClassName("icon");
    icon.onclick = "home()";
}, 200);
function home() {
    window.location.href = "https://kamekichi110.github.io/train-share/index.html"
}
document.querySelector('header').addEventListener('click', function() {
    window.location.href = 'https://train-share.f5.si/';
});  