function persona(el1, el2) {
    console.log(`Mi nombre ${this.nombre} y escucho ${el1} y ${el2}`);
}

const info = {
    nombre: 'Daniel'
}

const musicaFavorita = ['Heavy Metal', 'Rock'];

persona.call(info, musicaFavorita[0], musicaFavorita[1]);

persona.apply(info, musicaFavorita);

const nuevaFn = persona.bind( info, musicaFavorita[0], musicaFavorita[1] );
nuevaFn();