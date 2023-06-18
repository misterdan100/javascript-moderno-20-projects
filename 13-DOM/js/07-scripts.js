const encabezado = document.querySelector('h1');
console.log(encabezado);

encabezado.style.backgroundColor = 'teal';
encabezado.style.fontFamily = 'Arial';
encabezado.style.textTransform = 'uppercase';

const card = document.querySelector('.card');

card.classList.add('nueva-clase', 'segunda-clase');
card.classList.remove('nueva-clase');