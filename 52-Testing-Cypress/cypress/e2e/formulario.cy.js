/// <reference types="cypress" />

describe('Valida el formulario', () => {
    it('Submit al formulario y mostrar la alerta', () => {
        cy.viewport(1500, 1200)

        cy.visit('http://localhost:5500/52-Testing-Cypress/index.html');

        cy.get('[data-cy="formulario"]')
            .submit();

        //! Seleccionar alerta
        cy.get('[data-cy="alerta"]')
            .invoke('text')
            .should('equal', 'Todos los campos son Obligatorios')

        cy.get('[data-cy="alerta"]')
        .should('have.class', 'alert-danger')

    })

});