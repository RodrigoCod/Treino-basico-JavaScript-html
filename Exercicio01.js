var inputElement = document.querySelector('#exemplo01 input');
var buttonElement = document.querySelector('#exemplo01 button');
var paragraphElement = document.querySelector('#exemplo01 p');

function calcularTabuada(){
    var num = inputElement.value;
    for(var i=1;i<=500;i++){
        r = num * i;
        paragraphElement.innerHTML = paragraphElement.innerHTML + r + "<br>";
    }
}
buttonElement.onclick = calcularTabuada;