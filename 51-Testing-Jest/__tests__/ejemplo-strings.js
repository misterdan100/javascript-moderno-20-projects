const password = '123456';

describe('Valida que el password no este vacios y tenga una extension de 6 caracteres', () => {
    test('Que el password tenga 6 caracteres', () => {
        expect( password ).toHaveLength(6);
    });

    test('Password no vacio', () => {
        expect( password ).not.toHaveLength(0);
    })

})