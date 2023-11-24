const wartosc1 = document.getElementById('wartosc1');
const wartosc2 = document.getElementById('wartosc2');
const wartosc3 = document.getElementById('wartosc3');
const poleDiv = document.getElementById('pole');
const obwodDiv = document.getElementById('obwod');

function oblicz(){
    var a = wartosc1.value;
    var b = wartosc2.value;
    var h = wartosc3.value;
    
    let obwod = a*1 + (2 * b);
    let pole = (a * h) / 2;

    poleDiv.innerHTML = "Pole: " + pole;
    obwodDiv.innerHTML = "Obwód: " + obwod;
}