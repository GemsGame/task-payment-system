import { expect } from "chai";
import { describe } from "mocha";
import { Account } from "../src/Account.js";

describe("Account class tests", () => {
  it("Should return a new user object", () => {
    const account = new Account();
    const user = account.generateNewAccount(
      "Maxim",
      "Soloviev",
      BigInt(Date.now()),
      "CBDC"
    );
    expect(user).to.be.an("object");
  });
  it("Should return a new user account with IBAN", () => {
    const account = new Account();
    const user = account.generateNewAccount(
      "Maxim",
      "Soloviev",
      BigInt(Date.now()),
      "CBDC"
    );
    expect(user.iban).to.has.length(21);
  });
  it("Should return a new user with name 'Maxim'", () => {
    const account = new Account();
    const user = account.generateNewAccount(
      "Maxim",
      "Soloviev",
      BigInt(Date.now()),
      "CBDC"
    );
    expect(user.info.fistName).to.be.equal("Maxim");
  });
});
