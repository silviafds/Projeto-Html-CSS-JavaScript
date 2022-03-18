

function validaLogin() {
    var recebeDados = document.getElementById("emailLogin").value;

    if(recebeDados == "" || recebeDados.indexOf('@') == -1 || recebeDados.indexOf('.') == -1) {
        document.getElementById("emailLogin").style.borderColor = "red";
        document.getElementById("erroLogin").innerHTML = "Digite o email válido."
        return false;
    }
    document.getElementById("emailLogin").style.borderColor = rgb(170, 166, 166);
    document.getElementById("erroLogin").innerHTML = ""
    return true;
}

