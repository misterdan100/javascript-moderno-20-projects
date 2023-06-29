const ciudades = ['Londres', 'New York', 'Madrid', 'Paris']
const ordenes = new Set([123, 231, 131, 102]);
const datos = new Map();

datos.set('nombre', 'Daniel');
datos.set('profesion', 'Web developer');


//! Defaul
//* para 
for( let ciudad of ciudades) {
    console.log(ciudad);
}

for( let orden of ordenes) {
    console.log(orden);
}

for( let dato of datos) {
    console.log(dato);
}


//! Entries Iterator
for( let entry of ciudades.entries() ) {
    console.log(entry);
}

for( let entry of ordenes.entries() ) {
    console.log(entry);
}

for( let entry of datos.entries() ) {
    console.log(entry);
}

//! Value Iterator
for( let value of ciudades.values()) {
    console.log(value);
}

for( let value of datos.values()) {
    console.log(value);
}


//! Keys Iterator
for( let keys of datos.keys()) {
    console.log(keys);
}