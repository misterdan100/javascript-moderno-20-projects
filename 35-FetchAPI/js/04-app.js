const cargarAPIBtn = document.querySelector('#cargarAPI');
cargarAPIBtn.addEventListener('click', objetenerDatos);

function objetenerDatos() {
    const url = 'https://picsum.photos/list';
    fetch(url)
        .then( respuesta => respuesta.json() )
        .then( resultado => mostrarHTML(resultado) )
}

function mostrarHTML(datos) {
    const contenido = document.querySelector('.contenido');
    let html = '';

    datos.forEach( perfil => {
        const { author, post_url } = perfil

        html += `
            <p>Autor: ${author}</p>
            <img src='${post_url}' width=200>
        `


    } )

    contenido.innerHTML = html;
}