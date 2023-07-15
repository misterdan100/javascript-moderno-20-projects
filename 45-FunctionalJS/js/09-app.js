const suma = (a, b, c) => a + b + c;

const parcial2 = a => (b, c) => suma(a, b, c)

const primerNumero = parcial2(5);
const resultado = primerNumero(4,3);
console.log(resultado);

// console.log(suma(1,2,3));