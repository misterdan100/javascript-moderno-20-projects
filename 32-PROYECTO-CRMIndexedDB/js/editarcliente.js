(function() {
    let DB;
    let idCliente;

    const nombreInput = document.querySelector('#nombre');
    const telefonoInput = document.querySelector('#telefono');
    const emailInput = document.querySelector('#email');
    const empresaInput = document.querySelector('#empresa');

    const formulario = document.querySelector('#formulario');

    document.addEventListener('DOMContentLoaded', () => {
        conectarDB();

        //* Actualiza el resgirstro
        formulario.addEventListener('submit', actualizarCliente);

        //* Verificar el ID de la URL
        const parametrosURL = new URLSearchParams(window.location.search)
        idCliente = parametrosURL.get('id');
        if(idCliente) {
            //* setTimeout para que espere a que se cree la base de datos y no genere un error
            setTimeout(() => {
                obtenerCliente(idCliente);
            }, 100);
        }
    });

    function actualizarCliente(e) {
        e.preventDefault();

        if(nombreInput.value === '' || empresaInput === '' || emailInput === '' || telefonoInput  === '') {
            imprimirAlerta('Todos los campos son obligatorio', 'error')
            return;
        }

        //* Actualizar el cliente
        const clienteActualizado = {
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id: Number(idCliente)
        }

        const transaction = DB.transaction(['crm'], 'readwrite');
        objectStore = transaction.objectStore('crm');
        objectStore.put(clienteActualizado)

        transaction.oncomplete = function() {
            imprimirAlerta('Editado correctamente');

            setTimeout(() => {
                window.location.href = 'index.html'
            }, 2000);
        }

        transaction.onerror = function() {
            imprimirAlerta('Hubo un error', 'error');
        }
    }

    function obtenerCliente(id) {
        const transaction = DB.transaction(['crm'], 'readonly');
        const objectStore = transaction.objectStore('crm');

        const cliente = objectStore.openCursor();
        cliente.onsuccess = function(e) {
            const cursor = e.target.result;

            if(cursor) {
                if(cursor.value.id === Number(id)) {
                    llenarFormulario(cursor.value);
                }
                cursor.continue();
            }
        }
    }

    function llenarFormulario(datosCliente) {
        const { nombre, telefono, email, empresa } = datosCliente;
        nombreInput.value = nombre;
        telefonoInput.value = telefono;
        emailInput.value = email;
        empresaInput.value = empresa;
    }

    function conectarDB() {
        const abrirConexion = window.indexedDB.open('crm', 1);

        abrirConexion.onerror = function() {
            console.log('Hubo un error');
        }

        abrirConexion.onsuccess = function() {
            DB = abrirConexion.result;
        }

    }


})();
    
    

//! Menu Hamburguesa
const flecha = document.querySelector('.flecha');
const aside = document.querySelector('aside');
const main = document. querySelector('main');

flecha.addEventListener('click', escoderAside);

function escoderAside() {
    if(aside.classList.contains('hidden')) {
        aside.classList.remove('hidden');
        main.classList.replace('md:w-full', 'md:w-3/5')
        main.classList.replace('xl:w-full', 'xl:w-4/5')
    } else {
        aside.classList.add('hidden');
        main.classList.replace('md:w-3/5', 'md:w-full')
        main.classList.replace('xl:w-4/5', 'xl:w-full')

    }
}
