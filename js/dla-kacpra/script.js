const wynik = document.getElementById('wynik');
const pole = document.getElementById('podstawa');
const wykladnik = document.getElementById('wykladnik');

function check(){
    var number = pole.value;
    var number2 = wykladnik.value;

    var oblicz = Math.pow(number, number2);

    wynik.innerHTML = "Wynik: " + oblicz;
}

document.addEventListener('click', check);