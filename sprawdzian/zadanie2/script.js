function oblicz(){
    var liczba1 = document.getElementById('wartosc1').value;

    var divPole = document.getElementById('pole');
    var divObjetosc = document.getElementById('objetosc');

    var pole = 6 * liczba1**2;
    var objetosc = liczba1**3;

    divPole.innerHTML = "Pole: " + pole;
    divObjetosc.innerHTML = "Objętość: " + objetosc;
}