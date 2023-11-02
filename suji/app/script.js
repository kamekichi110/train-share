document.addEventListener("DOMContentLoaded", function() {
  var pw = "認証パスワードを入力";
  set(pw);
});
function set(display) {
var id = window.prompt(display);
var encode = encodeURI(id);

// '%'、アルファベット、1と0を削除
var result = encode.replace(/[A-Za-z%012]/g, '') + 811 + 1;
  if (result == '383893839638856998111') {
    document.getElementById("display").innerHTML = '<iframe src="https://www.appsheet.com/start/34bbda65-04fe-4891-a37d-5c24ec471e91#viewStack%5B0%5D%5Bidentifier%5D%5BType%5D=Control&viewStack%5B0%5D%5Bidentifier%5D%5BName%5D=%E3%82%B9%E3%82%B8%E6%83%85%E5%A0%B1(%E8%B2%A8%E7%89%A9%E9%96%A2%E4%BF%82)&appName=%E3%82%B9%E3%82%B8%E3%82%AB%E3%83%AC%E3%83%B3%E3%83%80%E3%83%BC-933843562" class="frame"></iframe>';
  } else {
    document.getElementById("display").innerHTML = '<h1>非公開スジ情報</h1><p><button style="size: 24px;" onclick="set()">再認証する</button></p><p><img src="https://train-share.f5.si/asset/icon/main.png" style="width: 100px; border: darkgreen solid 4px;">powered by train-share</p>';
  }
}