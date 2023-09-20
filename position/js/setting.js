window.onload = setTimeout(() => {
    navigator.geolocation.getCurrentPosition(start);
    var output_ido = document.getElementById("ido");
    var output_keido = document.getElementById("keido");
    //駅情報出力
    var result = document.getElementById("station");
    output_ido.innerHTML = "緯度測位中…";
    output_keido.innerHTML = "経度測位中…";
    result.innerHTML = "最寄り駅検索中…";
    document.getElementById("seido").innerHTML = "位置精度:" + "計測中…";
    setting();
}, 300);;
function start(position) {
    import station from './locate.json' assert {type: 'json'};
        setTimeout(() => {
        var ido = position.coords.latitude;
        var keido = position.coords.longitude;
        var text_ido = "緯度：" + ido;
        var text_keido = "経度：" + keido;
        var output_ido = document.getElementById("ido");
        var output_keido = document.getElementById("keido");
        
        //駅情報出力
        var result = document.getElementById("station");
        output_ido.innerHTML = text_ido;
        output_keido.innerHTML = text_keido;
        document.getElementById("seido").innerHTML = "位置精度:" + position.coords.accuracy;

        //各駅の緯度経度
        /*
        見本
        {
                "tobu": {
                    "omiya": {
                        "name": "大宮",
                        "ido": ,
                        "keido"
                    }
                }
            }
        }
        ______________________________
        station.tobu.omiya.name
        */
       var test = station.tobu.omiya.name;
       output_ido.innerHTML = test;
}, 1500)
}