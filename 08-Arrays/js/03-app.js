const numeros = [1, 2, 3, 4, 5];
const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio');
const deTodo = ['Hola', 10, true, 'si', null, undefined];


for (i of meses) {
    console.log(i);
}

for (let i = 0; i < meses.length; i++) {
    console.log(meses[i]);
}

meses[0] = "Primer mes";
console.log(meses);