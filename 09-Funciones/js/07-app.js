inicarApp();

function inicarApp () {
    console.log('Iniciando app...');

    segundaFuncion();
}

function segundaFuncion() {
    console.log('Desde la segunda funcion');

    usuarioAutenticado('Daniel');
}

function usuarioAutenticado(usuario) {
    console.log(`Autenticando a ${usuario}... espere...`);
    console.log(`${usuario} autenticado exitosamente`);
}