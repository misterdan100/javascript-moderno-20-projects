//! class declaration
class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

const juan = new Cliente('Juan', 400);
console.log(juan);





//! class expresion
const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

}

const juan2 = new Cliente2('Daniel', 1000);
console.log(juan2);