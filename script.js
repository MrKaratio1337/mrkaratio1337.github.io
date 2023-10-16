document.getElementById('DOMContentLoaded', function (){
    const button = document.getElementById('myButton');
    button.addEventListener('click', function(){
        alert('Kliknąłeś przycisk');
    });

    const addButton = document.getElementById('addButton');
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const resultParagraph = document.getElementById('result');

    addButton.addEventListener('click', function () {
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        const sum = num1 + num2;
        resultParagraph.textContent = 'Wynik: ' + sum;
    });

    const sendButton = document.getElementById('contactButton');

    sendButton.addEventListener('click', function(){
        alert('Wysłano wiadomość!');
    });
});