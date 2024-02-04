import { IEmissionAccount } from "./IEmissionAccount";

/**
 * Интерфейс юзер аккаунта
 *
 * @prop info информация о пользователе
 * @interface
 */

export interface IAccount extends IEmissionAccount {
  info: {
    fistName: string;
    lastName: string;
    birthday: bigint;
  };
}
