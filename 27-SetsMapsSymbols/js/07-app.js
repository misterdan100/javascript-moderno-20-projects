//! Generadores

const numeros = [1, 2, 3, 4, 5, '5', 4, 3, 2, 1];

function *crearGenerador() {
    yield 1;
    yield 'juan';
    yield undefined;
    yield true;
}

const iterador = crearGenerador();

console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());

function *generadorCarrito(numeros) {
    for(let i of numeros) {
        yield i
    }
}

const iterador2 = generadorCarrito(numeros)

console.log(iterador2.next());
console.log(iterador2.next());
console.log(iterador2.next());
console.log(iterador2.next());
console.log(iterador2.next());
console.log(iterador2.next());
console.log(iterador2.next());
console.log(iterador2.next());
console.log(iterador2.next());
console.log(iterador2.next());
console.log(iterador2.next());