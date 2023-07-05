const cargarJSONArrayBtn = document.querySelector('#cargarJSONArray');
cargarJSONArrayBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    const url = 'data/empleados.json';

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(respuesta => mostrarHTML(respuesta))
}

function mostrarHTML(empleados) {
    const contenido = document.querySelector('.contenido');

    let html = '';

    empleados.forEach( empleados => {
        const { nombre, id, empresa, trabajo } = empleados;

        html += `
            <p>Empleado: ${nombre}</p>
            <p>ID: ${id}</p>
            <p>Empresa: ${empresa}</p>
            <p>Trabajo: ${trabajo}</p>
        `
        contenido.innerHTML = html;
    } )
}