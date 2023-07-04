const cargarTxtBtn = document.querySelector('#cargarTxt');
cargarTxtBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    const url = 'data/datos.txt';


    fetch(url)
        .then( respuesta => {
            console.log(respuesta.text());
        })
        
}