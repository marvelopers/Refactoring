type ReadingType = {
  customer: string;
  quantity: number;
  month: number;
  year: number;
};

const baseRate = (month: number, year: number) => {};

let reading = { customer: "ivan", quantity: 10, month: 5, year: 2017 };

class Reading {
  constructor(data: ReadingType) {
    this.customer = data.customer;
    this.quantity = data.quantity;
    this.month = data.month;
    this.year = data.year;
  }
  get customer() {
    return this.customer;
  }
  get quantity() {
    return this.quantity;
  }
  get month() {
    return this.month;
  }
  get year() {
    return this.year;
  }

  taxableCharge() {
    return Math.max(0, aReading.baseCharge - taxThreshold(aReading.year));
  }

  get baseCharge() {
    return baseRate(this.month, this.year) * this.quantity;
  }
}

const calculateBaseCharge = (aReading) =>
  baseRate(aReading.month, aReading.yaer);

const enrichReading = (original: unknown) => {
  const result = _.cloneDepp(original);
  result.baseCharge = calculateBaseCharge(result);
  result.taxableCharge = Math.max(
    0,
    aReading.baseCharge - taxThreshold(aReading.year)
  );
  return result;
};

const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const taxableCharge = aReading.taxableCharge;
