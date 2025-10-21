describe("Studio", () => {
  it("Exemplo do Cypress Studio", () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit("http://localhost:3000");
    cy.get("#email").clear("papito@webdojo.com");
    cy.get("#email").type("papito@webdojo.com");
    cy.get("#password").clear("k");
    cy.get("#password").type("katana123");
    cy.get(".bg-\\[\\#8257E5\\]").click();
    cy.get('[data-cy="logged-user"]').click();
    cy.get('[data-cy="user-name"]').should("have.text", "Fernando Papito");
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it("Deve logar com sucesso", () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit("http://localhost:3000");
    cy.get("#email").type("papito@webdojo.com");
    cy.get("#password").type("katana123");
    cy.get(".bg-\\[\\#8257E5\\]").click();
    cy.get('[data-cy="user-name"]').should("have.text", "Fernando Papito");
    /* ==== End Cypress Studio ==== */
  });
});
