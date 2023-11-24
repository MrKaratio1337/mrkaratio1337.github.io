const poleConst = document.getElementById('pole');
const obwodConst = document.getElementById('obwod');

function oblicz(){
    var number1 = document.getElementById('pole1').value;
    var number2 = document.getElementById('pole2').value;

    let pole = number1 * number2;
    let obwod = (2 * number1) + (2 * number2);

    poleConst.innerHTML = "" + pole;
    obwodConst.innerHTML = "" + obwod;
}