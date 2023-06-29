const carrito = new Set();

carrito.add('Camisa');
carrito.add('Disco #1')
carrito.add('Disco #2')
carrito.add('Disco #3')

carrito.delete('Disco #3');

console.log(carrito.size);
console.log(carrito.has('Camisa'));

console.log(carrito);

const numeros = [1, 2, 3, 4, 5, '5', 4, 3, 2, 1];
const numerosUnicos = new Set(numeros);
console.log(numerosUnicos);