/// <reference types="Cypress" />
import LoginPage from '../../support/page_objects/loginPage'

describe('Sign in to Companies House', () => {

    const companyName = 'THE GIRLS\' DAY SCHOOL TRUST';

    before('Open eyes', () => {
        // Open applitools eyes
        cy.eyesOpen({
            appName: 'Companies House Beta Service',
            testName: 'Sign in',
            browser: [
                { width: 800, height: 600, name: 'firefox' },
                { width: 1024, height: 768, name: 'chrome' },
                { width: 900, height: 600, name: 'ie10' },
                { width: 1024, height: 900, name: 'ie11' },
                { width: 900, height: 600, name: 'edge' },
                { width: 900, height: 600, name: 'safari' },
                {deviceName: 'iPhone 4', screenOrientation: 'landscape'},
                {deviceName: 'iPhone 5/SE', screenOrientation: 'portrait'},
                {deviceName: 'iPhone X', screenOrientation: 'landscape'}   
            ]
        });

    })

    beforeEach('Sign in', () => {
        const loginPage = new LoginPage();

        // Visit site
        cy.visit('https://beta.companieshouse.gov.uk/');

        cy.eyesCheckWindow('Home Page');

        // Log in as valid user
        cy.get('#user-signin').click();
        loginPage.loginIn(Cypress.env('email'), Cypress.env('password'));

    })

    it('Check your details', () => {
        // Select your details
        cy.contains('Your details').click();
        cy.eyesCheckWindow('Your details');

    })

    it('Search for company details', () => {
        // Search for company by name
        cy.get('#site-search-text').type(companyName);
        cy.get('#search-submit').click();

        // Click the selection from List
        cy.eyesCheckWindow('Search Page');
        cy.contains(companyName).click();

        // Assert you're made it to the right screen
        cy.eyesCheckWindow('Company Overview');
        cy.get('.heading-xlarge').should('have.text', companyName);

    })

    it('Check my people', () => {
        // Search for company by name
        cy.get('#site-search-text').type(companyName);
        cy.get('#search-submit').click();

        // Click the selection from List
        cy.contains(companyName).click();

        // Select People
        cy.get('#people-tab').click();
        // Select current officers
        cy.get('.block-label').click();
        cy.eyesCheckWindow('People list');

    })

    after('Close eyes', () => {
        cy.eyesClose();
    })

})