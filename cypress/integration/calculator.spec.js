describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })


  it('number buttons update the display of the running total', () => {
    cy.get('#number2').click();
    cy.get('#number4').click();
    cy.get('#number6').click();
    cy.get('.display').should('contain', '246')
  })


  it('arithmetical operations update the display with the result of the operation', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '6')
  })


  it('multiple operations be chained together', () => {
    cy.get('#number5').click();
    cy.get('#operator_add').click();
    cy.get('#number4').click();
    cy.get('#operator-divide').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '3')
  })
  
  
  it('output as expected for a range of numbers, write tests for positive', () => {
    cy.get('#number5').click();
    cy.get('#number4').click();
    cy.get('#number3').click();
    cy.get('.display').should('contain', '543')
  })
  

  it('output as expected for a range of numbers, write tests for negative', () => {
    cy.get('#number4').click();
    cy.get('#operator-subtract').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-6')
  })
  

  it('output as expected for a range of numbers, write tests for decimals', () => {
    cy.get('#number7').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '3.5')
  })
  
  
  it('output as expected for a range of numbers, write tests for very large', () => {
    cy.get('#number5').click();
    cy.get('#number6').click();
    cy.get('#number0').click();
    cy.get('#operator-multiply').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '555520')
  })
  
  
  
  it('will return "error" when it tries to devide by zero', () => {
    cy.get('#number6').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'ERROR')
  })
  

})