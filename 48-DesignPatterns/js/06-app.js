class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

const funcionesPersona = {
    mostrarInformacion() {
        console.log(`Nombre persona: ${this.nombre} Email: ${this.email}`);
    },
    mostrarNombre() {
        console.log(`Mi nombre es ${this.nombre}`);
    }
}

const cliente = new Persona('Daniel', 'daniel@correo.com');

// Aniadir funciones persona a la clase de personas
Object.assign(Persona.prototype, funcionesPersona);

cliente.mostrarInformacion();

cliente.mostrarNombre();