function result() {
    var ResultData = document.getElementById("result");
    var SelectLine = document.getElementById("line-list");

    var error0000 = "error1000]\n路線情報入力中のため\n表示できません";
    var errorResult = "路線データ読み込みエラー"
    //JR東日本路線
    var yamanote = "東京<br>有楽町<br>新橋<br>浜松町<br>田町<br>高輪ゲートウェイ<br>品川<br>大崎<br>五反田<br>目黒<br>恵比寿<br>渋谷<br>原宿<br>代々木<br>新宿<br>新大久保<br>高田馬場<br>目白<br>池袋<br>大塚<br>巣鴨<br>駒込<br>田端<br>西日暮里<br>日暮里<br>鶯谷<br>上野<br>御徒町<br>秋葉原<br>神田";
    var keihin = "";

    //東武鉄道路線
    var tojo = "池袋<br>北池袋<br>下板橋<br>大山<br>中板橋<br>ときわ台<br>上板橋<br>東武練馬<br>下赤塚<br>成増<br>和光市<br>朝霞<br>朝霞台<br>志木<br>柳瀬川<br>みずほ台<br>鶴瀬<br>ふじみ野<br>上福岡<br>新河岸<br>川越<br>川越市<br>霞ヶ関<br>鶴ヶ島<br>若葉<br>坂戸<br>北坂戸<br>高坂<br>東松山<br>森林公園<br>つきのわ<br>武蔵嵐山<br>小川町<br>東武竹沢<br>南寄居(ホンダ寄居前)<br>男衾<br>鉢形<br>玉淀<br>寄居";
    var noda = "大宮<br>北大宮<br>大宮公園<br>大和田<br>七里<br>岩槻<br>東岩槻<br>豊春<br>八木崎<br>春日部<br>藤の牛島<br>南桜井<br>川間<br>七光台<br>清水公園<br>愛宕<br>野田市<br>梅郷<br>運河<br>江戸川台<br>初石<br>流山おおたかの森<br>豊四季<br>柏<br>新柏<br>増尾<br>逆井<br>高柳<br>六実<br>新鎌ヶ谷<br>鎌ヶ谷<br>馬込沢<br>塚田<br>新船橋<br>船橋";
    if (SelectLine.value = "yamanote") {
        ResultData.innerHTML = yamanote;
    };
    if (SelectLine.value = "tojo") {
                            ResultData.innerHTML = tojo;
                        };
    if (SelectLine.value = "noda") {
                                ResultData.innerHTML = noda;
                            };
                        };