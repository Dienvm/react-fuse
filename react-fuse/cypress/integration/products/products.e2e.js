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
    cy.get('[data-cy=cy-product-row]').should('have.length', 0)
  })
})

describe('Search products:', () => {
  beforeEach(() => {
    cy.fixture('product.json').as('product')
  })
  it('should search products', () => {
    cy.visit('products/new')
    cy.get('@product').then((productData) => {
      cy.updateProductFormData(productData.newProduct)
    })
    cy.url().should('include', '/products')

    cy.wait(2000)
    cy.get('[data-cy=cy-search-product]')
      .type('title')
      .should('have.value', 'title')
    cy.get('[data-cy=cy-product-row]').should('have.length', 1)
  })

  it('should search products with no result', () => {
    cy.get('[data-cy=cy-search-product]')
      .clear()
      .type('test')
      .should('have.value', 'test')
    cy.get('[data-cy=cy-product-row]').should('have.length', 0)
  })

  after(() => {
    cy.get('[data-cy=cy-search-product]').clear()
    cy.get('[data-cy=cy-product-row]').within(() => {
      cy.get('[type=checkbox]').check()
    })
    cy.get('[data-cy=cy-products-select-menu]').click()
    cy.get('[data-cy=cy-products-remote]').click()
    cy.get('[data-cy=cy-product-row]').should('have.length', 0)
  })
})

// describe('Sort products', () => {
//   it('should sort product by ASC', () => {
//     cy.get('[data-cy=cy-head-name]').then(($element) => {
//       console.log('$element', $element.find('svg').should('be.visible'))
//     })
//     cy.get('[data-cy=cy-head-name]').trigger('mouseover')
//     cy.get('[data-cy=cy-head-name]').click()
//     cy.log('**sort by price**').wait(1000)
//     cy.get('[aria-sort=descending]').should('be.visible')
//   })
// })
