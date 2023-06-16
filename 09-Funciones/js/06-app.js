function sumar(a, b) {
    console.log(a + b);
}

sumar(12, 1256.55);

function saludar(nombre = 'Desconocido', apellido = '') {
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar('Estefany', 'Aguilar');
saludar();