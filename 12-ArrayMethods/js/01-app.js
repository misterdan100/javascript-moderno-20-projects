const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Comprobar si un valor exite en un arreglo

meses.forEach( (mes) => {if(mes === 'Marzo') {console.log(`${mes} existe.`)}})

console.log(meses.includes('Enero'));

const existe = carrito.some( producto => {return producto.nombre === 'Celular'})

const existe2 = meses.some( mes => mes === 'Abril');