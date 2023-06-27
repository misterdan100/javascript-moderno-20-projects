//! VARIABLES Y SELECTORES
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');


//! EVENTOS
eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);

    formulario.addEventListener('submit', agregarGastos);
}




//! CLASSES
class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = []; //* Lista de gastos
    }

    nuevoGasto(gasto) {
        this.gastos = [...this.gastos, gasto]
        this.calcularRestante();        
    }

    calcularRestante() {
        const gastado = this.gastos.reduce( (total, gasto) => total + gasto.cantidad, 0 );
        this.restante = this.presupuesto - gastado;
    }

    eliminarGasto(id) {
        this.gastos = this.gastos.filter( gasto => gasto.id !== id );
        ui.mostrarGastos(this.gastos);
        this.calcularRestante()
    }
}



class UI {
    insertarPresupuesto(cantidad) {
        //* Extrayendo el valor
        const { presupuesto, restante } = cantidad;

        //* Agregar al HTML
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;

    }

    imprimirAlerta(mensaje, tipo) {
        //* Crear el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');


        if(tipo === 'error') {
            divMensaje.classList.add('alert-danger')
        } else {
            divMensaje.classList.add('alert-success')
        }

        //* Mensaje de error
        divMensaje.textContent = mensaje;

        //* Insertar en el html
        document.querySelector('.primario').insertBefore(divMensaje, formulario)

        setTimeout(() => {
            divMensaje.remove()
        }, 2000);
    }

    mostrarGastos(gastos) {

        this.limpiarHTML();


        //* Iterar sobre los gastos
        gastos.forEach( gasto => {
            const { cantidad, nombre, id} = gasto;

            
            
            //* Crear LI
            const nuevoGasto = document.createElement('li');
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
            nuevoGasto.dataset.id = id; //? para asignarle un data al element HTML
            
            //* Agregar al HTML del gastos
            nuevoGasto.innerHTML = `${nombre} <span class="badge badge-primary badge-pill">$ ${cantidad}</span>`
            console.log(`esto es cantidad ${cantidad}`);
            
            //* Boton para borrar el gasto
            const btnBorrar = document.createElement('button');
            btnBorrar.innerHTML = 'Borrar &times';
            btnBorrar.onclick = () => {
                eliminarGasto(id);
            }
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
            
            nuevoGasto.appendChild(btnBorrar);
            
            //* agregar al HTML 
            gastoListado.appendChild(nuevoGasto);
        })
    }

    limpiarHTML() {
        while( gastoListado.firstChild) {
            gastoListado.removeChild(gastoListado.firstChild)
        }
    }

    actualizarRestante(restante) {
        document.querySelector('#restante').textContent = restante;
    }

    comprobarPresupuesto(presupuestoObj) {
        const { presupuesto, restante } = presupuestoObj;

        const restanteDiv = document.querySelector('.restante');

        // comprobar 25%
        if( (presupuesto / 4) > restante ) {
            restanteDiv.classList.remove('alert-success', 'alert-warning');
            restanteDiv.classList.add('alert-danger');
        } else if ( (presupuesto / 2) > restante ) {
            restanteDiv.classList.remove('alert-success', 'alert-danger');
            restanteDiv.classList.add('alert-warning');   
        } else {
            restanteDiv.classList.remove('alert-warning', 'alert-danger');
            restanteDiv.classList.add('alert-success');   

        }

        // Si el total es 0 o menor
        if(restante <= 0) {
            ui.imprimirAlerta('El resupuesto se ha agotado', 'error');

            formulario.querySelector('button[type="submit"]').disabled = true;
        }
    }    

}

//* Instanciar
const ui = new UI();
let presupuesto;



//! FUNCIONES

//* Validar que el promp sea numero
function preguntarPresupuesto() {
    const presupuestoUsuario = prompt('Cual es tu presupuesto?')

    //* Validar el prompt
    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) {
        window.location.reload(); // recarga la pagina
    }

    // Presupuesto valido
    presupuesto = new Presupuesto(presupuestoUsuario);

    ui.insertarPresupuesto(presupuesto)
}

//* Aniade Gastos
function agregarGastos(e) {
    e.preventDefault();

    //* Leer los datos del formulario
    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);

    //* Vaidar
    if(nombre === '' || cantidad === '') {
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error');
        return;
    } else if( cantidad <= 0 || isNaN(cantidad) ) {
        ui.imprimirAlerta('Cantidad no valida', 'error');
        return;
    } 

    //* GENERAR OBJETO CON EL GASTO
    const gasto = {nombre, cantidad, id: Date.now()}; // Object Literal Enhancement

    //* ANIADE UN NUEVO GASTO
    presupuesto.nuevoGasto(gasto);

    //* Mensaje de correcto
    ui.imprimirAlerta('Gasto agregado correcto!', 'success');

    //* Imprimir los gastos
    const { gastos, restante } = presupuesto;
    ui.mostrarGastos(gastos);

    ui.actualizarRestante(restante);

    ui.comprobarPresupuesto(presupuesto);

    //* Reinicia el formulario
    formulario.reset();

}

function eliminarGasto(id) {
    presupuesto.eliminarGasto(id)

    const { restante } = presupuesto;

    ui.actualizarRestante(restante);

    ui.comprobarPresupuesto(presupuesto);
}