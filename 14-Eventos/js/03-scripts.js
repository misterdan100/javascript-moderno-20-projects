const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('input', (evt) => {
    if(evt.target.value === '') {
        console.log('Fallo la validacion');

    }
});