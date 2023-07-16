const cliente = {
    nombre: 'Daniel',
    balance: 500,
    tipo: 'Premium'
};

describe('Testing al Cliente', () => {
    test('Es Juan Pablo',  () => {
        expect(cliente.nombre).toMatchSnapshot();
    })
});

