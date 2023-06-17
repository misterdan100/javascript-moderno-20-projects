for(let i = 0; i < 10; i++) {
    console.log(`Numero ${i}`);
}

for(let i = 1; i <= 20; i++) {
    if( i % 2 === 0) {
        console.log(`El numero ${i} es PAR`);
    } else {
        console.log(`El numero ${i} es INPAR`);
    }
}

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet ', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
]

for(let i = 0; i < carrito.length; i++) {
    console.table(`El articulo: ${carrito[i].nombre} tiene un precio de ${carrito[i].precio}`);
}