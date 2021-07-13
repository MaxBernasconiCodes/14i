function accion(num) {
    var el_input, el_resultado, input, resultado;
    
    el_input = 'inp' + num; // inp1, o inp2
    el_input = document.getElementById(el_input);
    el_resultado = document.getElementById('res' + num);
    input = el_input.value;


    if (num == 1) {
        resultado = input.substring(3, 8);
    } 
    else if (num == 2) {
        resultado = input.slice(-6, -2);
    }
    else if (num == 3) {
        resultado = input.substr(2, 4);
    }
    else if (num == 4) {
        resultado = input.replace('Max', 'Benja');
    }
    else if (num == 5) {
        resultado = input.concat(' ', 'está');
    }
    else if (num == 6) {
        resultado = input.trim();
    }
    else {
        alert('Error en la seleccion de la accion');
    }

    el_resultado.innerHTML = resultado;
}

function math() {
    var num1, num2, num3, result, resultado;
    num1 = document.getElementById('num1').value;
    num2 = document.getElementById('num2').value;
    num3 = document.getElementById('num3').value;
    resultado = document.getElementById('resultado');

    result = Math.abs(-50);
    resultado.innerHTML = result;
}