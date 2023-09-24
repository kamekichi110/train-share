function searchJSON() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results

    fetch('station-info.json') // Assuming data.json is in the same directory
        .then(response => response.json())
        .then(data => {
            const filteredData = data.filter(item => {
                return item.name.toLowerCase().includes(searchInput);
            });

            if (filteredData.length === 0) {
                resultsDiv.innerHTML = '該当するデータがありません。';
            } else {
                filteredData.forEach(item => {
                    const resultItem = document.createElement('div');
                    resultItem.innerHTML = `<p>駅名: ${item.station}<br>乗り換え路線: ${item.line}<br>エリア: ${item.area}`;
                    resultsDiv.appendChild(resultItem);
                });
            }
        })
        .catch(error => {
            console.error('データの読み込み中にエラーが発生しました: ' + error);
        });
}
