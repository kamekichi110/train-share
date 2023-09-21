// ハバーサイン法を使用して2点間の距離を計算
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // 地球の半径（km）
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
}

// 最も近い地点を検索
function findClosestLocation(userLat, userLon, locationsData) {
    let closestLocation = null;
    let closestDistance = Infinity;

    for (const location of locationsData) {
        const distance = calculateDistance(userLat, userLon, location.latitude, location.longitude);
        if (distance < closestDistance) {
            closestLocation = location;
            closestDistance = distance;
        }
    }

    return closestLocation;
}

// ページ読み込み後に位置情報の許可を求める
window.addEventListener('load', function() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const userLatitude = position.coords.latitude;
            const userLongitude = position.coords.longitude;

            document.getElementById('locationResult').textContent = `
                緯度: ${userLatitude}度<br>
                経度: ${userLongitude}度
            `;
        }, function(error) {
            console.error('位置情報の取得エラー:', error);
        });
    } else {
        document.getElementById('locationResult').textContent = 'ブラウザが位置情報をサポートしていません。';
    }
});

// ボタンクリック時に最も近い地点を検索
function getLocationAndFindClosestLocation() {
    navigator.geolocation.getCurrentPosition(function(position) {
        const userLatitude = position.coords.latitude;
        const userLongitude = position.coords.longitude;

        // JSONデータを読み込む（Ajaxを使用）
        fetch('locations.json')
            .then(response => response.json())
            .then(locationsData => {
                // 最も近い地点を検索
                const closestLocation = findClosestLocation(userLatitude, userLongitude, locationsData);

                if (closestLocation) {
                    document.getElementById('closestLocation').textContent = `最も近い地点: ${closestLocation.name}`;
                } else {
                    document.getElementById('closestLocation').textContent = '近くの地点は見つかりませんでした。';
                }
            })
            .catch(error => console.error('JSONデータの読み込みエラー:', error));
    }, function(error) {
        console.error('位置情報の取得エラー:', error);
    });
}