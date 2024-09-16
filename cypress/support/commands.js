Cypress.Commands.add(
  "register",
  (
    username = Cypress.env("username"),
    email = Cypress.env("email"),
    password = Cypress.env("password")
  ) => {
    cy.visit("/");

    cy.contains("Login").click();
    cy.contains("Register").click();

    cy.contains("Create Account").should("be.visible");

    cy.get("#name").type(username);
    cy.get("#email").type(email);
    cy.get("#password").type(password, { log: false });
    cy.get("#confirmpassword").type(password);

    cy.get(".primary-button").click();
  }
);

Cypress.Commands.add(
  "login",
  (email = Cypress.env("email"), password = Cypress.env("password")) => {
    cy.visit("/");

    cy.contains("Login").click();

    cy.get("#email").type(email);
    cy.get("#password").type(password);

    cy.get(".primary-button").click();
  }
);
