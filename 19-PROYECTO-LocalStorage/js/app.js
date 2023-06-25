//* VARIABLES
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');

let tweets = [];


//* EVENT LISTENER
eventListeners()
function eventListeners() {
    //? Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet)

    //? Cuando el DOM esta listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
        crearHTML()
    })
};



//*FUNCTIONS
function agregarTweet(e) {
    e.preventDefault();
    
    //? textarea donde el user esscribe
    const tweet = document.querySelector('#tweet').value;

    // validacion....
    if(tweet === '') {
        mostrarError('Un mensaje no puede estar vacio!');

        return;
    }

    const tweetObj = {
        tweet,
        id: Date.now()
    }

    // Aniadir al arrays de tweets
    tweets = [...tweets, tweetObj];

    // crear html para mostrar tweet
    crearHTML();

    // reiniciar el formulario
    formulario.reset();
};

//? Mostrar mensaje de error
function mostrarError(error) {
    const mensajeError = document.createElement('P');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    // insertarlo en el html
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    // a los 2 seg se ejecuta este timeout
    setTimeout(() => {
        mensajeError.remove();
    }, 2000);

}

//? muestra lista de tweets
function crearHTML() {
    limpiarHTML();

    if(tweets.length > 0) {
        tweets.forEach( tweet => {
            // agregar boton eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerHTML = 'X';

            // aniadir la funcion de eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }


            // crear html para tweet
            const li = document.createElement('LI');


            // aniadir texto
            li.textContent = tweet.tweet;
            li.appendChild(btnEliminar);
            listaTweets.appendChild(li);

        })
    }

    sincronizarStorage();
}

//? agrega tweet a local storage
function sincronizarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets))
}


//? elimina un tweet
function borrarTweet(id) {
    tweets = tweets.filter( tweet => tweet.id !== id )

    crearHTML();

}

//? limpiar HTML
function limpiarHTML() {
    while(listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}