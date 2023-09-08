window.onload = loaded();
function loaded() {
    var output_text = document.getElementById("day");
    var year = "2023";
    var month = "09";
    var day = "08";
    var update = "更新";
    output_text.innerHTML = year + "/" + month + "/" + day + update;
}