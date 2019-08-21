var baseElement = document.getElementById('base');
var alturaElement = document.getElementById('altura');

var buttonElement = document.querySelector('#exemplo01 button');
var paragraphElement = document.querySelector('#exemplo01 p');

function calcularAreaTriangulo(){
    var base = baseElement.value;
    var altura = alturaElement.value;
   
        a = base * altura /2 ;
        paragraphElement.innerHTML =  a + paragraphElement.innerHTML + "<br>";
    
}
buttonElement.onclick = calcularAreaTriangulo;