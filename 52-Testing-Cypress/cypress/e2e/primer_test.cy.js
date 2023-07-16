/// <reference types="cypress" />


describe('Carga la pagina principal', () => {
    it('Carga la pagina principal', () => {
        cy.viewport(1500, 1200)
        //! Para dirigir a Cypress a la pagina web
        cy.visit('http://localhost:5500/52-Testing-Cypress/index.html');

        //! Verificar el elemento y su texto
        cy.contains('[data-cy="titulo-proyecto"]', 'Administrador de Pacientes de Veterinaria');

        //! Solo verifica que existe el elemento
        cy.get('[data-cy="titulo-proyecto"]').should('exist');

        //! Verificar que exista y cotenga un texto
        cy.get('[data-cy="titulo-proyecto"]')
            .invoke('text')
            .should('equal', 'Administrador de Pacientes de Veterinaria');

        //! Verificar el texto de las citas
        cy.get('[data-cy="citas-heading"]')
            .invoke('text')
            .should('equal', 'No hay Citas, comienza creando una')

        
    });
})