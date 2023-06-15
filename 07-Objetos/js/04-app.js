const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

const nombre1 = producto.nombre;

console.log(nombre1);

const { nombre, precio, disponible } = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);
console.log(noExiste);