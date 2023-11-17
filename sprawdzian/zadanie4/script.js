function sprawdz(){
    var a = document.getElementById('wartosc1').value;
    var b = document.getElementById('wartosc2').value;
    var c = document.getElementById('wartosc3').value;

    var numbers = [parseInt(a),parseInt(b),parseInt(c)];

    var max = numbers[0];

    for(var i = 0; i < numbers.length; i++){
        if(numbers[i] > max){
            max = numbers[i];
        }
    }

    document.getElementById('high').innerHTML = "Największa liczba: " + max;
}