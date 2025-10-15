describe("Formulário de consultoria", () => {
  it("Deve solicitar consultoria individual", () => {
    cy.start();
    cy.submitLogin("papito@webdojo.com", "katana123");

    cy.goTo("Formulários", "Consultoria");

    cy.get("#name").type("Juliana Matos");
  });
});
