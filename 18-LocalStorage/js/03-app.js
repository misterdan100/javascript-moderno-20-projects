localStorage.removeItem('nombre');

const mesesArray = JSON.parse(localStorage.getItem('meses'));
mesesArray.push('Nuevo mes');

localStorage.setItem('meses', JSON.stringify(mesesArray));

localStorage.clear();