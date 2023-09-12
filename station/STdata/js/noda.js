const url = "noda.json";	// JSONファイル名
let result;

// JSONファイルを整形して表示する
function formatJSON(data){
	// 整形して表示
	let html = "<table>";
	html += "<caption>" + data.line + "</caption>";

	for(let station of data.station){
		html += "<tr><td>" + station.num + "</td><td>" + station.name + "</td></tr>";
	}
	html += "</table>";

	result.innerHTML = html;
}

// 起動時の処理
window.addEventListener("load", ()=>{
	// JSON表示用
	result = document.getElementById("result");

	// JSONファイルを取得して表示
	fetch(url)
		.then( response => response.json())
		.then( data => formatJSON(data));

});