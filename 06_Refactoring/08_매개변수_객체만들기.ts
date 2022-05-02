// const amountInvoiced = (aDataRange) => {};
// const amountRecived = (startDate, endDate) => {};
// const amountOverdue = (startDate, endDate) => {};

const amountInvoiced = (aDataRange) => {};
const amountRecived = (aDataRange) => {};
const amountOverdue = (aDataRange) => {};

type Station = {
  name: string;
  readings: { temp: number; time: string }[];
};

type Ranges = {
  min: number;
  max: number;
};

const station = {
  name: "ZB1",
  readings: [
    { temp: 47, time: "2016-11-10 09:10" },
    { temp: 53, time: "2016-11-10 09:20" },
    { temp: 58, time: "2016-11-10 09:30" },
    { temp: 53, time: "2016-11-10 09:40" },
    { temp: 51, time: "2016-11-10 09:50" },
  ],
};

class NumberRange {
  constructor(min: number, max: number) {
    this.data = { min: min, max: max };
  }

  get min() {
    return this.data.min;
  }
  get max() {
    return this.data.max;
  }
}

// const readingsOutsideRange = (station: Station, min: number, max: number) =>
//   station.readings.filter(
//     (reading) => reading.temp < min || reading.temp > max
//   );

const range = new NumberRange(
  operatingPlan.temperatureFloor,
  operatingPlan.temperatureCeiling
);

const readingsOutsideRange = (station: Station, range: Ranges) =>
  station.readings.filter(
    (reading) => reading.temp < range.min || reading.temp > range.max
  );

alert = readingsOutsideRange(station, range);
