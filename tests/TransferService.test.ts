import { expect } from "chai";
import { describe } from "mocha";
import { UsersNetwork } from "../core/UsersNetwork.js";
import { AccountBuilder } from "../core/AccountBuilder.js";
import { EmissionCenter } from "../core/EmissionCenter.js";
import { TransferService } from "../core/TransferService.js";

describe("Add new user account to the Network", () => {
  it("Should return accounts array with (length 1)", () => {
    const account = new AccountBuilder();
    const users = new UsersNetwork();
    users.add(
      account.generate("Maxim", "Soloviev", BigInt(Date.now()), "CBDC", true)
    );
    expect(users.accounts).to.have.lengthOf(1);
  });
});
describe("Transfer tokens gov -> user0 -> user1", () => {
  it("Should return 20 in gov account, 50 in user0, 30 in user1", () => {
    const account = new AccountBuilder();
    const users = new UsersNetwork();
    const emission = new EmissionCenter();
    const transfer = new TransferService();

    emission.add(BigInt(100));

    users.add(
      account.generate("Maxim", "Soloviev", BigInt(Date.now()), "CBDC", true)
    );
    users.add(
      account.generate("Nina", "Evleeva", BigInt(Date.now()), "CBDC", true)
    );

    transfer.fromTo(emission.government, users.accounts[0], BigInt(80));
    transfer.fromTo(users.accounts[0], users.accounts[1], BigInt(30));

    expect(emission.government.balance).to.be.equal(20n);
    expect(users.accounts[0].balance).to.be.equal(50n);
    expect(users.accounts[1].balance).to.be.equal(30n);
  });
});

describe("Transfer tokens gov -> user0 -x user1", () => {
  it("Should return error, not enough of money", () => {
    const account = new AccountBuilder();
    const users = new UsersNetwork();
    const emission = new EmissionCenter();
    const transfer = new TransferService();

    emission.add(BigInt(100));

    users.add(
      account.generate("Maxim", "Soloviev", BigInt(Date.now()), "CBDC", true)
    );
    users.add(
      account.generate("Nina", "Evleeva", BigInt(Date.now()), "CBDC", true)
    );

    transfer.fromTo(emission.government, users.accounts[0], BigInt(80));

    expect(() =>
      transfer.fromTo(users.accounts[0], users.accounts[1], BigInt(2000))
    ).to.throw("Not enough money");
  });
});

describe("Transfer tokens gov -x user0", () => {
  it("Should return error, the user is blocked", () => {
    const account = new AccountBuilder();
    const users = new UsersNetwork();
    const emission = new EmissionCenter();
    const transfer = new TransferService();

    emission.add(BigInt(100));

    users.add(
      account.generate("Maxim", "Soloviev", BigInt(Date.now()), "CBDC", false)
    );

    expect(() =>
      transfer.fromTo(emission.government, users.accounts[0], BigInt(80))
    ).to.throw("The user is banned");
  });
});
