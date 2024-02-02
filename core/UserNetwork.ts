import { AccountBuilder } from "./AccountBuilder.js";
import { TransferService } from "./TransferService.js";
import { Imessage } from "../interfaces/Imessage.js";
import { IAccount } from "../interfaces/IAccount.js";

class UserNetwork {
  users: Array<IAccount>;

  constructor() {
    this.users = [];
  }

  addUserToNetwork(account: IAccount): Imessage {
    this.users.push(account);
    return { message: "user was added" };
  }
}

const network = new UserNetwork();
const transfer = new TransferService();
const account = new AccountBuilder();

network.addUserToNetwork(
  account.generateNewAccount("Maxim", "Soloviev", BigInt(Date.now()), "CBDC")
);
network.addUserToNetwork(
  account.generateNewAccount("Iana", "Soboleva", BigInt(Date.now()), "CBDC")
);

transfer.fromTo(network.users[0], network.users[1], BigInt(0));
