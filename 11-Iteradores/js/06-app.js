// for each

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet ', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
]

carrito.forEach((i, index,) => {
    console.log(`El articulo: ${i.nombre} tiene un precio de ${i.precio}`)
    console.log(index);
});