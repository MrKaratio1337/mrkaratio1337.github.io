const n = document.getElementById('n');
const wynik = document.getElementById('wynik');

function wypisz(){
    var numberN = parseInt(n.value);
    var lucas = [2, 1];

    for(var i = 2; i < numberN; i++){
        lucas[i] = lucas[i - 1] + lucas[i - 2];
    }

    wynik.innerHTML = "Ciąg lucasa: " + lucas.join(', ');
}