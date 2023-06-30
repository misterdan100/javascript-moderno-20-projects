let DB;

document.addEventListener('DOMContentLoaded', () => {
    crmDB();

    setTimeout(() => {
        crearCliente();
    }, 2000);
})

function crmDB() {
    //* Crear base de datos v1.0
    let crmDB = window.indexedDB.open('crm', 1);

    //* Si hay un error
    crmDB.onerror = function() {
        console.log('Hubo un error con DB');
    }

    //* Se creo bien
    crmDB.onsuccess = function() {
        console.log('DB creada');

        DB = crmDB.result;
    }


    //* Configuracion de la base de datos
    crmDB.onupgradeneeded = function(e) {
        const db = e.target.result;

        const objectStore = db.createObjectStore('crm', {
            keyPath: 'crm',
            autoIncrement: true // inserta numeracion a los registros
        });

        // como sera la DB
        // Definir columnas
        objectStore.createIndex('nombre', 'nombre', {unique: false})
        objectStore.createIndex('email', 'email', {unique: true})
        objectStore.createIndex('telefono', 'telefono', {unique: false})

    }
}

function crearCliente() {
    let transaction = DB.transaction(['crm'], 'readwrite');

    transaction.oncomplete = function() {
        console.log('Transaccion Completada');
        return
    }

    transaction.onerror = function() {
        console.log('Hubo un error en transaccion');
    }

    const objectStore = transaction.objectStore('crm');

    const nuevoCliente = {
        telefono: 1234343,
        nombre: 'Daniel',
        email: 'merchan@gmail.com'
    }

    const peticion = objectStore.add(nuevoCliente);

    console.log(peticion);
}