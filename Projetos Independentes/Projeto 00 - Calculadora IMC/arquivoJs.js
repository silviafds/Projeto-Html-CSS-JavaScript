const { REFUSED } = require("dns");

function calculaIMC() {
    var pesoRecebido = document.getElementById("peso").value;
    var alturaRecebida = document.getElementById("altura").value;

    var IMC = pesoRecebido / (alturaRecebida * alturaRecebida);
    var Resultado = parseInt(IMC.toFixed(2));
    var x = (typeof Resultado);
    if(Resultado > 40) {
        alert("Seu IMC é " + Resultado + " você esta com obesidade grave e seu grau de obesidade é III");
    } else if(Resultado <= 39.90 && Resultado >= 30.0) {
        alert("Seu IMC é " + Resultado + " você esta com obesidade e seu grau de obesidade é II");
    } else if(Resultado <= 29.90 && Resultado >= 25.0) {
        alert("Seu IMC é " + Resultado + " você esta com sobrepeso e seu grau de obesidade é I");
    } else if(Resultado <= 24.90 && Resultado >= 18.50) {
        alert("Seu IMC é " + Resultado + " parabéns, continue assim. Seu IMC esta normal.");
    } else {
        alert("Seu IMC é " + Resultado + " você esta com magreza, cuidado e seu grau de obesidade é 0");
    }

    /*document.getElementById("resultado").innerHTML = IMC;*/
}