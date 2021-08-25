        let inpUser = document.getElementById('user');
        let inpPass = document.getElementById('pass');
        let ulLista = document.getElementById('listaUsuarios');

        let usuarios = [];
        
        function agregarUsuario()
        {
            let nombre = inpUser.value;
            let password = inpPass.value;

            let newLi = document.createElement('li');
            newLi.innerHTML = nombre + ' ' + password;

            ulLista.append(newLi);

            window.localStorage.setItem('nombreUsuario', nombre + ' ' + password);
        }

        function eliminarUsuario() {
            window.localStorage.removeItem('nombreUsuario');
        }

        function getUsuarios() {
            console.log(window.localStorage.getItem('nombreUsuario'));
        }    