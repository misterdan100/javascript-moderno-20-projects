// VARIABLES
const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners() {
    // cuando presionas agregar carrito
    listaCursos.addEventListener('click', agregarCurso);

    // Eliminar cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    // Vaciar el carrito de compras
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = [];
        limpiarHTML();
    })
};


// FUNCIONES
function agregarCurso(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}


//* Elimina un curso del carrito
function eliminarCurso(e) {
    if(e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id');

        // eliminar del arreglo de articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId);

        carritoHTML(); // volvemos a iterar sobre el carrito y mostrar el html
    }

}


// LEE EL CONTENIDO DEL HTML Y EXTRAE LA INFO DEL CURSO
function leerDatosCurso(curso) {
    console.log(curso);

    // CREAR OBJETO CON EL CONTENT CURSO
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    };

    // REVISA SI EL ELEMENTO EXISTE
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id );
    if(existe) {
        // actualizamos la cantidad
        const cursos = articulosCarrito.map( curso => {
            if(curso.id === infoCurso.id) {
                curso.cantidad++
                return curso; // retorna el objeto actualizado
            } else {
                return curso; // retorna los objetos que no son duplicados
            }
        } );
        articulosCarrito = [...cursos];

    } else {
        // AGREGA ELEMENTOS AL ARREGLO
        articulosCarrito = [...articulosCarrito, infoCurso]
    }


    carritoHTML(); // imprime los cursos del array en el html
}


// MUESTRA EL CARRITO EN EL HTML
function carritoHTML() {

    // LIMPIAR EL HTML
    limpiarHTML();

    // RECORRE EL CARRITO Y GENERA HTML
    articulosCarrito.forEach( curso => {
        const { imagen, titulo, precio, cantidad, id } = curso; // crea una variable por cada propiedad del objeto
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src='${imagen}' width="100"></td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}"> X </a>
            </td>
        `;

        // AGREGA HTML AL CARRITO EN TBODY
        contenedorCarrito.appendChild(row);
    })
}


// LIMPIA LOS CURSOS DEL TBODY
function limpiarHTML() {
    // forma lenta
    // contenedorCarrito.innerHTML = '';

    // forma rapida
    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}