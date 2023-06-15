const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1kg',
    medida: '1mt'
}

console.log(producto);
console.log(medidas);

const unidos = Object.assign(producto, medidas);
console.log(unidos);

const unidos2 = { ...producto, ...medidas};
console.log(unidos2);

medidas.peso = "2kg";

console.log(unidos2);
console.log(unidos);
console.log(medidas);