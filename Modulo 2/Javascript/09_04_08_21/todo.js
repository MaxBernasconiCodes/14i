function agregarTarea()
{
    let input = document.getElementById('nuevaTarea');
    let listado = document.getElementById('listado');

    //////////////////////////////////////////////
    let nuevaTarea = document.createElement('li');
    nuevaTarea.append(input.value);
    nuevaTarea.addEventListener(
        'click', 
        function(ev)
        {ev.target.classList.toggle('checked');
    });

    let btnClose = document.createElement('span');
    btnClose.append("\u00D7");
    btnClose.className = "close";
    btnClose.addEventListener(
        'click', 
        function(ev)
        {   let padre = ev.target.parentElement;
            padre.style.display = 'none';
    });

    nuevaTarea.append(btnClose);

    listado.append(nuevaTarea);
    //////////////////////////////////////////////

    input.value = '';
    input.focus();
}