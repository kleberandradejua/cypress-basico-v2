/// <reference types="cypress"/>

describe('Central de atendimento', () => {

  beforeEach('Visita a página e verifica o título', () => {
    cy.visit('../src/index.html')
    cy.title('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

  it('Preenchendo os campos', () => {
    cy.get('input[name="firstName"]')
    .should('be.visible')
    .type('Kleber')
    .should('have.value','Kleber')
    cy.get('input[name="lastName"]').type('Andrade')
    cy.get('input[id="email"]').type('kleberandrade98@gmail.com')
    cy.get('textarea[name="open-text-area"]')
    .type('Mussum Ipsum, cacilds vidis litro abertis. Praesent vel viverra nisi.', {delay:0})
    cy.get('button[class="button"]').click()
    cy.get('.success').should('be.visible')

    
  })
})