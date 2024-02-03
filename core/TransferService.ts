import { IMessage } from "../interfaces/IMessage";
import { IAccount } from "../interfaces/IAccount";

/**
 * Тип, представляющий функцию с перегруженными сигнатурами для перевода средств.
 */
type FromTo = {
  /**
   * Перегруженная сигнатура функции с отдельными параметрами.
   * @param from - Аккаунт отправителя.
   * @param to - Аккаунт получателя.
   * @param amount - Сумма для перевода.
   * @returns Результат операции.
   */
  (from: IAccount, to: IAccount, amount: bigint): IMessage;
  /**
   * Перегруженная сигнатура функции с объектом данных.
   * @param data - Объект с данными для перевода.
   * @param data.f - Аккаунт отправителя.
   * @param data.t - Аккаунт получателя.
   * @param data.a - Сумма для перевода.
   * @returns Результат операции.
   */
  (data: { f: IAccount; t: IAccount; a: bigint }): IMessage;
};

export class TransferService {
  /**
   * Метод для перевода средств между аккаунтами с использованием функции FromTo.
   * @param fromOrData - Информация об отправителе или объект данных для перевода.
   * @param to - Аккаунт получателя.
   * @param amount - Сумма для перевода.
   * @returns Результат операции.
   */
  public fromTo: FromTo = (
    fromOrData?: IAccount | { f: IAccount; t: IAccount; a: bigint },
    to?: IAccount,
    amount?: bigint
  ): IMessage => {
    if ("f" in fromOrData && "t" in fromOrData && "a" in fromOrData) {
      if (fromOrData.f.balance >= fromOrData.a) {
        fromOrData.f.balance -= fromOrData.a;
        fromOrData.t.balance += fromOrData.a;
        return { message: "Transfer was successful" };
      } else {
        throw new Error("Not enough money");
      }
    } else {
      if (fromOrData && to && amount) {
        if (fromOrData.balance >= amount) {
          fromOrData.balance -= amount;
          to.balance += amount;
          return { message: "Transfer was successful" };
        } else {
          throw new Error("Not enough money");
        }
      } else {
        throw new Error("Invalid parameters");
      }
    }
  };
}