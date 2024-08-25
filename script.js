document.getElementById('total').addEventListener('click', function() {
    var videoContainer = document.getElementById('video-container');
    var videoFrame = document.getElementById('video-frame');
    videoFrame.src = "https://www.youtube.com/embed/2TQoqvHxCAw"; // 「合計」の動画URL
    videoContainer.style.display = 'block'; // 動画コンテナを表示
});

document.getElementById('average').addEventListener('click', function() {
    var videoContainer = document.getElementById('video-container');
    var videoFrame = document.getElementById('video-frame');
    videoFrame.src = "https://www.youtube.com/embed/ABtP-26Kfmg"; // 「平均」の動画URL
    videoContainer.style.display = 'block'; // 動画コンテナを表示
});

document.getElementById('count').addEventListener('click', function() {
    var videoContainer = document.getElementById('video-container');
    var videoFrame = document.getElementById('video-frame');
    videoFrame.src = "https://www.youtube.com/embed/GPS7zGCv81U"; // 「数字の個数」の動画URL
    videoContainer.style.display = 'block'; // 動画コンテナを表示
});

document.getElementById('max').addEventListener('click', function() {
    var videoContainer = document.getElementById('video-container');
    var videoFrame = document.getElementById('video-frame');
    videoFrame.src = "https://www.youtube.com/embed/_QMUTyud5EY"; // 「最大値」の動画URL
    videoContainer.style.display = 'block'; // 動画コンテナを表示
});

document.getElementById('min').addEventListener('click', function() {
    var videoContainer = document.getElementById('video-container');
    var videoFrame = document.getElementById('video-frame');
    videoFrame.src = "https://www.youtube.com/embed/CPUI8uyUwic"; // 「最小値」の動画URL
    videoContainer.style.display = 'block'; // 動画コンテナを表示
});
