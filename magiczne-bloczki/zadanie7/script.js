const x = document.getElementById('x');
const y = document.getElementById('y');
const wynik = document.getElementById('wynik');

function check(){
    var numberX = parseInt(x.value);
    var numberY = parseInt(y.value);

    var sum = 0;
    for (var i = numberY; i < numberY + numberX; i++) {
        sum += i;
    }

    wynik.innerHTML = "Suma kolejnych liczb całkowitych wynosi: " + sum;
}