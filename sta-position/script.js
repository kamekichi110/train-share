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

// ページ読み込み後にJSONデータを読み込み
window.addEventListener('load', function() {
    fetch('locations.json') // 外部のJSONファイルを読み込み
        .then(response => response.json())
        .then(locationsData => {
            // ユーザーの現在位置を取得
            navigator.geolocation.getCurrentPosition(function(position) {
                const userLatitude = position.coords.latitude;
                const userLongitude = position.coords.longitude;

                // 最も近い地点を検索
                const closestLocation = findClosestLocation(userLatitude, userLongitude, locationsData);

                if (closestLocation) {
                    document.getElementById('closestLocation').textContent = `最も近い地点: ${closestLocation.name}`;
                } else {
                    document.getElementById('closestLocation').textContent = '近くの地点は見つかりませんでした。';
                }
            }, function(error) {
                console.error('位置情報の取得エラー:', error);
            });
        })
        .catch(error => console.error('JSONデータの読み込みエラー:', error));
});

// ボタンクリック時に最も近い地点を検索
function findClosestLocationFromButton() {
    navigator.geolocation.getCurrentPosition(function(position) {
        const userLatitude = position.coords.latitude;
        const userLongitude = position.coords.longitude;

        // 最も近い地点を検索
        const closestLocation = findClosestLocation(userLatitude, userLongitude, locationsData);

        if (closestLocation) {
            document.getElementById('closestLocation').textContent = `最も近い地点: ${closestLocation.name}`;
        } else {
            document.getElementById('closestLocation').textContent = '近くの地点は見つかりませんでした。';
        }
    }, function(error) {
        console.error('位置情報の取得エラー:', error);
    })
}