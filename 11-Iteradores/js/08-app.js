const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JS'];

const automovil = {
    modelo: 'Camaro',
    year: 1969,
    motor: '6.0'
}

for(let propiedad in automovil) {
    console.log(`${automovil[propiedad]}`);
}