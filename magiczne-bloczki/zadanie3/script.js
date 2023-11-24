const pole1 = document.getElementById('pole1');
const pole2 = document.getElementById('pole2');
const wynik = document.getElementById('wynik');

function check(){
    let a = parseInt(pole1.value);
    let b = parseInt(pole2.value);

    if(a > b){
        wynik.innerHTML = "a jest większe od b";
    }
    if(a < b){
        wynik.innerHTML = "b jest większe od a";
    }
    if(a == b){
        wynik.innerHTML = "a i b są równe"
    }
}