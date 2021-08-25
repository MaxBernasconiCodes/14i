function loguear() {
    let resultado = false;
    let userIngresado = document.getElementById('user');
    let passIngresado = document.getElementById('password');

    let lista = getUsuarios();
    for (let i = 0; i < lista.length; i++) {
        if (
            lista[i].nombreUsuario == userIngresado.value 
            && lista[i].passUsuario == passIngresado.value
            ) 
            {
            localStorage.setItem('usuarioActualNombre', userIngresado.value );
            resultado = true;
            }
    }
    return resultado;
}

function ingresar()
{
    if(loguear())
    {
        window.location.replace('index.html');
    }
    else{
        alert('Datos incorrectos');
    }

}