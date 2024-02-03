import { AccountBuilder } from "./AccountBuilder.js";
import { TransferService } from "./TransferService.js";
import { IMessage } from "../interfaces/IMessage.js";
import { IAccount } from "../interfaces/IAccount.js";

class UsersNetwork {
  list: Array<IAccount>;

  constructor() {
    this.list = [];
  }
  /**
   * @param account юзер аккаунт
   * @returns сообщение о результате
   */
  add(account: IAccount): IMessage {
    this.list.push(account);
    return { message: "user was added" };
  }
}

const users = new UsersNetwork();
const transfer = new TransferService();
const account = new AccountBuilder();

users.add(
  account.generate("Maxim", "Soloviev", BigInt(Date.now()), "CBDC")
);
users.add(
  account.generate("Iana", "Soboleva", BigInt(Date.now()), "CBDC")
);

transfer.fromTo(users.list[0], users.list[1], BigInt(0));
