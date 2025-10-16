Cypress.Commands.add("goTo", (buttonName, pageTitle) => {
  cy.contains("button", buttonName).should("be.visible").click();

  cy.contains("h1", pageTitle).should("be.visible");
});

Cypress.Commands.add("checkRequiredFields", (field, errorMessage) => {
  cy.contains(field, errorMessage).should("be.visible");
});
