
/**
 * Интерфейс аккаунтов центра эмиссии
 *
 * @prop iban
 * @prop баланс
 * @prop активный или нет
 * @interface
 */

export interface IEmissionAccount {
  iban: string;
  balance: bigint;
  active: boolean;
}
