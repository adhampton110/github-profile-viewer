// https://on.cypress.io/api

describe('App Component', () => {

  it('renders the page accurately', () => {
    cy.visit('/');
    cy.get('h1').should('exist');
    cy.get('h3').should('exist');
    cy.get('input').should('be.empty');
  });

  it('fetches a valid user', () => {
    const username = 'octocat';
    cy.visit('/');

    // enter valid user into textbox
    cy.get('input').type(username);
    cy.get('input').should('have.value',username);
    cy.get('input').type('{enter}');

    // ensure valid user information is rendered
    cy.get('.child1 h1').should('exist');
    cy.get('.child1 img').should('exist');
    cy.get('.child1 .company').should('exist');
    cy.get('.child1 .location').should('exist');
    cy.get('.child1 .link').should('exist');
  });

  it('fetches an invalid user', () => {
    const username = 'halfkewasendfsdf'
    cy.visit('/');

    // enter valid user into textbox
    cy.get('input').type(username);
    cy.get('input').should('have.value',username);
    cy.get('input').type('{enter}');

    // popup should render 
    cy.get('.popup').should('exist');
    cy.get('button').click();

    // popup should disappear after click
    cy.get('.popup').should('not.exist');
  });
})
