const obtenerNombre = info => ({
    mostrarNombre() {
        console.log(`Nombre: ${info.nombre}`);
    }
})

function Cliente(nombre, email, empresa) {
    let info = {
        nombre,
        email,
        empresa
    }

    return Object.assign(
        info,
        obtenerNombre(info)
    )
}

function Empleado(nombre, email, puesto) {
    let info = {
        nombre,
        email,
        puesto
    }
    
}

const cliente = Cliente('Daniel', 'correo@correo.com', 'Mi Arq');
const empleado = Empleado('Alejandro', 'empleado@empleado.com', 'Ingeniero');

console.log(cliente.mostrarNombre());



function toUpperCase(str) {
    return str.toUpperCase();
}

function toLowerCase(str) {
    return str.toLowerCase();
}

function toMixedCase(str) {
    return toUpperCase(toLowerCase(str));
}

const nombre = 'Daniel';
console.log(toMixedCase(nombre));