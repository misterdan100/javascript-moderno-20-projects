const cliente = new Map();

cliente.set('nombre', 'Karen');
cliente.set('nombre', 'Daniel');
cliente.set('tipo', 'Premium');
cliente.set('saldo', 3000);

console.log(cliente);

console.log(cliente.has('saldo'));

console.log(cliente.get('nombre'));