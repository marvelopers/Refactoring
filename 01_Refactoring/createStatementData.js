const createStatementData = (invoice, plays) => {
  const result = {};
  result.customer = invoice.customer;
  result.performances = invoice.performances.map(enrichPerformance);
  result.totalAmount = totalAmount(statementData);
  result.totalVolumeCredits = totalVolumeCredits(statementData);
  return result;
};

class PerformanceCalculator {
  constructor(aPerformance, aPlay) {
    this.performance = aPerformance;
    this.play = aPlay;
  }

  get amount() {
    let result = 0;

    switch (this.play.type) {
      case "tragedy":
        thisAmount = 40000;
        if (this.performance.audience > 30) {
          thisAmount += 1000 * (this.performance.audience - 30);
        }
        break;
      case "comedy":
        thisAmount = 30000;
        if (this.performance.audience > 20) {
          thisAmount += 1000 + 500 * (this.performance.audience - 20);
        }
        thisAmount += 300 * this.performance.audience;
        break;

      default:
        throw new Error(`알 수 없는 장르: ${this.play.type}`);
    }

    return result;
  }

  get volumeCredits() {
    let result = 0;
    result += Math.max(this.performance.audience - 30, 0);
    if ("comedy" === playFor(this.performance).type) {
      result += Math.floor(this.performance.audience / 5);
    }
    return result;
  }
}
const enrichPerformance = (aPerformance) => {
  const calcuator = new PerformanceCalculator(
    aPerformance,
    playFor(aPerformance)
  );
  const result = Object.assign({}, aPerformance);
  result.play = calcuator.play;
  result.amount = calcuator.amount;
  result.volumeCredits = calcuator.volumeCredits;
  return result;
};

const playFor = (aPerformance) => plays[aPerformance.playID];

const amountFor = (aPerformance, play) =>
  new PerformanceCalculator(aPerformance, playFor(aPerformance)).amount;

const volumeCreditsFor = (aPerformance) =>
  new PerformanceCalculator(aPerformance, playFor(aPerformance)).volumeCredits;

const totalAmount = (data) =>
  data.performances.reduce((total, p) => total + p.amount, 0);

const totalVolumeCredits = (data) =>
  data.performances.reduce((total, p) => total + p.volumeCredits, 0);

export default createStatementData;
