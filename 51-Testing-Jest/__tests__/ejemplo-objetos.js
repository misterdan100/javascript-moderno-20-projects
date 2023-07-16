const cliente =  {
    nombre: 'Daniel',
    balance: 500
};

describe('Testing al Cliente', () => {
    test('El cliente es premium', () => {
        //! Comprobar que un valor sea mayor a otro
        expect(cliente.balance).toBeGreaterThan(400);
    });

    test('Es Daniel', () => {
        expect(cliente.nombre).toBe('Daniel');
    });

    test('No es otro cliente', () => {
        expect(cliente.nombre).not.toBe('Juan');
    });

    test('No tiene 500', () => {
        expect(cliente.balance).not.toBe('300')
    })
})