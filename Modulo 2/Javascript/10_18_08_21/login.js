function ingresar()
  {
    let usuario = document.getElementById('user');
    let password = document.getElementById('password');

    if((usuario.value + ' ' + password.value) == window.localStorage.getItem('nombreUsuario'))

    {
      alert('Estas dentro');
    }
  }