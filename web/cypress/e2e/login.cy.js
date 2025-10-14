describe("Login", () => {
  it("Deve realizar login com sucesso", () => {
    cy.login("papito@webdojo.com", "katana123");

    cy.get('[data-cy="user-name"]')
      .should("be.visible")
      .and("have.text", "Fernando Papito");
  });

  it("Deve exibir mensagem de erro ao inserir credenciais inválidas", () => {
    cy.login("papito@webdojo.com", "katan3");

    cy.contains("Acesso negado! Tente novamente.").should("be.visible");
  });

  it("Não deve logar com e-mail não cadastrado", () => {
    cy.login("naoexiste@webdojo.com", "katana123");

    cy.contains("Acesso negado! Tente novamente.").should("be.visible");
  });
});
