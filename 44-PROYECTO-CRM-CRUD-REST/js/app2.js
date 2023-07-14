const aside = document.querySelector('aside');
const menu = document.querySelector('#menu');
const main = document.querySelector('main')


menu.addEventListener('click', ocultarMostrarAside)

function ocultarMostrarAside() {
    const asideVisible = aside.classList.contains('hidden');

    if(!asideVisible) {
        aside.classList.add('hidden');
        main.classList.replace('md:w-3/5', 'md:w-full')
        main.classList.replace('xl:w-4/5', 'xl:w-full')
        
    } else {
        aside.classList.remove('hidden')
        main.classList.replace('md:w-full', 'md:w-3/5')
        main.classList.replace('xl:w-full', 'xl:w-4/5')
        
    }
}