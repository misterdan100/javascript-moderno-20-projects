function sumar(a, b) {
    console.log(a + b);
    return a + b;
}

sumar(2, 3);

let total = 0;

function agregarCarrito(precio) {
    return total += precio;
}

function calcularImpuesto(total) {
    return total * 1.15;
}

total = agregarCarrito(300);
total = agregarCarrito(100);
total = agregarCarrito(600);

const totalPagar = calcularImpuesto(total);


console.log(total);
console.log(`El total a pagar es de: $ ${totalPagar}`);