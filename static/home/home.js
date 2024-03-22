$(document).ready(function () {
    var open = document.getElementById("open");
    var close = document.getElementById("close");
    var expand = document.getElementById("expand-content");

    function nav_open() {
        expand.style.height = "150px";
        open.style.display = "none";
        close.style.display = "block";
    }
    function nav_close() {
        expand.style.height = "50px";
        open.style.display = "block";
        close.style.display = "none";
    }

    if (localStorage.fl_nav) {
        if (localStorage.fl_nav == 1) {
            nav_open();
        } else {
            nav_close();
        }
    } else {
        localStorage.fl_nav = 1;
        nav_open();
    }

    open.onclick = function () {
        localStorage.fl_nav = 1;
        nav_open();
    }
    close.onclick = function () {
        localStorage.fl_nav = 0;
        nav_close();
    }

    var color1 = document.getElementById("color1");
    var color2 = document.getElementById("color2");
    var color3 = document.getElementById("color3");
    var color4 = document.getElementById("color4");
    var color5 = document.getElementById("color5");
    var color6 = document.getElementById("color6");
    var color7 = document.getElementById("color7");
    var color8 = document.getElementById("color8");
    var bg = document.getElementById("bg");

    function set_wallpaper(bg_color) {
        if (localStorage.set_wallpaper) {
            localStorage.set_wallpaper = bg_color;
            bg.style.backgroundColor = localStorage.set_wallpaper;
        } else {
            localStorage.set_wallpaper = "rgb(100,100,100)";
        }
    }

    if (localStorage.set_wallpaper) {
        bg.style.backgroundColor = localStorage.set_wallpaper;
    } else {
        localStorage.set_wallpaper = "rgb(100,100,100)";
        bg.style.backgroundColor = localStorage.set_wallpaper;
    }

    color1.onclick = function () {
        set_wallpaper("rgb(100, 100, 100)");
    }
    color2.onclick = function () {
        set_wallpaper("rgb(0, 0, 0)");
    }
    color3.onclick = function () {
        set_wallpaper("rgb(114, 46, 80)");
    }
    color4.onclick = function () {
        set_wallpaper("rgb(75, 37, 109)");
    }
    color5.onclick = function () {
        set_wallpaper("rgb(63, 100, 126)");
    }
    color6.onclick = function () {
        set_wallpaper("rgb(12, 141, 143)");
    }
    color7.onclick = function () {
        set_wallpaper("rgb(117, 173, 92)");
    }
    color8.onclick = function () {
        set_wallpaper("rgb(150, 138, 106)");
    }

    var setting_open = document.getElementById("setting-open");
    var setting_close = document.getElementById("setting-close");
    var setting_box = document.getElementById("setting-box");
    var mask = document.getElementById("mask");

    setting_open.onclick = function () {
        setting_box.style.display = "inline";
        mask.style.display = "inline";
    }

    setting_close.onclick = function () {
        setting_box.style.display = "none";
        mask.style.display = "none";
    }
    $('body').css('visibility', 'visible');
});