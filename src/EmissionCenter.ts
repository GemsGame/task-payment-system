/**
 * Интерфейс мастер аккаунта
 *
 * @prop iban
 * @prop баланс
 * @prop активный или нет
 * @interface
 */

import { Imessage } from "./Interfaces";

export interface IEmissionCenter {
  iban: string;
  balance: bigint;
  active: boolean;
}

export class EmissionCenter {
  public government: IEmissionCenter;
  public destraction: IEmissionCenter;

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
   * @returns адрес эмиссии
   */
  get govAddress() {
    return this.government;
  }
  /**
   * @returns адрес уничтожения
   */
  get destAddress() {
    return this.destraction;
  }
  /**
   * @param amount добавить нужное количество руб
   */
  public add(amount: bigint): Imessage {
    this.government.balance += amount;
    return { message: "balance increased" };
  }
  /**
   * @param amount удалить нужное количеств руб
   */
  public remove(amount: bigint): Imessage {
    if (this.government.balance >= amount) {
      this.government.balance -= amount;
      this.destraction.balance += amount;

      return { message: "remove success" };
    } else {
      throw new Error("The balance less than amount");
    }
  }
}
