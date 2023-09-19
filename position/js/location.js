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
      result.innerHTML = "大宮駅";
    } else if (35.7285 < ido && ido < 35.7325 && 139.7095 < keido && keido < 139.7135) {
      result.innerHTML = "池袋駅";
    } else if (35.7765 < ido && ido < 35.7825 && 139.7185 < keido && keido < 139.7225) {
      result.innerHTML = "赤羽駅";
    } else if (35.7185 < ido && ido < 35.73 && 139.705 < keido && keido < 139.745) {
      result.innerHTML = "護国寺駅";
    } else if (35.7245 < ido && ido < 35.7285 && 139.7165 < keido && keido < 139.7205) {
      result.innerHTML = "東池袋";
    }
     else if (35.7755 < ido && ido < 35.7795 && 139.7195 < keido && keido < 139.7235) {
        result.innerHTML = "赤羽駅";
      }
      else if (35.8855 < ido && ido < 35.9055 && 139.6315 < keido && keido < 139.6355) {
        result.innerHTML = "さいたま新都心駅";
      } else if (35.8825 < ido && ido < 35.8905 && 139.6355 < keido && keido < 139.6505) {
        result.innerHTML = "与野駅";
      } else if(35.8705 < ido && ido < 35.8745 && 139.6435 < keido && keido < 139.6475) {
        result.innerHTML = "北浦和";
      } else if (35.8565 < ido && ido < 35.8605 && 139.6555 < keido && keido < 139.6595) {
        result.innerHTML = "浦和";
      } else if (35.8455 < ido && ido < 35.8495 && 139.6675 < keido && keido < 139.6715) {
        result.innerHTML = "南浦和";
      } else if (35.8255 < ido && ido < 35.8295 && 139.6885 < keido && keido < 139.6925) {
        result.innerHTML = "蕨";
      } else if (35.8135 < ido && ido < 35.8175 && 139.7025 < keido && keido < 139.7065) {
        result.innerHTML = "西川口";
      } else if (35.7995 < ido && ido < 35.8035 && 139.7155 < keido && keido < 139.7195) {
        result.innerHTML = "川口";
      } else if (35.7585 < ido && ido < 35.7625 && 139.7205 < keido && keido < 139.7245) {
        result.innerHTML = "十条";
      } else if (35.7425 < ido && ido < 35.7465 && 139.7175 < keido && keido < 139.7215) {
        result.innerHTML = "板橋";
      } else if (35.7845 < ido && ido < 35.7885 && 139.7035 < keido && keido < 139.7075) {
        result.innerHTML = "北赤羽";
      } else if (35.8055 < ido && ido < 35.8095 && 139.6765 < keido && keido < 139.6805) {
        result.innerHTML = "戸田公園";
      } else if (35.8155 < ido && ido < 35.8195 && 139.6675 < keido && keido < 139.6715) {
        result.innerHTML = "戸田";
      } else if (35.8255 < ido && ido < 35.8295 && 139.6585 < keido && keido < 139.6625) {
        result.innerHTML = "北戸田";
      } else if (35.8445 < ido && ido < 35.8485 && 139.6435 < keido && keido < 139.6475) {
        result.innerHTML = "武蔵浦和";
      } else if (35.8515 < ido && ido < 35.8555 && 139.6355 < keido && keido < 139.6395) {
        result.innerHTML = "中浦和";
      } else if (35.8655 < ido && ido < 35.8695 && 139.6295 < keido && keido < 139.6335) {
        result.innerHTML = "南与野";
      } else if (35.8795 < ido && ido < 35.8825 && 139.6245 < keido && keido < 139.6285) {
        result.innerHTML = "与野本町";
      } else if (35.8885 < ido && ido < 35.8925 && 139.6265 < keido && keido < 139.6305) {
        result.innerHTML = "北与野"
      }
      else {
      result.innerHTML ="最寄りの駅が見つかりません";
    };
    }, 1500);
  }