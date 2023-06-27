//! class declaration
class Cliente {

    //? poner propiedades privadas
    #nombre;
    constructor(nombre, saldo) {
        this.#nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente ${this.nombre}, su saldo es de $${this.saldo}`;
    }
    
    static bienvenida() {
        return `Bienvenido al cajero`;
    }
}


const daniel = new Cliente('Daiel', 500);
console.log(daniel);