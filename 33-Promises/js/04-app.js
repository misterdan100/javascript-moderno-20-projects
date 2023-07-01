const paises = [];

const nuevoPais = pais => new Promise( resolve => {
    setTimeout(() => {
        paises.push(pais);
        resolve(`Agregado ${pais}`)
    }, 3000);
} )

nuevoPais('Colombia').then(resultado => console.log(resultado))
nuevoPais('Alemania').then(resultado => {console.log(resultado); console.log(paises)})
