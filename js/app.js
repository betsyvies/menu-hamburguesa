window.onload = function() {
     var button = document.getElementById("menu");
     button.addEventListener('click', showMenu);
}

function showMenu() {
    var menu = document.getElementById("opcs-menu");

    /* Permite verificar si contiene la clase que oculta el elemento */
    if(menu.classList.contains('disabled-menu')) {
        menu.classList.remove('disabled-menu');
        menu.classList.add('enabled-menu');
    }
    else {
        menu.classList.remove('enabled-menu');
        menu.classList.add('disabled-menu');
    }
}
