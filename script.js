//Ciekawostki

function pokazCiekawostke() {
    const ciekawostki = [
        "Zermatt jest miastem bez samochodów porusza się tu głównie pojazdami elektrycznymi.",
        "Matterhorn ma 4478 m wysokości.",
        "Zermatt to jeden z najpopularniejszych kurortów narciarskich w Europie."
    ];

    const losowa = Math.floor(Math.random() * ciekawostki.length);
    document.getElementById("ciekawostka").innerText = ciekawostki[losowa];
}
let zdjecia = [
    "Obrazy/1.jpg",
    "Obrazy/2.jpg",
    "Obrazy/3.jpg",
    "Obrazy/4.jpg",
    "Obrazy/5.jpg",
    "Obrazy/baner1.jpg",
];
let numer = 0;
function nastepne(){
    numer = (numer + 1) % zdjecia.length;
    document.getElementById("slider").src = zdjecia[numer];
}
function poprzednie(){
    numer = (numer - 1 + zdjecia.length) % zdjecia.length;
    document.getElementById("slider").src = zdjecia[numer];
}
let punkty = 0;

function sprawdzOdpowiedz(nr) {

    if (nr === 2 || nr === 4) {
        punkty++;
    }

    document.getElementById("wynik").innerText =
        "Twój wynik: " + punkty + " punkty";
}
