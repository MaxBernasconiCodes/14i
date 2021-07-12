function accion(num)
{
    var el_input, el_resultado, input, resultado;
    el_input = 'inp' + num;
    console.log(el_input);
    el_input = document.getElementById(el_input);
    console.log(el_input);
    el_resultado = document.getElementById('res' + num);
    input = el_input.value;
    console.log(input);
    
    if( num == 1)
    {
        resultado = input.substring(3,8); 
    }
    else if(num == 2)
    {
        resultado = input.slice(-6, -2);
    }
    else if(num == 3)
    {
        resultado = input.substr(2, 4);
    }
    else if(num == 4)
    {
        resultado = input.replace('Max', 'Benja');
    }
    else if(num == 5)
    {
        resultado = input.concat(' ', 'está');
    }
    else if(num == 6)
    {
        resultado = input.trim();
    }
    else{
        alert('Error en la seleccion de la accion');
    }

    el_resultado.innerHTML = resultado;
}