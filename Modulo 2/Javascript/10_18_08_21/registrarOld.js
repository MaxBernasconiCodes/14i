function agregarUsuario() {
    let user = document.getElementById('user');
    let pass = document.getElementById('pass');
    let listado = document.getElementById('listaUsuarios');

    //agregar al listado
    let newuser = document.createElement('li');
    newuser.append(user.value + ' ' + pass.value);
    listado.append(newuser);


    let listadoActual = localStorage.getItem('usuarios');
    //agregar al local Storage
    if (listadoActual) {
        listadoActual += user.value + ' ' + pass.value + ' | ';
    }
    else {
        listadoActual = user.value + ' ' + pass.value + ' | ';
    }
    localStorage.setItem('usuarios', listadoActual);
    console.log(localStorage.getItem('usuarios'));
}

function eliminarUsuario() {
    localStorage.removeItem('usuarios');
}

function getUsuarios() {
    // 1) creamos el listado que vamos a mostrar al final
    let usuarios = [];
    // 2) tomamos los datos del listado de usuarios que ya estan en el local storage
    let listadoActual = localStorage.getItem('usuarios');
    // 3) separamos cada uno de los usuarios que ingresamos y los ponemos en un array, el metodo split  utiliza el parametro que le pasamos como separador de registros
    let listadoSeparado = listadoActual.split(' | ');
    // 4) creamos una iteracion sobre cada uno de los elementos en el array que recien creamos. 
    for (let i = 0; i < listadoSeparado.length - 1; i++) {
        // 5) creamos una variable que solamente vamos a usar de manera temporal para almacenar como otro array los datos de el nombre del usuario y el de la contraseña, usamos nuevamente el metodo split, pero esta vez usamos como separador el espacio vacio. 
        let auxiliar = listadoSeparado[i].split(' ')
        // 6) creamos un objeto en donde le vamos a pasar los datos que obtuvimos de la separacion del string, cada posicion del array seria uno de los datos, la posicion 0 se corresponde con el nombre del usuario , y la posicion 1 se corresponde con la contraseña. 
        let user = {
            nombreUsuario: auxiliar[0],
            passUsuario: auxiliar[1]
        }
        // 7) insertamos el nuevo objeto "user" que creamos en el punto (6) en la lista que creamos en el punto (1), a travez del metodo push. 
        usuarios.push(user);
    }
    //mostramos el listado que acabamos de armar, como un array de objetos.
    //devolvemos el valor del listado de usuarios
    return usuarios;
}