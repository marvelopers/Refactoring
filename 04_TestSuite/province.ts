class Province {
  constructor(doc) {
    this.name = doc.name;
    this.producers = [];
    this.totalProduction = 0;
    this.demand = doc.demand;
    this.price = doc.price;
    doc.producers.forEach((d) => this.addProducer(new Producer(this, d)));
  }

  addProducer(arg) {
    this.producers.push(arg);
    this.totalProduction += this.production;
  }

  get name() {
    return this.name;
  }
  get producers() {
    return this.producers.slice();
  }
  get totalProduction() {
    return this.totalProduction;
  }
  set totalProduction(arg) {
    this.totalProduction = arg;
  }
  get demand() {
    return this.demand;
  }
  set demand(arg) {
    this.demand = parseInt(arg);
  }
  get price() {
    return this.price;
  }
  set price(arg) {
    this.price = parseInt(arg);
  }
  get shortfall() {
    return this.demand - this.totalProduction;
  }
  get profit() {
    return this.demandValue - this.demandCost;
  }
  get demandValue() {
    return this.satisfiedDemand * this.price;
  }
  get satisfiedDemand() {
    return Math.min(this.demand, this.totalProduction);
  }
  get demandCost() {
    let remainingDemand = this.demand;
    let result = 0;
    this.producers
      .sort((a, b) => a.cost - b.cost)
      .forEach((p) => {
        const contribution = Math.min(remainingDemand, p.production);
        remainingDemand -= contribution;
        result += contribution * p.cost;
      });
    return result;
  }
}

class Producer {
  constructor(aProvince, data) {
    this.province = aProvince;
    this.cost = data.cost;
    this.name = data.name;
    this.production = data.production || 0;
  }

  get name() {
    return this.name;
  }
  get cost() {
    return this.cost;
  }
  set cost(arg) {
    this.cost = arg;
  }

  get production() {
    return this.production;
  }
  set production(amountStr) {
    const amount = parseInt(amountStr);
    const newProduction = Number.isNaN(amount) ? 0 : amount;
    this.province.totalProduction += newProduction - this.production;
    this.production = newProduction;
  }
}

const sampleProvinceData = () => {
  return {
    name: "Asia",
    producers: [
      { name: "Byzantium", cost: 10, production: 9 },
      { name: "Attalia", cost: 10, production: 9 },
      { name: "Sinope", cost: 10, production: 9 },
    ],
    demand: 30,
    price: 20,
  };
};
