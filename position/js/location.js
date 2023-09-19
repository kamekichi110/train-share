window.onload = setTimeout(() => {
    loc_search();
  }, 200);
  function loc_search() {
       navigator.geolocation.getCurrentPosition(start);
    var output_ido = document.getElementById("ido");
    var output_keido = document.getElementById("keido");
    //駅情報出力
    var result = document.getElementById("result-station");
    output_ido.innerHTML = "緯度測位中…";
    output_keido.innerHTML = "経度測位中…";
    result.innerHTML = "最寄り駅検索中…";
    document.getElementById("seido").innerHTML = "位置精度:" + "計測中…";
  };
  function start(position) {
    setTimeout(() => {
    var ido = position.coords.latitude;
    var keido = position.coords.longitude;
    var text_ido = "緯度：" + ido;
    var text_keido = "経度：" + keido;
    var output_ido = document.getElementById("ido");
    var output_keido = document.getElementById("keido");
    
    //駅情報出力
    var result = document.getElementById("result-station");
    output_ido.innerHTML = text_ido;
    output_keido.innerHTML = text_keido;
      document.getElementById("seido").innerHTML = "位置精度:" + position.coords.accuracy;
    if (35.9045 < ido && ido < 35.9065 && 139.6235 < keido && keido < 139.6265) {
      result.innerHTML = "大宮駅"
    } else if (35.7285 < ido && ido < 35.7325 && 139.7095 < keido && keido < 139.7135) {
      result.innerHTML = "池袋駅"
    } else if (35.7765 < ido && ido < 35.7825 && 139.7185 < keido && keido < 139.7225) {
      result.innerHTML = "赤羽駅"
    } else if (35.7185 < ido && ido < 35.73 && 139.705 < keido && keido < 139.745) {
      result.innerHTML = "護国寺駅";
    } else if (35.7755 < ido && ido < 35.7795 && 139.7195 < keido && keido < 139.7235) {
        result.innerHTML = "赤羽駅"
      }
      else if (35.8855 < ido && ido < 35.9055 && 139.6315 < keido && keido < 139.6355) {
        result.innerHTML = "さいたま新都心駅"
      } else if (35.8825 < ido && ido < 35.8905 && 139.6355 < keido && keido < 139.6505) {
        result.innerHTML = "与野駅";
      }
      else {
      result.innerHTML ="最寄りの駅が見つかりません";
    };
    }, 1500);
  }