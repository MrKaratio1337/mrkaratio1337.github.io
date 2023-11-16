const pole1 = document.getElementById('pole1');
const pole2 = document.getElementById('pole2');
const submit = document.getElementById('submit');
const wynik = document.getElementById('wynik');

function check(){
    var liczba1 = pole1.value;
    var liczba2 = pole2.value;

    alert('W pierwszym polu wpiano liczbe: ' + liczba1);
    alert('W drugim polu wpisano liczbe: ' + liczba2);

    if(liczba1 > liczba2){
        alert(liczba1 + " jest większa od " + liczba2);
    }

    if(liczba1 < liczba2){
        alert(liczba1 + " jest mniejsza od " + liczba2);
    }

    if(liczba1 == liczba2){
        alert(liczba1 + " jest równa " + liczba2);
    }
}

submit.addEventListener('click', check);