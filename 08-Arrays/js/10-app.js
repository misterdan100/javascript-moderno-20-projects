

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet ', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
]

const nuevoArray = carrito.map( function(producto) {
    return `${producto.nombre} tiene un precio de ${producto.precio}`
})

console.table(nuevoArray);

// ┌─────────┬─────────────────────────────────────────────────┐ 
// │ (index) │                     Values                      │ 
// ├─────────┼─────────────────────────────────────────────────┤ 
// │    0    │  'Monitor 20 Pulgadas tiene un precio de 500'   │ 
// │    1    │ 'Televisión 50 Pulgadas tiene un precio de 700' │ 
// │    2    │        'Tablet  tiene un precio de 300'         │ 
// │    3    │       'Audifonos tiene un precio de 200'        │ 
// │    4    │         'Teclado tiene un precio de 50'         │ 
// │    5    │        'Celular tiene un precio de 500'         │ 
// └─────────┴─────────────────────────────────────────────────┘ 
