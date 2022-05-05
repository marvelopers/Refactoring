type ReadingType = {
  customer: string;
  quantity: number;
  month: number;
  year: number;
};

const baseRate = (month: number, year: number) => {};
const base = baseRate(aReading.month, aReading.year) * aReading.quantity;
const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));

const calculateBaseCharge = (aReading: ReadingType) =>
 

let reading = { customer: "ivan", quantity: 10, month: 5, year: 2017 };
const rawReading = acquireReading();
const aReading = new Reading(rawReading);

const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;
const baseChargeAmount = calculateBaseCharge(aReading);

class Reading {
  base() {}
  taxableCharge() {}

  get calculateBaseCharge() {
    baseRate(aReading.month, aReading.year) * aReading.quantity;
  }
}
