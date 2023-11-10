function check(){
    var number = document.getElementById('pole').value;
    if(number >= 10){
        document.getElementById('wynik').innerHTML = (number * 2);
    } else{
        document.getElementById('wynik').innerHTML = 0;
    }
}