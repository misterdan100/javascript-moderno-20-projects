const nombreCache = 'apv-v3';

const archivos = [
    './',
    './index.html',
    './css/bootstrap.css',
    './css/styles.css',
    './js/app.js',
    './js/apv.js',
    './error.html'    
]


//* Cuando se instala en service worker
self.addEventListener('install', e => {
    // console.log('instalado el service worker');
    console.log(e);

    //* Catchear archivos para offline
    e.waitUntil(
        caches.open(nombreCache)
            .then( cache => {
                // console.log('cacheando archivos');
                cache.addAll(archivos)
            })
    )


})

//* Activar el services worker
self.addEventListener('activate', e => {
    // console.log('Serviced Worker activado');
    // console.log(e);

    //* Eliminar caches anteriores
    e.waitUntil(
        caches.keys()
            .then( keys => {
                // console.log(keys);
                return Promise.all(
                    keys.filter(key => key !== nombreCache)
                    .map( key => caches.delete(key)) // borra los demas caches
                )
                    
            })
    )
})

//* Evento fetch para descargar archivos estaticos
self.addEventListener('fetch', e => {
    // console.log('Fetch....', e);

    //* Obteniendo archivos del cache
    e.respondWith(
        caches.match(e.request)
            .then( respuestaCache => {
                // console.log('service worker');
                return respuestaCache;
            })
            .catch( () => console.log('hay un error'))
    )
})