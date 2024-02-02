import { Imessage } from "./Interfaces";
export class TransferService {
  constructor() {}

  public fromTo(from: any, to: any, amount: bigint): Imessage {
    if (from.balance >= amount) {
      from.balance -= amount;
      to.balance += amount;
    } else {
      throw new Error("Not enough of money");
    }

    return { message: "transfer was success" };
  }
}
