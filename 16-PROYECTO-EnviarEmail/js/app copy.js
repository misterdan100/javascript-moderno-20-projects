document.addEventListener('DOMContentLoaded', function() {
    //* VARIABLES
        //? Seleccionar los elementos de la interfaz
        const inputEmail = document.querySelector('#email');
        const inputAsunto = document.querySelector('#asunto');
        const inputMensaje = document.querySelector('#mensaje');
        const inputEmailCC = document.querySelector('#emailcc');
        const formulario = document.querySelector('#formulario');
        const btnSubmit = document.querySelector('#formulario button[type="submit"]');
        const btnReset = document.querySelector('#formulario button[type="reset"]');
        const spinner = document.querySelector('#spinner');
    
        const email = {
            email: '',
            asunto: '',
            mensaje: '',
            emailcc: ''
        }
    
    
    //* EVENTOS
        inputEmail.addEventListener('input', validar);
        inputAsunto.addEventListener('input', validar);
        inputMensaje.addEventListener('input', validar);
        inputEmailCC.addEventListener('input', validarEmailCC);
    
        formulario.addEventListener('submit', enviarEmail);
    
        btnReset.addEventListener('click', (e) => {
            e.preventDefault();
    
            let confirmacion = confirm('Desea reiniciar el formulario?');
    
            if (confirmacion) {
                resetFormulario();
            }
        })
        
        function enviarEmail(e) {
            e.preventDefault();
            
            spinner.classList.add('flex');
            spinner.classList.remove('hidden');
            
            setTimeout(() => {
                spinner.classList.remove('flex');
                spinner.classList.add('hidden');
                
                resetFormulario();
    
                // crear alerta
                const alertaExito = document.createElement('P');
                alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 'font-bold', 'text-sm', 'uppercase');
                alertaExito.textContent = 'Mensaje enviado con exito!';
    
                formulario.appendChild(alertaExito)
    
                setTimeout(() => {
                    alertaExito.remove();
                }, 2000);
            
            }, 1000);
        }
    
    //* FUNCTIONES
        function validar(e) {
            if(e.target.value.trim() === '') {
                mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
                email[e.target.name] = '';
                comprobarEmail()
                return;
            }
            
            if(e.target.id === 'email' && !validarEmail(e.target.value)) {
                mostrarAlerta(`El email no es valido`, e.target.parentElement);
                email[e.target.name] = '';
                comprobarEmail()
                return;
            }
    
            limpiarAlerta(e.target.parentElement);
    
            //? Asignar los valores
            email[e.target.name] = e.target.value.trim().toLowerCase();
    
            //? Comprobar el objeto email
            comprobarEmail();
        };
    
        function validarEmailCC(e) {
            if(e.target.value.trim() === '') {
                email.emailcc = '';
                comprobarEmail();
                return;
            }
    
            if(!validarEmail(e.target.value)) {
                mostrarAlerta(`El email no es valido`, e.target.parentElement);
                email.emailcc = '';
                comprobarEmail();
                return;
            }
    
            limpiarAlerta(e.target.parentElement);
    
            email.emailcc = e.target.value.trim().toLowerCase();
    
            comprobarEmail();
        }
    
        function mostrarAlerta(mensaje, referencia) {
            limpiarAlerta(referencia);
    
            //? Generar alerta en HTML
            const error = document.createElement('P');
            error.textContent = mensaje;
            error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');
    
            //? inyectar error al formulario
            referencia.appendChild(error);
        };
    
        function limpiarAlerta(referencia) {
            //? comprobar si existen alertas
            const alerta = referencia.querySelector('.bg-red-600');
            if(alerta) {
                alerta.remove();
            }
        };
    
        function validarEmail(email) {
            const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
            const resultado = regex.test(email);
            return resultado;
        }
    
        function comprobarEmail() {
            if(Object.values(email).filter(val => val !== '').some(val => !validarEmail(val))) {
                btnSubmit.classList.add('opacity-50');
                btnSubmit.disabled = true;
                return
            }
            btnSubmit.classList.remove('opacity-50');
            btnSubmit.disabled = false;
        }
    
        function resetFormulario() {
          //? reiniciar objeto
          email.email = "";
          email.asunto = "";
          email.mensaje = "";
          email.emailcc = "";
    
          formulario.reset();
    
          comprobarEmail();
        }
    
    
    
    });