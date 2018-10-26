setInterval(function () {
    var saat = new Date().getHours() % 12;
    var min = new Date().getMinutes();
    var san = new Date().getSeconds();

    var saatDeg = 360 / 12 * saat + 30 / 60 * min;
    var minDeg = 360 / 60 * min + 6 / 60 * san;
    var sanDeg = 360 / 60 * san;

    var saatArrow = document.querySelector('.hour');
    var minArrow = document.querySelector('.minute');
    var sanArrow = document.querySelector('.second');

    saatArrow.style.transform = "rotate("+ saatDeg +"deg)";
    minArrow.style.transform = "rotate("+ minDeg +"deg)";
    sanArrow.style.transform = "rotate("+ sanDeg +"deg)";

}, 1000)
