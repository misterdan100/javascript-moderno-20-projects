const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}


// agregar nuevas propiedades
producto.imagen = "imagen.jpg";

console.log(producto);

delete producto.disponible;

console.log(producto);