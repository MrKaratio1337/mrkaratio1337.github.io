function oblicz(){
    var liczba1 = document.getElementById('wartosc1').value;
    var liczba2 = document.getElementById('wartosc2').value;
    var divPole = document.getElementById('pole');
    var divObwod = document.getElementById('obwod');

    var pole = liczba1 * liczba2;
    var obwod = 2 * liczba1 + 2 * liczba2;

    divPole.innerHTML = "Pole: " + pole; 
    divObwod.innerHTML = "Obwód: " + obwod;
}