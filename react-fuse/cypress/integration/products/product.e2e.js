describe('Products page', () => {
  beforeEach(() => {
    cy.fixture('auth.json').as('auth')
    cy.fixture('product.json').as('product')
  })

  it('should check exists produts in table', () => {
    cy.get('@auth').then((authData) => {
      const { validUser } = authData
      cy.login(validUser.email, validUser.password)
    })
    cy.visit('/products/new')
    cy.url().should('include', '/products/new')
    cy.get('[data-cy=cy-product-title]').should('contain', 'New Product')
    cy.get('[data-cy=cy-product-save]')
      .should('contain', 'Save')
      .should('be.disabled')
    cy.get('[data-cy=cy-product-input-name]').should('be.empty')
  })

  it('should create new product', () => {
    cy.get('@product').then((productData) => {
      cy.updateProductFormData(productData.newProduct)
    })
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000)
    cy.url().should('include', '/products')
    cy.get('[data-cy=cy-product-row]').should('have.length', 1)
  })

  it('should update new product', () => {
    cy.visit('/products')
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000)
    cy.contains('title').click()
    cy.get('@product').then((productData) => {
      cy.updateProductFormData(productData.updateProduct)
    })
    cy.url().should('include', '/products')
    cy.get('[data-cy=cy-product-row]').should('have.length', 1)
  })

  it('should delete product', () => {
    cy.visit('/products')
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000)
    cy.get('[data-cy=cy-product-row]').within(() => {
      cy.get('[type=checkbox]').check()
    })
    cy.get('[data-cy=cy-products-select-menu]').click()
    cy.get('[data-cy=cy-products-remote]').click()
    cy.get('[data-cy=cy-product-row]').should('have.length', 0)
  })
})
