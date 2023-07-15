const usuario = {
    nombre: 'Daniel',
    edad: 20,
    informacion() {
        console.log(`Nombre ${this.nombre} y edad ${this.edad}`);
    }
}

usuario.informacion();