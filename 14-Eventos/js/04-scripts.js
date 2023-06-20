const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault();
}