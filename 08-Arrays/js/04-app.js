const meses = new Array('Enero', 'Febrero', 'Marzo');

meses.push("Abril");

console.log(meses);

meses.unshift("diciembre");
console.log(meses);

const producto = {
    nombre: "Monitor de 24 pulgadas",
    precio: 400
}

const producto2 = {
    nombre: 'Celular',
    precio: 800
}


const nuevoArray = [];

nuevoArray.push(producto);
nuevoArray.unshift(producto2);

console.table(nuevoArray);
