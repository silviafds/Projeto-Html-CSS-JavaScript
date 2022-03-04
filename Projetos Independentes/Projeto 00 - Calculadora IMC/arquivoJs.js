function verificaAltura() {
    var recebeAltura = document.getElementById("altura").value;

    if(recebeAltura == "" || recebeAltura < 0) {
        document.getElementById("erroAltura").innerHTML = "Informe a altura."
        return 0;
    }
    return 1;
}

function verificaPeso() {
    var recebePeso = document.getElementById("peso").value;

    if(recebePeso == "" || recebePeso < 0) {
        document.getElementById("erroPeso").innerHTML = "Informe o peso."
        return 0;
    }
    return 1;
}

function IMC() {
    var pesoRecebido = document.getElementById("peso").value;
    var alturaRecebida = document.getElementById("altura").value;

    var recebeValidacaoCampoAltura = verificaAltura();
    var recebeValidacaoCampoPeso = verificaPeso();

    if(recebeValidacaoCampoAltura == 1 && recebeValidacaoCampoPeso == 1) {
        calculaIMC(pesoRecebido, alturaRecebida);
    } else {
        document.getElementById("resultadoRuim").innerHTML = "Preencha todos os campos acima."
    }
    
}

function calculaIMC(pesoRecebido, alturaRecebida) {
    var IMC = pesoRecebido / (alturaRecebida * alturaRecebida);
    var Resultado = parseInt(IMC.toFixed(2));

    if(Resultado > 40) {
        document.getElementById("resultadoRuim").innerHTML = "Seu IMC é " + Resultado + ". Você esta com obesidade grave e seu grau de obesidade é III.";
    } else if(Resultado <= 39.90 && Resultado >= 30.0) {
        document.getElementById("resultadoRuim").innerHTML = "Seu IMC é " + Resultado + ". Você esta com obesidade e seu grau de obesidade é II.";
    } else if(Resultado <= 29.90 && Resultado >= 25.0) {
        document.getElementById("resultadoRuim").innerHTML = "Seu IMC é " + Resultado + ". Você esta com sobrepeso e seu grau de obesidade é I.";
    } else if(Resultado <= 24.90 && Resultado >= 18.50) {
        document.getElementById("resultadoBom").innerHTML = "Seu IMC é " + Resultado + " parabéns, continue assim. Seu IMC esta normal.";
    } else {
        document.getElementById("resultadoRuim").innerHTML = "Seu IMC é " + Resultado + ". Você esta com magreza, cuidado e seu grau de obesidade é 0.";
    }
}