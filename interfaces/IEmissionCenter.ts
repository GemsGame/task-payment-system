
/**
 * Интерфейс мастер аккаунта
 *
 * @prop iban
 * @prop баланс
 * @prop активный или нет
 * @interface
 */

export interface IEmissionCenter {
  iban: string;
  balance: bigint;
  active: boolean;
}
