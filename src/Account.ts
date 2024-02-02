/**
 * Интерфейс аккаунта
 *
 * @prop iban 
 * @prop balance баланс
 * @prop info информация о пользователе
 * @interface
 */

export interface IAccount {
  iban: string;
  balance: BigInt;
  info: {
    fistName: string;
    lastName: string;
    birthday: BigInt;
  };
}

export class Account {
  constructor() {}
  /**
   * Создает новый аккаунт пользователя по имени, фамилии, и дню рождения
   *
   * @param fistName имя пользователя
   * @param lastName фамилия пользователя
   * @param birthday дата рождения
   * @returns возвращает новый аккаунт
   * @public
   */
  public generateNewAccount(
    fistName: string,
    lastName: string,
    birthday: BigInt,
    bankCode: string
  ): IAccount {
    return {
      iban: this.generateIban(bankCode),
      balance: BigInt(0),
      info: {
        fistName,
        lastName,
        birthday,
      },
    };
  }

  /**
   * Простая генерация IBAN
   * @param bankCode
   * @returns возвращает строку IBAN
   * @private
   * @alpha
   */

  private generateIban(bankCode: string): string {
    if (bankCode.length !== 4) {
      throw new Error("Invalid input data");
    }

    const countryCode = "BY";
    const checkDigits = "04";
    const iban =
      countryCode + checkDigits + bankCode + this.generateAccountNumber();

    return iban;
  }

  /**
   * Простая генерация Account number
   * @returns возвращает  Account number
   * @private
   * @experimental
   */

  private generateAccountNumber(): string {
    let number = [];

    for (let i = 0; i < 13; i++) {
      number.push(Math.floor(Math.random() * 9));
    }
    return number.join("");
  }
}