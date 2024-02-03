import { IMessage } from "../interfaces/IMessage";
import { IAccount } from "../interfaces/IAccount";
import { IEmissionCenter } from "./IEmissionCenter";
/**
 * Тип, представляющий функцию с перегруженными сигнатурами для перевода средств.
 */
export type FromTo = {
  /**
   * Перегруженная сигнатура функции с отдельными параметрами.
   * @param from - Аккаунт отправителя.
   * @param to - Аккаунт получателя.
   * @param amount - Сумма для перевода.
   * @returns Результат операции.
   */
  (from: IAccount, to: IAccount, amount: bigint): IMessage;
  (from: IEmissionCenter, to: IAccount, amount: bigint): IMessage;
  /**
   * Перегруженная сигнатура функции с объектом данных.
   * @param data - Объект с данными для перевода.
   * @param data.f - Аккаунт отправителя.
   * @param data.t - Аккаунт получателя.
   * @param data.a - Сумма для перевода.
   * @returns Результат операции.
   */
  (data: { f: IAccount; t: IAccount; a: bigint }): IMessage;
  (data: { f: IEmissionCenter; t: IAccount; a: bigint }): IMessage;
};
