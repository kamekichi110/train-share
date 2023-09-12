function yamanote() {
    var ResultData = document.getElementById("result");
    var yamanote = "東京<hr>有楽町<hr>新橋<hr>浜松町<hr>田町<hr>高輪ゲートウェイ<hr>品川<hr>大崎<hr>五反田<hr>目黒<hr>恵比寿<hr>渋谷<hr>原宿<hr>代々木<hr>新宿<hr>新大久保<hr>高田馬場<hr>目白<hr>池袋<hr>大塚<hr>巣鴨<hr>駒込<hr>田端<hr>西日暮里<hr>日暮里<hr>鶯谷<hr>上野<hr>御徒町<hr>秋葉原<hr>神田";
    ResultData.innerHTML = yamanote;
    var name = document.getElementById("line-name");
    name.innerHTML = "JR山手線";
    ListClose();
}
function tojo() {
    var ResultData = document.getElementById("result");
    var tojo = "池袋<hr>北池袋<hr>下板橋<hr>大山<hr>中板橋<hr>ときわ台<hr>上板橋<hr>東武練馬<hr>下赤塚<hr>成増<hr>和光市<hr>朝霞<hr>朝霞台<hr>志木<hr>柳瀬川<hr>みずほ台<hr>鶴瀬<hr>ふじみ野<hr>上福岡<hr>新河岸<hr>川越<hr>川越市<hr>霞ヶ関<hr>鶴ヶ島<hr>若葉<hr>坂戸<hr>北坂戸<hr>高坂<hr>東松山<hr>森林公園<hr>つきのわ<hr>武蔵嵐山<hr>小川町<hr>東武竹沢<hr>南寄居(ホンダ寄居前)<hr>男衾<hr>鉢形<hr>玉淀<hr>寄居";
    ResultData.innerHTML = tojo;
    var name = document.getElementById("line-name");
    name.innerHTML = "東武東上線"
    ListClose();
}
function noda() {
    var ResultData = document.getElementById("result");
    var noda = "大宮<hr>北大宮<hr>大宮公園<hr>大和田<hr>七里<hr>岩槻<hr>東岩槻<hr>豊春<hr>八木崎<hr>春日部<hr>藤の牛島<hr>南桜井<hr>川間<hr>七光台<hr>清水公園<hr>愛宕<hr>野田市<hr>梅郷<hr>運河<hr>江戸川台<hr>初石<hr>流山おおたかの森<hr>豊四季<hr>柏<hr>新柏<hr>増尾<hr>逆井<hr>高柳<hr>六実<hr>新鎌ヶ谷<hr>鎌ヶ谷<hr>馬込沢<hr>塚田<hr>新船橋<hr>船橋";
    ResultData.innerHTML = noda;
    var name = document.getElementById("line-name");
    name.innerHTML = "<a href='./data/TD.html'>東武野田線</a><br>(東武アーバンパークライン)"
    ListClose();
}
function ListClose() {
    var list = document.getElementsByTagName("details");
    list.open = false;
}