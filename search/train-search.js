function searchJSON() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results

    fetch('train-info.json') // Assuming data.json is in the same directory
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
                    resultItem.innerHTML = `<p>車両形式: ${item.name}<br>運用会社: ${item.group}<br>編成: ${item.formation}<br> 制御機器: ${item.control}<br>記録など:<br>${item.record}`;
                    resultsDiv.appendChild(resultItem);
                });
            }
        })
        .catch(error => {
            console.error('データの読み込み中にエラーが発生しました: ' + error);
        });
}
