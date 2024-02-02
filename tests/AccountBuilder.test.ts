import { expect } from "chai";
import { describe } from "mocha";
import { AccountBuilder } from "../core/AccountBuilder.js";

describe("Generate a new account", () => {
  it("Should return a new user object", () => {
    const account = new AccountBuilder();
    const user = account.generateNewAccount(
      "Maxim",
      "Soloviev",
      BigInt(Date.now()),
      "CBDC"
    );
    expect(user).to.be.an("object");
  });
  it("Should return a new user account with IBAN", () => {
    const account = new AccountBuilder();
    const user = account.generateNewAccount(
      "Maxim",
      "Soloviev",
      BigInt(Date.now()),
      "CBDC"
    );
    expect(user.iban).to.has.length(21);
  });
  it("Should return a new user with name 'Maxim'", () => {
    const account = new AccountBuilder();
    const user = account.generateNewAccount(
      "Maxim",
      "Soloviev",
      BigInt(Date.now()),
      "CBDC"
    );
    expect(user.info.fistName).to.be.equal("Maxim");
  });
});
