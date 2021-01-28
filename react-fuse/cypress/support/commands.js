// import { useDispatch } from 'react-redux'
// import * as authActions from '../../src/app/auth/store/actions'

Cypress.Commands.add('login', (email, password) => {
  cy.visit('/login')

  cy.get('input[name="username"]').type(email).should('have.value', email)
  cy.get('input[name="password"]').type(password).should('have.value', password)
  cy.get('button[type="submit"]').click()
})

Cypress.Commands.add('updateProductFormData', (form) => {
  const { title, description, price, quantity, shipping } = form
  cy.get('[data-cy=cy-product-save]')
    .should('contain', 'Save')
    .should('be.disabled')
  cy.get('[data-cy=cy-product-input-name]').clear().type(title)
  cy.get('[data-cy=cy-product-input-description]').type(description)
  // cy.get('[data-cy=cy-product-input-categories]')
  //   .type('mobile')
  //   .type('{enter}')
  // cy.get('[data-cy=cy-product-input-tags]').type('trend').type('{enter}')
  cy.get('[data-cy=cy-product-input-price]').clear().type(price)
  cy.get('[data-cy=cy-product-input-quantity]').clear().type(quantity)
  cy.get('[data-cy=cy-product-input-shipping]').clear().type(shipping)
  cy.get('[data-cy=cy-product-save]').should('not.be.disabled').click()
  cy.get('[data-cy=cy-product-save]').should('not.be.disabled')
})
