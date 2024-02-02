import { AccountBuilder, IAccount } from "./AccountBuilder.js";
import { EmissionCenter } from "./EmissionCenter.js";
import { Imessage, TransferService } from "./TransferService.js";

class MainNetwork {
  emission: EmissionCenter;
  transfer: TransferService;
  account: AccountBuilder;
  users: Array<IAccount>;

  constructor() {
    this.emission = new EmissionCenter();
    this.transfer = new TransferService();
    this.account = new AccountBuilder();
    this.users = [];
  }

  addUserToNetwork(
    fistName: string,
    lastName: string,
    birthday: bigint,
    bankCode: string
  ): Imessage {
    this.users.push(
      this.account.generateNewAccount(fistName, lastName, birthday, bankCode)
    );
    return { message: "user was added" };
  }
}

const network = new MainNetwork();

network.addUserToNetwork("Maxim", "Soloviev", BigInt(Date.now()), "CBDC");
network.addUserToNetwork("Iana", "Soboleva", BigInt(Date.now()), "CBDC");

network.transfer.fromTo(network.users[0], network.users[1], BigInt(0));
