import { IEmissionCenter } from "./IEmissionCenter";

/**
 * Интерфейс юзер аккаунта
 *
 * @prop info информация о пользователе
 * @interface
 */

export interface IAccount extends IEmissionCenter {
  info: {
    fistName: string;
    lastName: string;
    birthday: bigint;
  };
}
