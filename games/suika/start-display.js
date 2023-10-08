window.onload = lockScroll();
function lockScroll() {
    document.addEventListener('touchmove', disableScroll, { passive: false });
    document.addEventListener('mousewheel', disableScroll, { passive: false });
};
function gamePlayStart() {
    document.getElementById('startMenu').style.display = none;
    document.getElementById('bgm').play();
    document.addEventListener('touchmove', disableScroll, { passive: true });
    document.addEventListener('mousewheel', disableScroll, { passive: true });
}