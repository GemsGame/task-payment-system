import { IMessage } from "../interfaces/IMessage";
import { IAccount } from "../interfaces/IAccount";
import { FromTo } from "../interfaces/FromTo";
import { IEmissionCenter } from "../interfaces/IEmissionCenter";
export class TransferService {
  /**
   * Метод для перевода средств между аккаунтами с использованием функции FromTo.
   * @param fromOrData - Информация об отправителе или объект данных для перевода.
   * @param to - Аккаунт получателя.
   * @param amount - Сумма для перевода.
   * @returns Результат операции.
   */
  public fromTo: FromTo = (
    fromOrData?:
      | IAccount
      | IEmissionCenter
      | { f: IAccount | IEmissionCenter; t: IAccount; a: bigint },
    to?: IAccount,
    amount?: bigint
  ): IMessage => {
    if ("f" in fromOrData && "t" in fromOrData && "a" in fromOrData) {
      if (fromOrData.f.balance < fromOrData.a) {
        throw new Error("Not enough money");
      }
      if (!fromOrData.t.active) {
        throw new Error("The user is banned");
      }

      fromOrData.f.balance -= fromOrData.a;
      fromOrData.t.balance += fromOrData.a;

      return { message: "Transfer was successful" };
      
    } else {
      if (fromOrData && to && amount) {
        if (fromOrData.balance < amount) {
          throw new Error("Not enough money");
        }
        if (!to.active) {
          throw new Error("The user is banned");
        }

        fromOrData.balance -= amount;
        to.balance += amount;
        return { message: "Transfer was successful" };
      } else {
        throw new Error("Invalid parameters");
      }
    }
  };
}
