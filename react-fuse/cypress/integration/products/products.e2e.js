describe('Products page', () => {
  beforeEach(() => {
    cy.fixture('auth.json').as('auth')
    cy.get('@auth').then((authData) => {
      const { validUser } = authData
      cy.login(validUser.email, validUser.password)
    })
    cy.visit('/products')
  })

  it('should check exists produts in table', () => {
    cy.url().should('include', '/products')
    cy.get('[data-cy=cy-products-header]').should('contain', 'Products')
    cy.get('[data-cy=cy-product-row]').should('have.length', 3)
  })
})

describe('Search products:', () => {
  it('should search products', () => {
    cy.get('[data-cy=cy-search-product]')
      .type('Note 10')
      .should('have.value', 'Note 10')
    cy.get('[data-cy=cy-product-row]').should('have.length', 1)
  })

  it('should search products with no result', () => {
    cy.get('[data-cy=cy-search-product]')
      .type('test')
      .should('have.value', 'test')
    cy.get('[data-cy=cy-product-row]').should('have.length', 0)
  })

  afterEach(() => {
    cy.get('[data-cy=cy-search-product]').clear()
  })
})

describe('Sort products', () => {
  cy.get('[data-cy=cy-head-name]').click()
})

// describe('Create new product', () => {
//   cy.get('[data-cy=cy-add-product]').click()
//   cy.url().should('include', '/product')
// })
