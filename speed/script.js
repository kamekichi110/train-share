function test() {
    var num = 0;
  var watch_id;
      watch_id = navigator.geolocation.watchPosition(test2, function(e) { alert(e.message); }, {"enableHighAccuracy": true, "timeout": 20000, "maximumAge": 2000});
  }
  
  function clear() {
    var num = 0;
  var watch_id;
      navigator.geolocation.clearWatch(watch_id);
  }
  
  function test2(position) {
    var num = 0;
  var watch_id;
    var speed = position.coords.speed;
    var sp0 = speed * 360;
    var sp1 = sp0 / 1000;
    var speedNum = sp1 - 30;
    var num0 = document.getElementById("speed");
    num0.style.transform = `rotate(${speedNum}deg)`;
    document.getElementById("num").innerHTML = speed + " km/h";
   var date = new Date(position.timestamp);
    document.getElementById("time").innerHTML = date.toLocaleString();
  }