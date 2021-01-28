describe('Products page', () => {
  beforeEach(() => {
    cy.fixture('auth.json').as('auth')
    cy.fixture('product.json').as('product')
    cy.get('@auth').then((authData) => {
      const { validUser } = authData
      cy.login(validUser.email, validUser.password)
    })
  })

  it('should check exists produts in table', () => {
    cy.visit('/products/new')
    cy.url().should('include', '/products/new')
    cy.get('[data-cy=cy-product-back-button]').should('contain', 'Products')
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
    cy.url().should('include', '/products')
    cy.get('[data-cy=cy-product-row]').should('have.length', 4)
  })

  it('should update new product', () => {
    cy.visit('/products')
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000)
    cy.contains('Add new product').click()
    cy.get('@product').then((productData) => {
      cy.updateProductFormData(productData.updateProduct)
    })
    cy.url().should('include', '/products')
    cy.get('[data-cy=cy-product-row]').should('have.length', 3)
  })
})
