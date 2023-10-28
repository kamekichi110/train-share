document.getElementById('uploadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const uploadStatus = document.getElementById('uploadStatus');

    const formData = new FormData(this);

    fetch('http://trainshare1.starfree.jp/upload/upload.php', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            uploadStatus.textContent = 'アップロードが成功しました。';
        } else {
            uploadStatus.textContent = 'アップロードエラーが発生しました。';
        }
    })
    .catch(error => {
        uploadStatus.textContent = 'ネットワークエラーが発生しました。';
    });
});
// 非同期関数を使用してディレクトリ容量を取得
async function getDirectorySize() {
    try {
        const response = await fetch('http://trainshare1.starfree.jp/getDirectorySizeScript.php');
        const data = await response.json();
        document.getElementById('directorySize').innerHTML = `ディレクトリ容量: ${data.size} bytes`;
    } catch (error) {
        console.error('ディレクトリ容量の取得中にエラーが発生しました:', error);
    }
}
window.addEventListener('load', function() {
    // ここにgetDirectorySize()関数を呼び出すコードを記述
    getDirectorySize();
});
