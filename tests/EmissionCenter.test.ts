import { expect } from "chai";
import { describe } from "mocha";
import { EmissionCenter } from "../src/EmissionCenter.js";

describe("Add balance to the government wallet", () => {
  it("Should return 1n amount", () => {
    const emission = new EmissionCenter();
    emission.add(BigInt(1));
    expect(emission.government.balance).to.be.eql(1n)
  });
});
describe("Remove balance from the government wallet", () => {
  it("Should return error", () => {
    expect(() => {
      const emission = new EmissionCenter();
      emission.remove(BigInt(1));
    }).to.throw("The balance less than amount");
  });
});
