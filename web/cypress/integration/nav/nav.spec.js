/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('http://localhost:3000/')
  });

  context('720p resolution', () => {
    beforeEach(() => {
      // run these tests as if in a desktop
      // browser with a 720p monitor
      cy.viewport(1280, 720)
    })
    
  it('displays full header', () => {
      cy.get('[data-cy=nav-heading]').should('have.text', 'Exchange');
    })
  });

  context('iphone-x resolution', () => {
    beforeEach(() => {
      // run these tests as if in a mobile (iphone x)  
      cy.viewport('iphone-x')
    });

   it('displays mobile menu', () => {
      cy.get('[id=menu]').click();
      cy.get('#mobile-nav').should('be.visible');
     });
    
  it('displays mobile header', () => {
     cy.get('[id=menu]').click();
     cy.get('[data-cy=mobile-nav-heading]').should('have.text', 'Exchange');
    });
  });

 
})
