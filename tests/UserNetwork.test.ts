import { expect } from "chai";
import { describe } from "mocha";
import { UsersNetwork } from "../core/UsersNetwork.js";
import { AccountBuilder } from "../core/AccountBuilder.js";

describe("Add new user account to the Network", () => {
  it("Should return accounts array with (length 1)", () => {
    const account = new AccountBuilder();
    const users = new UsersNetwork();
    users.add(
      account.generate("Maxim", "Soloviev", BigInt(Date.now()), "CBDC")
    );
    expect(users.accounts).to.have.lengthOf(1);
  });

  it("Should return JSON with user accounts", () => {
    const account = new AccountBuilder();
    const users = new UsersNetwork();
    users.add(
      account.generate("Maxim", "Soloviev", BigInt(Date.now()), "CBDC")
    );

    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt#use_within_json
    //@ts-ignore
    BigInt.prototype.toJSON = function () {
      return this.toString();
    };

    expect(JSON.stringify(users.accounts)).to.be.a("string");
  });
});
