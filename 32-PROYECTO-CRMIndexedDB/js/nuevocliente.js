(function() {
    let DB;

    const formulario = document.querySelector('#formulario');

    document.addEventListener('DOMContentLoaded', () => {
        conectarDB();

        formulario.addEventListener('submit', validarCliente);
    });

 

    function validarCliente(e) {
        e.preventDefault();

        
        //* Leer todos los inputs
        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;
        
        if(nombre === '' || email === '' || telefono === '' || empresa === '') {
            imprimirAlerta('Todos los campos son obligatorios', 'error');
            
            return;
        }
        
        // Crear un objeto con la informacion
        const cliente = {
            nombre,
            email,
            telefono,
            empresa
        }
        
        cliente.id = Date.now();

        crearNuevoCliente(cliente);
    }

    function crearNuevoCliente(cliente) {
        const transaction = DB.transaction(['crm'], 'readwrite');

        const objectStore = transaction.objectStore('crm');

        objectStore.add(cliente);

        transaction.onerror = function() {
            imprimirAlerta('Hubo un error', 'error')
        };

        transaction.oncomplete = function () {
            imprimirAlerta('El cliente se agrego Correstamente');

            // Para ir a clientes
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 2000);
        };
    }



    


})();

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
