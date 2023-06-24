document.addEventListener('DOMContentLoaded', function () {

    const email = {
        email: '',
        asunto: '',
        mensaje: '',
        emailcc: ''
    }

    console.log(email);


    //* SELECCIONAR LOS ELEMENTOS DE LA INTERFAZ
    const inputEmail = document.querySelector('#email');
    const inputEmailCC = document.querySelector('#emailcc');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');
    const spineer = document.querySelector('#spinner');

    //* ASIGNAR EVENTOS
    inputEmail.addEventListener('input', validar);
    inputEmailCC.addEventListener('input', validar);
    inputAsunto.addEventListener('input', validar);
    inputMensaje.addEventListener('input', validar);

    formulario.addEventListener('submit', enviarEmail);

    btnReset.addEventListener('click', function(e) {
        e.preventDefault();
        resetFormulario();
    })

    
    function enviarEmail(e) {
        e.preventDefault();
        spineer.classList.add('flex');
        spineer.classList.remove('hidden');
        
        setTimeout(() => {
            spineer.classList.remove('flex');
            spineer.classList.add('hidden');

            resetFormulario();

            //* CREAR ALERTA
            const alertaExito = document.createElement('P');
            alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mg-10', 'font-bold', 'text-sm', 'uppercase');
            alertaExito.textContent = 'Mensaje enviado correctamente';

            formulario.appendChild(alertaExito);

            setTimeout(() => {
                alertaExito.remove();
            }, 2000);

        }, 2000)   
    }

    function validar(e) {
        console.log(`esto es type => ${e.target.type === 'email'}`);

        if(e.target.value.trim() === '' && e.target.id !== 'emailcc') {
            console.log('entrando a primer if');
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail(false);
            return;
        }
        
        if (e.target.type === 'email') {
            if(e.target.value !== '' && !validarEmail(e.target.value)) {
                console.log('entrando a segundo if');
                mostrarAlerta('El email no es valido', e.target.parentElement);
                email[e.target.name] = '';
                comprobarEmail(false);
                return;

            }
        }
        
        if(e.target.value !== '') {
            email[e.target.name] = e.target.value.trim().toLowerCase();
            if (email.email === '' || email.mensaje === '' || email.asunto === ''){
                console.log('entrando a tercer if');
                comprobarEmail(false);
                return;
            }

        }

        
        limpiarAlerta(e.target.parentElement);

        //* ASIGNAR LOS VALORES AL OBJETO
        email[e.target.name] = e.target.value.trim().toLowerCase();

        //* COMPROBAR EL OBJETO DE EMAIL
        comprobarEmail(true);
    }

    function mostrarAlerta(mensaje, referencia) {
        limpiarAlerta(referencia);
        
        //* GENERAR ALERTA CON HTML
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');
        
        //* INYECTAR ERROR A FORMULARIO
        referencia.appendChild(error);
    }
    
    function limpiarAlerta(referencia) {
        //* COMPRUEBA SI EXISTE LA ALERTA
        const alerta = referencia.querySelector('.bg-red-600');
        if(alerta) {
            alerta.remove();
        }

    }

    function validarEmail(email) {
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
        const resultado = regex.test(email);
        return resultado;
    }

    function comprobarEmail(estado) {
        if( estado === false) {
            // desactivar boton
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
            return;
        } else {
            btnSubmit.classList.remove('opacity-50');
            btnSubmit.disabled = false;

        }
        
    }

    function resetFormulario() {
         //* REINICIAR EL OBJETO
         email.email = '';
         email.emailcc = '';
         email.asunto = '';
         email.mensaje = '';
         formulario.reset();
         comprobarEmail();
    }

});

