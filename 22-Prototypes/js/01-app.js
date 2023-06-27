const cliente = {
    nombre: 'juan',
    saldo: 500
};

console.log(cliente);
console.log(typeof cliente);


function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const juan = new Cliente('Juan', 500);

console.log(juan);

const daniel = new Cliente('Daniel', 1000)
console.log(daniel);