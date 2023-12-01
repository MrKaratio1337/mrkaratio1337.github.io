var result = document.getElementById('result');

function add(a, b){
    if(typeof(b) === "undefined") {
        b=1;
    }
    //result.innerHTML = a + "+" + b + "=" + (a+b) + "<br>";

    result.innerHTML = a + "+" + b + "+" + arguments[2] + "=" + (a+b+arguments[2]) + "<br>";
}

add(10,20,9);