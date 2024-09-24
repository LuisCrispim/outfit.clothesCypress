describe("shopping cart", () => {
  beforeEach(() => {
    cy.login();
  });

  it("deve aumentar o número de peças do carrinho quando produto for adicionado e mostrar o número de peças", () => {
    cy.get(":nth-child(1) > .pt-0").click();
    cy.get(".ml-1").contains("1");

    cy.get(":nth-child(2) > .pt-0").click();

    cy.get(":nth-child(3) > .pt-0").click();

    cy.get(":nth-child(4) > .pt-0").click();

    cy.get(":nth-child(5) > .pt-0").click();

    cy.get(":nth-child(6) > .pt-0").click();

    cy.get(":nth-child(7) > .pt-0").click();

    cy.get(":nth-child(8) > .pt-0").click();

    cy.get(":nth-child(9) > .pt-0").click();
    cy.get(".ml-1").contains("9");
  });

  it("ao clicar no ícone do carrinho, deverá ser direcionado a página com a lista de compras", () => {
    cy.get(":nth-child(1) > .pt-0").click();

    cy.get("a.p-2").click();

    cy.url().should("be.equal", "https://outfit-store-alpha.vercel.app/cart");
  });

  it("deve editar o carrinho permitindo aumentar o número de mesmas peças ou exluir alguma ", () => {
    cy.get(":nth-child(1) > .pt-0").click();
    cy.get(":nth-child(2) > .pt-0").click();

    cy.get("a.p-2").click();

    cy.get(":nth-child(1) > :nth-child(2) > select").select("5");
    cy.contains("div", "Product updated in the cart");

    cy.get(":nth-child(2) > :nth-child(4) > button").click();
    cy.contains("div", "Product updated in the cart");
  });
});
