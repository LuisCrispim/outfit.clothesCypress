describe("register", () => {
  it("must register new user", () => {
    cy.register();

    cy.url().should("be.eq", "https://outfit-store-alpha.vercel.app/");
  });

  it("must report error in registration", () => {
    cy.register();

    cy.contains("div", "User already exists");
  });
});
