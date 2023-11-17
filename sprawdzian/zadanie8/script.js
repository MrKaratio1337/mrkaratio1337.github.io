function oblicz(){
    var podstawa1 = document.getElementById('wartosc1').value;
    var podstawa2 = document.getElementById('wartosc2').value;
    var wysokosc = document.getElementById('wartosc3').value;

    var pole = ((podstawa1*1 + podstawa2*1) * wysokosc*1) / 2;

    document.getElementById('pole').innerHTML = "Pole: " + pole;
}