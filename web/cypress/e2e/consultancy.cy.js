describe("Formulário de consultoria", () => {
  it("Deve solicitar consultoria individual", () => {
    cy.start();
    cy.submitLogin("papito@webdojo.com", "katana123");

    cy.goTo("Formulários", "Consultoria");

    cy.get("#name").type("Juliana Matos");
    cy.get("#email").type("juliana@webdojo");

    cy.get("input[placeholder='Digite seu nome completo']").type(
      "Juliana Matos"
    );
    cy.get("input[placeholder='Digite seu email']").type("juliana@webdojo");
    cy.get("input[placeholder='(00) 00000-0000']")
      .type("71988884545")
      .should("have.value", "(71) 98888-4545");

    //Estratégia utilizada para encontrar campo através do id
    cy.get("#consultancyType").select("In Company");

    // Estratégia utilizada para encontrar campo através da label e do seu elemento pai
    cy.contains("label", "Tipo de Consultoria")
      .parent()
      .find("select")
      .select("In Company");

    cy.contains("span", "Pessoa Física")
      .parent()
      .find("input")
      .check()
      .should("be.checked");

    cy.contains("label", "Pessoa Jurídica")
      .find("input")
      .should("be.not.checked");

    cy.contains("label", "Como nos conheceu?")
      .parent()
      .find("input[type='checkbox']")
      .check()
      .should("be.checked");
  });
});
