describe('Hello Cypress, This is Applitools', () => {

  beforeEach('Access', () => {
    cy.visit('https://demo.applitools.com');

    // Open eyes
    cy.eyesOpen({
      appName: 'Hello Cypress, This is Applitools!',
      testName: 'My first Cypress Test',
      browser: { width: 800, height: 600 },
    });

  })


  it('works', () => {
    cy.eyesCheckWindow('Login Form');

    // Log in
    cy.get('#username').type('rsuller@companieshouse.gov.uk');
  });

  afterEach('Close eyes', () => {
    cy.eyesClose();
  })

});