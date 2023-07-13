
const url = 'https://picsum.photos/list';

document.addEventListener('DOMContentLoaded', obtenerDatos);

// function obtenerDatos() {
//     fetch(url) 
//         .then( respuesta => respuesta.json())
//         .then( resultado => console.log(resultado))
//         .catch(error => console.log(error))
// }

async function obtenerDatos() {
    const respuesta = await fetch(url);
    const resultado = await respuesta.json()
    console.table(resultado);
} 