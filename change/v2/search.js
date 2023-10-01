function area0() {
    var text = document.getElementById("from").value;
    var data = document.getElementById("box0").value;
    text = data;
}
function area2() {
    var text = document.getElementById("for").value;
    var data = document.getElementById("box1").value;
    text = data;
}
function box0() {
    var text = document.getElementById("from").value;
    var data = document.getElementById("box0");

    //if関数で名前重複駅があるか検索するプログラム
    if (text = "大宮") {
        data.innerHTML = '';
    } else {
        data.innerHTML = '<option value="">名前重複駅なし</option>'
    }
}