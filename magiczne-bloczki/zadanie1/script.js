const wynik = document.getElementById('wynik');

function check(){
    var number = document.getElementById('pole1').value;

    if(number >= 10){
        wynik.innerHTML = "" + number * 2;
    } else{
        wynik.innerHTML = "" + 0;
    }
}