function check() {
    var number = document.getElementById('pole').value;
    
    if(number > 0){
        document.getElementById('here').innerText = "Dodatnia";
    } else if(number < 0){
        document.getElementById('here').innerText = "Ujemna";
    } else if(number.value == null){
        document.getElementById('here').innerText = "Pusto";
    } else {
        document.getElementById('here').innerText = "Zero";
    } 
}

document.addEventListener('click', check);