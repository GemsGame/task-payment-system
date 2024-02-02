/**
 * Интерфейс мастер аккаунта
 *
 * @prop iban
 * @prop баланс
 * @interface
 */

export interface IEmission {
  iban: string;
  balance: bigint;
}

export class Emission {
  government: { iban: string; balance: bigint };
  destraction: { iban: string; balance: bigint };

  constructor() {
    this.government = {
      iban: "BY04CBDC36029110100040000000",
      balance: BigInt(0),
    };

    this.destraction = {
      iban: "BY04CBDC00000000000000000000",
      balance: BigInt(0),
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
  public add(amount: bigint) {
    this.government.balance += amount;
  }
  /**
   * @param amount удалить нужное количеств руб
   */
  public remove(amount: bigint) {
    if (this.government.balance >= amount) {
      this.government.balance -= amount;
      this.destraction.balance += amount;
    } else {
      throw new Error("The balance less than amount");
    }
  }
}
