const nav = document.querySelector('.navegacion');

//* REGISTRAR UN EVENTO
nav.addEventListener('mouseout' , () => {
    console.log('Click sale')

    nav.style.background = 'transparent';
})

nav.addEventListener('mouseenter' , () => {
    console.log('Click entra')

    nav.style.background = 'white';
})