//! VARIABLES
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

//? Contenedor html para los resultados
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = 2010;

//? Objeto con la busqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
}

//! EVENTOS
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos); //? Muestra los automoviles

    //? Llena las opciones de anios
    llenarSelect();
})

//? Event Listener para los selects de busqueda
marca.addEventListener('change', (e) => {
    datosBusqueda.marca = e.target.value
    filtrarAuto();
})
year.addEventListener('change', (e) => {
    datosBusqueda.year = parseInt(e.target.value);
    filtrarAuto();
})
minimo.addEventListener('change', (e) => {
    datosBusqueda.minimo = parseInt(e.target.value);
    filtrarAuto();
})
maximo.addEventListener('change', (e) => {
    datosBusqueda.maximo = parseInt(e.target.value);
    filtrarAuto();
})
transmision.addEventListener('change', (e) => {
    datosBusqueda.transmision = e.target.value
    filtrarAuto();
})
puertas.addEventListener('change', (e) => {
    datosBusqueda.puertas = parseInt(e.target.value);
    filtrarAuto();
})
color.addEventListener('change', (e) => {
    datosBusqueda.color = e.target.value
    filtrarAuto();
})


//! FUNCIONES
function mostrarAutos(baseDb) {
    limpiarHTML()

    baseDb.forEach( auto => {

        const { marca, modelo, year, puertas, transmision, precio, color } = auto;
        const autoHTML = document.createElement('P');

        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmision: ${transmision} - Precio: ${precio} - Color: ${color}
        `;

        //? Insertar resultado en el HTML
        resultado.appendChild(autoHTML);
    })
}

//? Genera los anios del select
function llenarSelect() {
    for( let i = max; i >= min; i-- ) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); //? Agrega los years al select
    }
}


function filtrarAuto() {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor)

    // para imprimir el filtrado
    
    if(resultado.length) {
        mostrarAutos(resultado);
    } else {
        limpiarHTML();
        noResultado();
    }
}

function noResultado() {
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'No hay resultados';
    resultado.appendChild(noResultado);
}

function filtrarMarca(auto) {
    if( datosBusqueda.marca ) {
        return auto.marca === datosBusqueda.marca;
    }
    return auto;
}
function filtrarYear(auto) {
    if( datosBusqueda.year ) {
        return auto.year === datosBusqueda.year;
    }
    return auto;
}
function filtrarMinimo(auto) {
    if( datosBusqueda.minimo ) {
        return auto.precio >= datosBusqueda.minimo;
    }
    return auto;
}
function filtrarMaximo(auto) {
    if( datosBusqueda.maximo ) {
        return auto.precio <= datosBusqueda.maximo;
    }
    return auto;
}
function filtrarPuertas(auto) {
    if( datosBusqueda.puertas ) {
        return auto.puertas === datosBusqueda.puertas;
    }
    return auto;
}
function filtrarTransmision(auto) {
    if( datosBusqueda.transmision ) {
        return auto.transmision === datosBusqueda.transmision;
    }
    return auto;
}
function filtrarColor(auto) {
    if( datosBusqueda.color ) {
        return auto.color === datosBusqueda.color;
    }
    return auto;
}

function limpiarHTML() {
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild)
    }
}