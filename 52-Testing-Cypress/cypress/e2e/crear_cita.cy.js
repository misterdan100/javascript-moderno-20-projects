/// <reference types="cypress" />

describe('Llena los campos para una nueva cita y la muestra', () => {
    it('campos nueva cita', () => {
        cy.visit('/index.html')

        cy.get('[data-cy="mascota-input"]')
            .type('Hook')

        cy.get('[data-cy="propietario-input"]')
            .type('Daniel')

        cy.get('[data-cy="telefono-input"]')
            .type('312558899')

        cy.get('[data-cy="fecha-input"]')
            .type('2021-12-03')

        cy.get('[data-cy="hora-input"]')
            .type('12:30')

        cy.get('[data-cy="sintomas-textarea"]')
            .type('Sola duerme')

        cy.get('[data-cy="submit-cita"]')
            .click();

        cy.get('[data-cy="citas-heading"]')
            .invoke('text')
            .should('equal', 'Administra tus Citas ')

        cy.get('[data-cy="alerta"]')
            .invoke('text')
            .should('equal', 'Se agregó correctamente')

        cy.get('[data-cy="alerta"]')
            .should('have.class', 'alert-success')

    })
})