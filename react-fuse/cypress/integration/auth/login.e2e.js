import { ERROR_MESSAGES } from '../../../src/app/constants'

describe('E2E test: Login success case', () => {
  beforeEach(() => {
    cy.fixture('auth.json').as('auth')
  })

  it('should sign in success and navigate to dashboard page', () => {
    cy.get('@auth').then((authData) => {
      const { validUser } = authData
      cy.login(validUser.email, validUser.password)
    })

    // cy.location().should((loc) => {
    //   expect(loc.href).to.eq('http://localhost:3000/dashboard')
    // })
    cy.url().should('include', '/dashboard')
    cy.get('[data-cy=dashboard-header]').should('contain', 'Dashboard page')
  })

  afterEach(() => {
    cy.get('[data-cy=cy-user-menu-dropdown]').click()
    cy.contains('Logout').click()
  })
})

describe('E2E test: Login with failure case', () => {
  beforeEach(() => {
    cy.fixture('auth.json').as('auth')
  })
  it('should return an error when user type wrong email', () => {
    cy.get('@auth').then((authData) => {
      const { wrongEmail } = authData
      cy.login(wrongEmail.email, wrongEmail.password)
    })

    cy.contains('Email').should('have.class', 'Mui-error')
  })

  it('should return an error when user type wrong password', () => {
    cy.get('@auth').then((authData) => {
      const { wrongPassword } = authData
      cy.login(wrongPassword.email, wrongPassword.password)
    })

    cy.contains('Password').should('have.class', 'Mui-error')
  })

  it('should return an error when user type wrong email format', () => {
    cy.get('@auth').then((authData) => {
      const { wrongEmailFormat } = authData
      cy.login(wrongEmailFormat.email, wrongEmailFormat.password)
    })

    cy.contains(ERROR_MESSAGES.wrongEmailFormat).should(
      'have.class',
      'Mui-error'
    )
  })
})
