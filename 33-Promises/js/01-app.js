const paises = ['Francia', 'España', 'Portugal', 'Australia', 'Inglaterra', 'Irlanda'];


function nuevoPais(pais, callback) {
    setTimeout(() => {
        paises.push(pais);
        callback();
    }, 2000);
}

function mostrarPaises() {
    setTimeout(() => {
        paises.forEach(element => {
            console.log(element);
        })
    }, 1000);
}



mostrarPaises();

nuevoPais('Alemania', mostrarPaises);