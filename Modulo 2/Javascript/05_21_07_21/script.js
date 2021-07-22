
let numAnterior = 0;
let numActual = 1;
let resultado = 0;
let operacion = "";


const display = document.getElementById('display');

function operar(op) {
    if (operacion == "") {
        numAnterior = numActual;
        operacion = op;
        display.value = "";
    }
    else {
        switch (operacion) {
            case "sum":
                resultado = parseInt(numAnterior) + parseInt(numActual);
                display.value = resultado;
                operacion = op;
                break;
            case "res":
                resultado = parseInt(numAnterior) - parseInt(numActual);
                display.value = resultado;
                operacion = op;
                break;
            case "mul":
                resultado = parseInt(numAnterior) * parseInt(numActual);
                display.value = resultado;
                operacion = op;
                break;
            case "div":
                resultado = parseInt(numAnterior) / parseInt(numActual);
                display.value = resultado;
                operacion = op
                break;
            case "igu":
                operacion = "";
                break;
            default:
                break;
        }
    }
}

function elegir(num) {
    numActual += num;
    display.value += num;
}