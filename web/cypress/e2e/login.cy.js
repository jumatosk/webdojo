describe("Login", () => {
  it("Deve realizar login com sucesso", () => {
    cy.start();
    cy.submitLogin("papito@webdojo.com", "katana123");

    cy.get('[data-cy="user-name"]')
      .should("be.visible")
      .and("have.text", "Fernando Papito");
  });

  it("Deve exibir mensagem de erro ao inserir credenciais inválidas", () => {
    cy.start();
    cy.submitLogin("papito@webdojo.com", "katan3");

    cy.contains("Acesso negado! Tente novamente.").should("be.visible");
  });

  it("Não deve logar com e-mail não cadastrado", () => {
    cy.start();
    cy.submitLogin("naoexiste@webdojo.com", "katana123");

    cy.contains("Acesso negado! Tente novamente.").should("be.visible");
  });
});
