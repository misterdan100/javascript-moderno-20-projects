//! class declaration
class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente ${this.nombre}, su saldo es de $${this.saldo}`;
    }
    
    static bienvenida() {
        return `Bienvenido al cajero`;
    }
}

//! Herencia
class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria) {
        super(nombre, saldo); // para buscar las propiedades de la clase principal
        this.telefono = telefono;
        this.categoria = categoria;
    }
    
    mostrarInformacion() { //* Reescribe el metodo
        return `Cliente ${this.nombre}, su saldo es de $${this.saldo}, su telefono ${this.telefono} y tipo de compania ${this.categoria}`;
    }
}

const juan = new Cliente('Juan', 400);
const empresa = new Empresa('Mi Arq', 1000, 310339922, 'arquitectura')
console.log(empresa.mostrarInformacion());
console.log(juan.mostrarInformacion());
console.log(Cliente.bienvenida());
