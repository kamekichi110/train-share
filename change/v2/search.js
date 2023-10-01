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
        data.innerHTML = '<option value="大宮(埼玉県)">大宮(埼玉県)</option><option value="大宮(京都府)">大宮(京都府)</option>';
    } else if (text = "相生") {
        data.innerHTML = '<option value="相生(岐阜県)">相生(岐阜県)</option><option value="相生(兵庫県)">相生(兵庫県)</option>';
    } else if (text = "愛野") {
        data.innerHTML = '<option value="愛野(静岡県)">愛野(静岡県)</option><option value="愛野(長崎県)">愛野(長崎県)</option>';
    }
     else {
        data.innerHTML = '<option value="">名前重複駅なし</option>'
    }
}