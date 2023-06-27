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


//* instanciarlo
const pedro = new Cliente('Pedro', 6000);

pedro.tipoCliente()
pedro.nombreClienteSaldo()
console.log(`Saldo despues de retirar: ${pedro.retiraSaldo(3000)}`);


function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const CCJ = new Empresa('Codigo con Juan', 400, 'Cursos en Linea');
