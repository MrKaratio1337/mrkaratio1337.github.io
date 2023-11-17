function check() {
    var liczba1 = document.getElementById('wartosc1').value;
    var wynikNapis = "";

    for (let i = 0; i <= liczba1; i++) {
        let potega = 2 ** i;
        wynikNapis += potega + " ";
    }

    document.getElementById('wynik').innerHTML = wynikNapis;
}