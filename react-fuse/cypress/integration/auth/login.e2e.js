describe('E2E test: Sign In page', () => {
  beforeEach(() => {
    cy.fixture('auth.json').as('auth')
  })
  // it('should sign in success and navigate to dashboard page', () => {
  //   cy.get('@auth').then((authData) => {
  //     const { validUser } = authData
  //     cy.login(validUser.email, validUser.password)
  //   })

  //   cy.location().should((loc) => {
  //     expect(loc.href).to.eq('http://localhost:3000/dashboard')
  //   })
  //   cy.get('[data-cy=dashboard-header]').should('contain', 'Dashboard page')
  // })

  it('should return an warning when user type wrong email or password', () => {
    cy.get('@auth').then((authData) => {
      const { wrongEmail } = authData
      cy.login(wrongEmail.email, wrongEmail.password)
    })

    cy.contains('Email').should('have.class', 'Mui-error')
  })

  afterEach(() => {
    cy.get('[data-cy=cy-user-menu-dropdown]').click()
    cy.contains('Logout').click()
  })
})
