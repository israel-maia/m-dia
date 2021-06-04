function caucular() {
    var valor1 = parseInt(document.getElementById(`primeiroNumero`).value);
    var valor2 = parseInt(document.getElementById(`segundoNumero`).value);
    var valor3 = parseInt(document.getElementById(`terceiroNumero`).value);
    document.getElementById(`resultado`).value = (valor1 + valor2  + valor3)/3;
}