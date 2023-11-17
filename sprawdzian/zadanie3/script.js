function oblicz(){
    var a = document.getElementById('wartosc1').value;
    var b = document.getElementById('wartosc2').value;
    var c = document.getElementById('wartosc3').value;

    var divPole = document.getElementById('pole');
    var divObjetosc = document.getElementById('ob');
    var divSuma = document.getElementById('suma');

    var pole = 2 * a * b + 2 * a * c + 2 * b * c;
    var objetosc = a * b * c;
    var suma1 = a*1 + b*1 + c*1;
    var suma = 2 * suma1;

    divPole.innerHTML = "Pole: " + pole;
    divObjetosc.innerHTML = "Objętość: " + objetosc;
    divSuma.innerHTML = "Suma: " + suma;
}