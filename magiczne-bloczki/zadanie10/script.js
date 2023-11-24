const n = document.getElementById('n');
const wynik = document.getElementById('wynik');

function wypisz(){
    var numberN = n.value;
    var tribonnaci = [0, 0, 1];

    for(var i = 3; i < numberN; i++){
        tribonnaci[i] = tribonnaci[i - 1] + tribonnaci[i - 2] + tribonnaci[i - 3];
    }

    wynik.innerHTML = "Ciąg tribonnaciego: " + tribonnaci.join(', ');
}