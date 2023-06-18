// crear html
const enlace = document.createElement('a');
enlace.textContent = 'Nuevo Enlace';
enlace.href = '/nuevo-enlace';
// console.log(enlace);

enlace.onclick = miFuncion;


const navegacion = document.querySelector('.navegacion');
navegacion.insertBefore(enlace, navegacion.children[2]);
// console.log(navegacion);

function miFuncion() {
    alert('gracias')
}

// crear un card ---------------
const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto'; 
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Concierto de vallenato';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

// creando div con clase info
const info = document.createElement('div');
info.classList.add('info');

info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

// creando imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';

// creando contenedor card
const card = document.createElement('div');
card.classList.add('card', 'nuevo');

card.appendChild(imagen);
card.appendChild(info);

const contenedorCards = document.querySelector('.contenedor-cards');

contenedorCards.appendChild(card);


console.log(info.children);

console.log(parrafo1);
