function oblicz(){
    var podstawa = document.getElementById('wartosc1').value;
    var wysokosc = document.getElementById('wartosc2').value;

    var pole = (podstawa * wysokosc) / 2;

    document.getElementById('pole').innerHTML = "Wynik: " + pole;
}