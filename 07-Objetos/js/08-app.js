const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

// bloquear un objeto
Object.freeze(producto);

delete producto.disponible;

console.log(producto);