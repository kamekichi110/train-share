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