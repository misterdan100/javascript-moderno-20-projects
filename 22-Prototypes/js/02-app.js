const cliente = {
    nombre: 'juan',
    saldo: 500
};

const juan = new Cliente('Juan', 500);

function formatearCliente (cliente) {
    const {nombre, saldo} = cliente;
    return `El cliente ${nombre} tiene: ${saldo}`
}

console.log(formatearCliente(juan));