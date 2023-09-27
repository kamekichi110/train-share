function alarm() {
    var now = new Date();
    var hour = now.getHours;
    var minute = now.getMinutes;
    var setHour = document.getElementById("hour");
    var setMinute = document.getElementById("minute");
    var time = hour + ":" + minute;
    var set = setHour.value + ":" + setMinute.value;
    if (time = set) {
        document.getElementById("mp3").play();
    } else {
        
    }
};
function stop()