describe("Formulário de consultoria", () => {
  it("Deve solicitar consultoria individual", () => {
    cy.start();
    cy.submitLogin("papito@webdojo.com", "katana123");

    cy.goTo("Formulários", "Consultoria");

    // cy.get("#name").type("Juliana Matos");
    // cy.get("#email").type("juliana@webdojo");

    cy.get("input[placeholder='Digite seu nome completo']").type(
      "Juliana Matos"
    );
    cy.get("input[placeholder='Digite seu email']").type("juliana@webdojo");
    cy.get("input[placeholder='(00) 00000-0000']")
      .type("71988884545")
      .should("have.value", "(71) 98888-4545");
  });
});
