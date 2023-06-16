// const carrito = [
//     { nombre: 'Monitor 20 Pulgadas', precio: 500},
//     { nombre: 'Televisión 50 Pulgadas', precio: 700},
//     { nombre: 'Tablet ', precio: 300},
//     { nombre: 'Audifonos', precio: 200},
//     { nombre: 'Teclado', precio: 50},
//     { nombre: 'Celular', precio: 500},
// ]

// const nuevoArray = carrito.map( producto => {
//     return `${producto.nombre} tiene un precio de ${producto.precio}`
// })

// console.table(nuevoArray);

const reproductor = {
    cancion: '',
    reproducir: (id) => console.log(`Reproduciendo cancion con el id ${id}`),
    pausar: () => 'Reproductor en pausa.',
    borrando: id => console.log(`Borrando cancion ${id}`),
    crearPlaylist: playlist => console.log(`Creando la playlist ${playlist}`),

    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Aniadiendo ${cancion}`);
    },
    get obtenerCancion() {
        console.log(`${this.cancion}`);
    }
}

reproductor.reproducir('354');
console.log(reproductor.pausar());

reproductor.borrar = function(id) {
    console.log(`Borrando cancion ${id}`);
}

reproductor.crearPlaylist('Vallenato');

reproductor.nuevaCancion = 'Enter Sandman';