import { IMessage } from "../interfaces/IMessage.js";
import { IAccount } from "../interfaces/IAccount.js";

export class UsersNetwork {
  public accounts: Array<IAccount>;

  constructor() {
    this.accounts = [];
  }
  /**
   * @param account юзер аккаунт
   * @returns сообщение о результате
   */
  add(account: IAccount): IMessage {
    this.accounts.push(account);
    return { message: "user was added" };
  }
}
