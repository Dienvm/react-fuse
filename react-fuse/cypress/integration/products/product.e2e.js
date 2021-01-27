describe('Products page', () => {
  beforeEach(() => {
    cy.fixture('auth.json').as('auth')
    cy.get('@auth').then((authData) => {
      const { validUser } = authData
      cy.login(validUser.email, validUser.password)
    })
    cy.visit('/products/new')
  })

  it('should check exists produts in table', () => {
    cy.url().should('include', '/products/new')
    cy.get('[data-cy=cy-product-back-button]').should('contain', 'Products')
    cy.get('[data-cy=cy-product-title]').should('contain', 'New Product')
    cy.get('[data-cy=cy-product-save]')
      .should('contain', 'Save')
      .should('be.disabled')
    cy.get('[data-cy=cy-product-input-name]').should('be.empty')
  })
})

describe('Add new product', () => {
  it('should create new product', () => {
    cy.get('[data-cy=cy-product-input-name]').type('Add new product')
    cy.get('[data-cy=cy-product-save]').should('not.be.disabled')
  })
})
