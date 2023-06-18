const meses = ['Enero', 'Febrero', 'Marzo'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 200 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 100 },
    { nombre: 'Celular', precio: 700 },
]

// agregar elementos a un array
const meses2 = [...meses];
console.log(meses2);

const producto = { nombre: 'Disco Duro', precio: 300};

const carrito2 = [...carrito, producto];
console.log(carrito2);