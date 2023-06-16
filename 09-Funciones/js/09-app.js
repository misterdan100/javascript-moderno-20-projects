const reproductor = {
    reproducir: function(id = '00') {
        console.log(`Reproduciendo cancion con el id ${id}`);
    },
    pausar: function() {
        console.log('Reproductor en pausa.');
    },
    borrando: function(id) {
        console.log(`Borrando cancion ${id}`);
    },
    crearPlaylist: function(playlist) {
        console.log(`Creando la playlist ${playlist}`);
    }
}

reproductor.reproducir('354');
reproductor.pausar();

reproductor.borrar = function(id) {
    console.log(`Borrando cancion ${id}`);
}

reproductor.crearPlaylist('Vallenato');