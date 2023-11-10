function send(){
    var number1 = document.getElementById('num1').value;
    var number2 = document.getElementById('num2').value;
    var napis = " ";

    for(let i = number1; i <= number2; i++){
        napis = napis + i + " ";
    }
    document.getElementById('here').innerHTML = napis;
}

document.addEventListener('click', send);