describe("Login", () => {
  it("must log in successfully", () => {
    cy.login();

    cy.url().should("be.eq", "https://outfit-store-alpha.vercel.app/");
  });

  it.only("should report login error", () => {
    cy.login("ff@ff.com", "11111111");

    cy.contains("div", "Invalid email or password");
  });
});
