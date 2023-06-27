function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function() {
    let tipo;

    if(this.saldo > 10000) {
        tipo = 'Gold'
    } else if(this.saldo > 5000) {
        tipo = 'Platinum'
    } else {
        tipo = 'Normal'
    }

    console.log(tipo);
    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function() {
    console.log(`Nombre: ${this.nombre} Saldo: ${this.saldo} Tipo: ${this.tipoCliente()}`);
}

Cliente.prototype.retiraSaldo = function(retira) {
    return this.saldo -= retira;
}


function Persona(nombre, saldo, telefono) {
    Cliente.call(this, nombre, saldo)
    this.telefono = telefono;
}

Persona.prototype = Object.create( Cliente.prototype)


//! Instanciarlo
const juan = new Persona('Juan', 5000, 12234234);
console.log(juan);