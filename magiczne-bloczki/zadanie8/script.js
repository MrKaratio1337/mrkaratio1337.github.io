const n = document.getElementById('n');
const wynik = document.getElementById('wynik');

function wypisz(){
    var numberN = n.value;
    var wyniki = [];

    wyniki.push(numberN);

    for (var i = 1; i < numberN; i++) {
        wyniki.push(Math.pow(wyniki[i - 1], 2));
    }

    wynik.innerHTML = 'Ciąg liczb: ' + wyniki.join(', ');
}