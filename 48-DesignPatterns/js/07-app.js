const restaurantApp = {};

restaurantApp.platillos = [
    {
        platillo: 'Pizza',
        precio: 25
    },
    {
        platillo: 'Hamburguesa',
        precio: 20
    },
    {
        platillo: 'Hot Dog',
        precio: 20
    },
]

restaurantApp.funciones = {
    mostrarMenu: (platillos) => {
        console.log('Bienvenidos a nuestro menu');
        platillos.forEach( (platillo, index) => {
            console.log(`${index} : ${platillo.platillo} $${platillo.precio}`);
        })
    },
    ordenar: id => {
        console.log(`Tu platillo: ${restaurantApp.platillos[id].platillo} se esta preparando`);
    },
    agregarPlatillo: (platillo, precio) => {
        const nuevo = {
            platillo,
            precio
        };

        restaurantApp.platillos.push(nuevo);
    }
}

const { platillos } = restaurantApp;

restaurantApp.funciones.mostrarMenu( platillos );
restaurantApp.funciones.ordenar(2);
restaurantApp.funciones.agregarPlatillo('Pan de Brevas', 2500);
restaurantApp.funciones.mostrarMenu( platillos );
restaurantApp.funciones.ordenar(3);
