window.onload = setTimeout(() => {
    var out = document.getElementById("day");
    var year = "2023";
    var month = "09";
    var day = "11";
    var time = "07:50"
    out.innerText = year + "/" + month + "/" + day + "/" + time + "更新";
}, 2000);
window.onload = setTimeout(() => {
    var out = document.getElementById("day");
    out.innerHTML = "情報取得中…"
}, 200);