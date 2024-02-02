
export interface Imessage {
  message: string;
}

export interface IEmissionCenter {
  iban: string;
  balance: bigint;
  active: boolean;
}

export interface IAccount extends IEmissionCenter {
  info: {
    fistName: string;
    lastName: string;
    birthday: bigint;
  };
}
