const flecha = document.querySelector('.flecha');
const aside = document.querySelector('aside');
const main = document. querySelector('main');

flecha.addEventListener('click', escoderAside);

function escoderAside() {
    if(aside.classList.contains('hidden')) {
        aside.classList.remove('hidden');
        main.classList.replace('md:w-full', 'md:w-3/5')
        main.classList.replace('xl:w-full', 'xl:w-4/5')
    } else {
        aside.classList.add('hidden');
        main.classList.replace('md:w-3/5', 'md:w-full')
        main.classList.replace('xl:w-4/5', 'xl:w-full')

    }
}
