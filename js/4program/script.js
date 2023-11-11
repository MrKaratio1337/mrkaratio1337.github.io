function check(){
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    var obliczPole = (num1 * num2);
    var obliczObwod = (2 * num1) + (2 * num2);

    document.getElementById('pole').innerHTML ="Pole:" + obliczPole;
    document.getElementById('obwod').innerHTML = "Obwód: " + obliczObwod;
}