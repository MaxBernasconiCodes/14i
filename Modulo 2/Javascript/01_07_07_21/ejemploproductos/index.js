function mostrarEjemplo(num){
    {
        for(var i = 1; i <= 3; i++)
        {
            document.getElementById('ejemplo' + i).style.display = 'none';
        }
        var seleccionado = document.getElementById('ejemplo' + num)
        seleccionado.style.display = 'block';
    }
}

function cambioTexto(num) {
    var texto = document.getElementById('textocambiante');
    texto.innerHTML = 'Usted apreto el Modo N° ' + num;
    /*switch (num) {
        case 1:
            texto.innerHTML = 'este texto corresponde al Modo 1';
            break;
        case 2:
            texto.innerHTML = 'este texto corresponde al Modo 2';
            break;
        case 3:
            texto.innerHTML = 'este texto corresponde al Modo 3';
            break;
        default:
            texto.innerHTML = 'este texto corresponde al Modo 3';
            break;
    }*/
}

function cambioClase()
{
    var boton = document.getElementById('btncambioclase');
    boton.classList.add('btn-dark');
    //boton.classList.remove('btn-primary');
    //boton.classList.toggle('btn-primary');
}

function cambioAtributo(num){
    var video = document.getElementById('iframevideo');
    switch (num) {
        case 1:
            video.src = "https://www.youtube.com/embed/OVDhmpHiZWU";
            break;
        case 2:
            video.src = "https://www.youtube.com/embed/xnWtGNiG2lg";
            break;
        case 3:
            video.src = "https://www.youtube.com/embed/kk-8DmwFkpA?controls=0";
            break;
        default:
    }
}