Cypress.Commands.add("goTo", (buttonName, pageTitle) => {
  cy.contains("button", buttonName).should("be.visible").click();

  cy.contains("h1", pageTitle).should("be.visible");
});

Cypress.Commands.add("checkRequiredFields", (label, field, errorMessage) => {
  cy.contains("label", label)
    .parent()
    .find(field)
    .should("be.visible")
    .should("have.text", errorMessage)
    .and("have.class", "text-red-400")
    .and("have.css", "color", "rgb(248, 113, 113)");
});
