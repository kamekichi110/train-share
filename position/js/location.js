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
    document.getElementById("result-line").innerHTML = "";
    
    //駅情報出力
    var result = document.getElementById("result-station");
    var line = document.getElementById("result-line").innerHTML;
    output_ido.innerHTML = text_ido;
    output_keido.innerHTML = text_keido;
      document.getElementById("seido").innerHTML = "位置精度:" + position.coords.accuracy;
    if (35.9045 < ido && ido < 35.9065 && 139.6235 < keido && keido < 139.6265) {
      result.innerHTML = "大宮駅";
      line = "乗り換え案内<br>野田線<br>ニューシャトル<br>埼京線<br>京浜東北線<br>高崎線<br>宇都宮線<br>湘南新宿ライン<br>上野東京ライン<br>新幹線"
    } else if (35.7285 < ido && ido < 35.7325 && 139.7095 < keido && keido < 139.7135) {
      result.innerHTML = "池袋駅";
       line = "乗り換え案内<br>東武東上線<br>西武池袋線<br>丸ノ内線<br>有楽町線<br>副都心線<br>山手線<br>埼京線<br>湘南新宿ライン"
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
      //山手線
else if (35.6795 < ido && 35.6835 < ido && 139.7645 < keido && keido < 139.7685) {
  result.innerHTML = "東京駅";
  } 
  
  else if (35.6735 < ido && 35.6775 < ido && 139.7615 < keido && keido < 139.7655) {
  result.innerHTML = "有楽町駅";
  } 
  
  else if (35.6635 < ido && 35.6675 < ido && 139.7575 < keido && keido < 139.7615) {
  result.innerHTML = "新橋駅";
  } 
  
  else if (35.6535 < ido && 35.6575 < ido && 139.7545 < keido && keido < 139.7585) {
  result.innerHTML = "浜松町駅";
  } 
  
  else if (35.6435 < ido && 35.6475 < ido && 139.7455 < keido && keido < 139.7477) {
  result.innerHTML = "田町駅";
  } 
  
  else if (35.6285 < ido && 35.6325 < ido && 139.7385 < keido && keido < 139.7424) {
  result.innerHTML = "品川駅";
  }
  
  else if (35.6175 < ido && 35.6215 < ido && 139.7265 < keido && keido < 139.7305) {
  result.innerHTML = "大崎駅";
  }
  
  else if (35.6245 < ido && 35.6285 < ido && 139.7215 < keido && keido < 139.7255) {
  result.innerHTML = "五反田駅";
  }
  
  else if (35.6315 < ido && 35.6355 < ido && 139.7135 < keido && keido < 139.7175) {
  result.innerHTML = "目黒駅";
  }
  
  else if (35.6445 < ido && 35.6485 < ido && 139.7085 < keido && keido < 139.7125) {
  result.innerHTML = "恵比寿駅";
  }
  
  else if (35.6565 < ido && 35.6605 < ido && 139.6995 < keido && keido < 139.7045) {
  result.innerHTML = "渋谷駅";
  }
  
  else if (35.6695 < ido && 35.6725 < ido && 139.7005 < keido && keido < 139.7045) {
  result.innerHTML = "原宿駅";
  }
  
  else if (35.6815 < ido && 35.6855 < ido && 139.7005 < keido && keido < 139.7045) {
  result.innerHTML = "代々木駅";
  }
  
  else if (35.6885 < ido && 35.6925 < ido && 139.6985 < keido && keido < 139.7045) {
  result.innerHTML = "新宿駅";
  }
  
  else if (35.6995 < ido && 35.7035 < ido && 139.6975 < keido && keido < 139.70275) {
  result.innerHTML = "新大久保駅";
  }
  
  else if (35.7105 < ido && 35.7145 < ido && 139.7025 < keido && keido < 139.7055) {
  result.innerHTML = "高田馬場駅";
  }
  
  else if (35.7195 < ido && 35.7235 < ido && 139.7045 < keido && keido < 139.7085) {
  result.innerHTML = "目白駅";
  }
  
  else if (35.7295 < ido && 35.7335 < ido && 139.7265 < keido && keido < 139.7305) {
  result.innerHTML = "大塚駅";
  }
  
  else if (35.7315 < ido && 35.7355 < ido && 139.7375 < keido && keido < 139.7415) {
  result.innerHTML = "巣鴨駅";
  }
  
  else if (35.7345 < ido && 35.7385 < ido && 139.7425 < keido && keido < 139.7465) {
  result.innerHTML = "田端駅";
  }
  
  else if (35.7305 < ido && 35.7345 < ido && 139.7645 < keido && keido < 139.7685) {
  result.innerHTML = "西日暮里駅";
  }
  
  else if (35.7345 < ido && 35.7385 < ido && 139.7425 < keido && keido < 139.7465) {
  result.innerHTML = "日暮里駅";
  }
  
  else if (35.7185 < ido && 35.7225 < ido && 139.7765 < keido && keido < 139.7805) {
  result.innerHTML = "鶯谷駅";
  }
  
  else if (35.7115 < ido && 35.7155 < ido && 139.7755 < keido && keido < 139.7795) {
  result.innerHTML = "上野駅";
  }
  
  else if (35.7055 < ido && 35.7095 < ido && 139.7725 < keido && keido < 139.7765) {
  result.innerHTML = "御徒町駅";
  }
  
  else if (35.6965 < ido && 35.7005 < ido && 139.7725 < keido && keido < 139.7765) {
  result.innerHTML = "秋葉原駅";
  }
  
  else if (35.6895 < ido && 35.6935 < ido && 139.7685 < keido && keido < 139.7725) {
  result.innerHTML = "神田駅";
  } else if (35.6335 < ido && ido < 35.6375 && 139.7385 < keido && keido < 139.7425) {
    result.innerHTML = "高輪ゲートウェイ駅"
  }
  //野田線
      else {
      result.innerHTML ="最寄りの駅が見つかりません";
    };
    }, 1500);
  }