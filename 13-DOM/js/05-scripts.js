const encabezado = document.querySelector('.contenido-hero h1').textContent;
console.log(encabezado);

// forma 1 cambiar texto
console.log(encabezado.innerText); // no encuentra texto oculto con css
console.log(encabezado.textContent); // trae el texto sin revisar el css
console.log(encabezado.innerHTML); // trae el html

const imagen = document.querySelector('.card img');
console.log(imagen);

document.querySelector('.card img').src = 'img/hacer2.jpg';