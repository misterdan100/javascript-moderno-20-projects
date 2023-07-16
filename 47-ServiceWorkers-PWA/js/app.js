if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
        .then( registrado => console.log('Se registro correstamente', registrado))
        .catch( error => console.log('fallo instalacion', error))
} else {
    // console.log('Service Workers no soportados');
}