let usuarioActual = localStorage.getItem('usuarioActualNombre');
let saludo = document.getElementById('saludo');
saludo.append('Bienvenido: ' + usuarioActual);