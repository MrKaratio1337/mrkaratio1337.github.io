const wynik = document.getElementById('wynik');
const wartosc1 = document.getElementById('wartosc1');

function check() {
    var liczba1 = wartosc1.value;
    var wynikNapis = "";

    for (let i = 0; i <= liczba1; i++) {
        let potega = 2 ** i;
        wynikNapis += potega + " ";
    }

    wynik.innerHTML = wynikNapis;
}