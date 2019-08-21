var arestaElement = document.getElementById('aresta');
//var alturaElement = document.getElementById('altura');

var buttonElement = document.querySelector('#exemplo01 button');
var paragraphElement = document.querySelector('#exemplo01 p');

function calcularAreaQuadrado(){
    var aresta = arestaElement.value;
//var altura = alturaElement.value;
   
        a = aresta * 4;
        paragraphElement.innerHTML =  a + paragraphElement.innerHTML + "<br>";
    
}
buttonElement.onclick = calcularAreaQuadrado;