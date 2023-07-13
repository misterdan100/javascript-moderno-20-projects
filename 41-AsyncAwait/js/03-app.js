function descargarClientes() {
    return new Promise((resolve, reject) => {
        const error = false;

        setTimeout(() => {
            if(!error) {
                resolve('El listado de clientes se descargo correctamente')
            } else {
                reject('Error en la conexion')
            }
        }, 3000);

    })
}

// Async await
const ejecutar = async () => {
try {
    console.log(2 + 2);
    const respuesta = await descargarClientes();

    console.log(respuesta);
    console.log(2 + 3);
    
} catch (error) {
    console.log(error);
    
}
}

ejecutar();