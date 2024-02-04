
import { IEmissionAccount } from "../interfaces/IEmissionAccount";
import { IMessage } from "../interfaces/IMessage";

export class EmissionCenter {
  public government: IEmissionAccount;
  public destraction: IEmissionAccount;

  constructor() {
    this.government = {
      iban: "BY04CBDC36029110100040000000",
      balance: BigInt(0),
      active: true,
    };

    this.destraction = {
      iban: "BY04CBDC00000000000000000000",
      balance: BigInt(0),
      active: true,
    };
  }
  /**
   * @param amount добавить нужное количество руб
   * @returns message
   */
  public add(amount: bigint): IMessage {
    this.government.balance += amount;
    return { message: "balance increased" };
  }
  /**
   * @param amount удалить нужное количеств руб
   */
  public remove(amount: bigint): IMessage {
    if (this.government.balance >= amount) {
      this.government.balance -= amount;
      this.destraction.balance += amount;

      return { message: "remove success" };
    } else {
      throw new Error("The balance less than amount");
    }
  }

  get accounts() {
    return [this.government, this.destraction];
  }
}
