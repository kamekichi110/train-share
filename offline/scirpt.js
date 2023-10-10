window.onload = setTimeout(() => {
    loaded();
}, 1000);

function loaded() {
    var g2048 = document.getElementById("g-2048");
    var tower = document.getElementById("tower");
    var tetris = document.getElementById("tetris");
    var osero = document.getElementById("osero");
    var mine = document.getElementById("mine");
    var suika = document.getElementById("suika");
    var menja = document.getElementById("menja");
    g2048.style.display = "none";
    tower.style.display = "none";
    tetris.style.display = "none";
    osero.style.display = "none";
    mine.style.display = "none";
    suika.style.display = "none";
    menja.style.display = "none";
}
function menja() {
    loaded();
    var menja = document.getElementById("menja");
    menja.style.display = "block";
}
function game2048() {
    loaded();
    var dataIframe = document.getElementById("g-2048");
    dataIframe.style.display = "block";
}

function tower() {
    loaded();
    var dataIframe = document.getElementById("tower");
    dataIframe.style.display = "block";
}

function tetris() {
    loaded();
    var dataIframe = document.getElementById("tetris");
    dataIframe.style.display = "block";
}

function osero() {
    loaded();
    var dataIframe = document.getElementById("osero");
    dataIframe.style.display = "block";
}

function mine() {
    loaded();
    var dataIframe = document.getElementById("mine");
    dataIframe.style.display = "block";
}

function suika() {
    loaded();
    var dataIframe = document.getElementById("suika");
    dataIframe.style.display = "block";
}