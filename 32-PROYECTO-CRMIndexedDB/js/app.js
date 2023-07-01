//! Nifi para que todas las variables queden dentro del scope de este programa, utilizando una funcion que lo engloba
(function() {

    let DB;

    document.addEventListener('DOMContentLoaded', () => {
        crearDB();

        if(window.indexedDB.open('crm', 1)) {
            obtenerClientes();
        }
    })

    //* Crea la base de datos de IndexDB
    function crearDB() {
        //* Abrir (crear) una nueva base de datos
        const crearDB = window.indexedDB.open('crm', 1);

        crearDB.onerror = function() {
            console.log('Hubo un error');
        }

        //* Se agrega la nueva base de datos a la variable DB
        crearDB.onsuccess = function() {
            DB = crearDB.result;
        }

        //* function para crear o actualizar la estructura de datos
        crearDB.onupgradeneeded = function(e) {
            //* se obtiene y almacena en db la nueva base de datos recien creada
            const db = e.target.result;

            //* se crea una tabla dentro de la base de datos
            //* esa tabla se almacena en objectStore
            const objectStore = db.createObjectStore('crm', { keyPath: 'id', autoIncrement: true});

            //* Se crean indices para esa tabla
            objectStore.createIndex('nombre', 'nombre', { unique: false });
            objectStore.createIndex('email', 'email', { unique: true });
            objectStore.createIndex('telefono', 'telefono', { unique: false });
            objectStore.createIndex('empresa', 'empresa', { unique: false });
            objectStore.createIndex('id', 'id', { unique: true });

            console.log('DB Lista y Creada');
        }
    }

    function obtenerClientes() {
        const abrirConexion = window.indexedDB.open('crm', 1);

        abrirConexion.onerror = function() {
            console.log('Hubo un error');
        };

        abrirConexion.onsuccess = function() {
            DB = abrirConexion.result;

            const objectStore = DB.transaction('crm').objectStore('crm');

            objectStore.openCursor().onsuccess = function(e) {
                const cursor = e.target.result;

                if(cursor) {
                    const { nombre, email, telefono, empresa, id } = cursor.value;

                    const listadoClientes = document.querySelector('#listado-clientes')
                    listadoClientes.innerHTML += `
                        <tr>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
                                <p class="text-sm leading-10 text-gray-700"> ${email} </p>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                                <p class="text-gray-700">${telefono}</p>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                                <p class="text-gray-600">${empresa}</p>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                                <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                                <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900">Eliminar</a>
                            </td>
                        </tr>
                    `;

                    cursor.continue();
                } else {
                    console.log('No hay mas registros');
                }
            }

        }



    }
})();


//! ocultar Aside
menuAside();
export default function menuAside() {
    
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

}