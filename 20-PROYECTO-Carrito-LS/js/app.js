//* VARIABLES
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');

let articulosCarrito = [];

//* EVENTOS
cargarEventListeners();
function cargarEventListeners() {
    //? cuando agregas un curso presionando agregar
    listaCursos.addEventListener('click', agregarCurso)

    //? Elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso)

    //? Muestra los cursos de Local Storage
    document.addEventListener('DOMContentLoaded', () => {
        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];

        carritoHTML();
    })

    //? Vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = []
        limpiarHTML();
    })
}


//* FUNCIONES 
function agregarCurso(e) {
    e.preventDefault();

    // el e.target es el eventbubbling
    if(e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }

    carritoHTML(); // imprime los cursos en el carrito
}

//? Elimina un curso del carrito
function eliminarCurso(e) {
    if(e.target.classList.contains('borrar-curso')) {
        const cursoID = e.target.getAttribute('data-id');
        // Elimina de el arreglo por el id
        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoID);

        carritoHTML();
    }
}

//? Lee el contenido del html del curso y extrae la informacion
function leerDatosCurso(curso) {

    //? Crear objeto con la info del curso
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    //? Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id)
    if(existe) {
        const cursos = articulosCarrito.map( curso => {
            if(curso.id === infoCurso.id) {
                curso.cantidad++
                return curso;
            } else {
                return curso;
                
            }
        } );
        articulosCarrito = [...cursos];
    } else {
        //? Agrega elementos al array del carrito
        articulosCarrito = [...articulosCarrito, infoCurso];

    }


}

//? Muestra el carrito en el html
function carritoHTML() {
    //limpiar html
    limpiarHTML();

    articulosCarrito.forEach(curso => {
        //? destructuring
        const { imagen, titulo, precio, cantidad, id } = curso;
        const row = document.createElement('TR');
        row.innerHTML = `
            <td>
                <img src='${imagen}' width='100'>
            </td>
            <td>
                ${titulo}
            </td>
            <td>
                ${precio}
            </td>
            <td>
                ${cantidad}
            </td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}"> X </a>
            </td>
        `;

        contenedorCarrito.appendChild(row)
    });


    // Agregar el carrito de compras al storage
    sincronizarStorage();

}

function sincronizarStorage() {
    localStorage.setItem('carrito',JSON.stringify(articulosCarrito))
}

//? Limpia el html
function limpiarHTML() {
    // contenedorCarrito.textContent = '';

    // forma rapida en performance de limpiar un div
    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}