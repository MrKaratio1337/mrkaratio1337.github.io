function sprawdz(){
    var podstawa1 = document.getElementById('wartosc1').value;
    var podstawa2 = document.getElementById('wartosc2').value;
    var wysokosc = document.getElementById('wartosc3').value;

    const poleCalkowite = 2 * (podstawa1 + podstawa2) + Math.sqrt(Math.pow(podstawa2 - podstawa1, 2) + Math.pow(wysokosc, 2));

    const objetosc = (1/3) * ((podstawa1 * podstawa2) * wysokosc);

    document.getElementById('pole').innerHTML = 'Pole całkowite: ' + poleCalkowite.toFixed(2);
    document.getElementById('objetosc').innerHTML = 'Objętość: ' + objetosc.toFixed(2);
}