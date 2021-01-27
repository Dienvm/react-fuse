// import { useDispatch } from 'react-redux'
// import * as authActions from '../../src/app/auth/store/actions'

Cypress.Commands.add('login', (email, password) => {
  cy.visit('/login')

  cy.get('input[name="username"]').type(email).should('have.value', email)
  cy.get('input[name="password"]').type(password).should('have.value', password)
  cy.get('button[type="submit"]').click()
})

// Cypress.Commands.add('loginWithFirebase', (email, password) => {
//   const dispatch = useDispatch()
//   dispatch(authActions.submitLoginWithFireBase({ email, password }))
// })

// Cypress.Commands.add('removeAllFacilityResult', (query) => {
//   cy.visit('/product')
//   cy.get('[data-cy=cy-product-back-button]').type('Create new parent chain')
//   cy.get('[data-cy=submit-facility]').click()

//   cy.get('[data-cy=wrap-search-result]').then(($element) => {
//     if ($element.find('h2').length > 0) {
//       expect($element).to.contain('No result found')
//     } else {
//       cy.getIds('[data-cy=facility-item]').then((ids) => {
//         ids.forEach((id) => {
//           cy.get(`[data-id=${id}]`).click()
//           cy.url().should('include', '/facilities/')

//           cy.get('[data-cy=remove-facility]').click()
//           cy.get('[data-testid=btn-submit-modal]').click()
//         })
//       })
//     }
//   })
// })
