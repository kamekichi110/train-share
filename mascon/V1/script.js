function power() {
  var noti = document.getElementById("noti").value;
  var notiData = Number(noti);
  var speedText = document.getElementById("speedNum");
  var speedNum = Number(speedText.value);
  if (notiData === 0) {
    speedText.value = speedNum;
    console.log('N');
  } else if (notiData === 1) {
    speedText.value = speedNum + 1;
    console.log('P4');
  } else if (notiData === 2) {
    speedText.value = speedNum - 1;
    console.log('B5');
  } else {
    console.log('error!');
  }
  if (Number(speedText.value) < 0) {
    speedText.value = 0;
  } else if (Number(speedText.value) > 110) {
    speedText.value = 110;
  }
  speedText = speedNum;
    setTimeout(power, 200);
}

function vvvfTime() {
  document.getElementById("B").currentTime = 22.0995918;
  vvvf1();
  power();
}

function vvvf1() {
  document.getElementById("vvvf").value = document.getElementById("P").currentTime;
  var speed = document.getElementById("vvvf").value;
  var speedNum = Number(speed);
  if (speedNum > 22) {
    var n = document.getElementById("N");
    n.play();
    n.addEventListener("timeupdate", function() {
      if (n.currentTime > 2.5) {
        n.currentTime = 1;// 再生位置を0.5秒に戻す
        n.play();
      }
    });
    n.play();
    document.getElementById("N").play();
    document.getElementById("P").pause();
    document.getElementById("B").pause();
  } else {
  setTimeout(vvvf1, 1);
  }
}

function vvvf2() {
  var vvvf = document.getElementById("vvvf").value;
  var p = document.getElementById("P");
  var b = document.getElementById("B");
  p.currentTime = b.currentTime;
  vvvf = b.currentTime;
  setTimeout(vvvf2, 1);
}

function P() {
  document.getElementById("noti").value = 1;
  vvvf1();
  var p = document.getElementById("P");
  var b = document.getElementById("B");
  var vvvf = document.getElementById("vvvf").value;
  var position = Number(vvvf);
  document.getElementById("N").pause();
    document.getElementById("N").currentTime = 0;
  
  p.currentTime = 22.0995918 - b.currentTime;
  b.pause();
  p.play();
}
function N() {
  var notiOff = document.getElementById("noti-off");
  notiOff.currentTime = 0;
  notiOff.play();
  document.getElementById("noti").value = 0;
  vvvf1();
  var vvvf = document.getElementById("vvvf").value;
  var n = document.getElementById("N");
  var p = document.getElementById("P");
  var b = document.getElementById("B");
  b.currentTime = Math.abs(22.0995918 - Number(vvvf));
  p.currentTime = 22.0995918 - b.currentTime;
  n.currentTime = 0;
  p.pause();
  b.pause();
}
function B() {
  document.getElementById("noti").value = 2;
  vvvf1();
  var b = document.getElementById("B");
  var n = document.getElementById("N");
  var p = document.getElementById("P");
  var vvvf = document.getElementById("vvvf").value;
  p.pause();
  n.pause();
  b.currentTime = Math.abs(22.0995918 - Number(vvvf));
  b.play();
}

window.onload = setTimeout(vvvfTime, 200);