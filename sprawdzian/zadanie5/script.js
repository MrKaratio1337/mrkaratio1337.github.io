function check(){
    var liczba1 = document.getElementById('wartosc1').value;

    var wynik = document.getElementById('wynik');

    if(liczba1 <= 10){
        wynik.innerHTML = "Wynik: " + liczba1;
    }
    if(liczba1 >= 11 && liczba1 <= 19){
        wynik.innerHTML = "Wynik: " + liczba1 * 2;
    }
    if(liczba1 >= 20 && liczba1 <= 30){
        var iloczyn = liczba1 * 3;
        wynik.innerHTML = "Wynik: " + iloczyn;
    }
    if(liczba1 >= 31){
        wynik.innerHTML = "Większa od 30";
    }
    if(liczba1 < 0){
        wynik.innerHTML = "Wprowadzono liczbę ujemną";
    }
}