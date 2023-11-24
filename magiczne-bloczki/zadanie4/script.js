const wartosc1 = document.getElementById('wartosc1');
const wartosc2 = document.getElementById('wartosc1');
const wartosc3 = document.getElementById('wartosc1');
const divPole = document.getElementById('pole');
const divObjetosc = document.getElementById('ob');
const divSuma = document.getElementById('suma');

function oblicz(){
    var a = wartosc1.value;
    var b = wartosc2.value;
    var c = wartosc3.value;

    let pole = 2 * a * b + 2 * a * c + 2 * b * c;
    let objetosc = a * b * c;
    let suma1 = a*1 + b*1 + c*1;
    let suma = 2 * suma1;

    divPole.innerHTML = "Pole: " + pole;
    divObjetosc.innerHTML = "Objętość: " + objetosc;
    divSuma.innerHTML = "Suma: " + suma;
}