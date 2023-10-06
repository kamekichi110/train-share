window.onload = setTimeout(() => {
    document.getElementById("loading").style.display = "none";
    document.addEventListener("dblclick", function(e){ e.preventDefault();}, { passive: false });
}, 4500);