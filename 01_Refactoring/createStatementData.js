const createStatementData = (invoice, plays) => {
  const result = {};
  result.customer = invoice.customer;
  result.performances = invoice.performances.map(enrichPerformance);
  result.totalAmount = totalAmount(statementData);
  result.totalVolumeCredits = totalVolumeCredits(statementData);
  return result;
};

const enrichPerformance = (aPerformance) => {
  const calcuator = createPerformanceCalculator(
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

const totalAmount = (data) =>
  data.performances.reduce((total, p) => total + p.amount, 0);

const totalVolumeCredits = (data) =>
  data.performances.reduce((total, p) => total + p.volumeCredits, 0);

const createPerformanceCalculator = (aPerformance, aPlay) => {
  switch (aPlay.type) {
    case "tragedy":
      return new TragedyCalculator(aPerformance, aPlay);
    case "comedy":
      return new ComedyCalculator(aPerformance, aPlay);
    default:
      throw new Error(`알 수 없는 장르: ${aPlay.type}`);
  }
};

class PerformanceCalculator {
  constructor(aPerformance, aPlay) {
    this.performance = aPerformance;
    this.play = aPlay;
  }

  get amount() {
    throw new Error("서브클래스에서 처리하도록 설계되었습니다.");
  }

  get volumeCredits() {
    return Math.max(this.performance.audience - 30, 0);
  }
}

class TragedyCalculator extends PerformanceCalculator {
  get amount() {
    let result = 40000;
    if (this.performance.audience > 30) {
      result += 1000 + 500 * (this.performance.audience - 20);
    }
    return result;
  }
}
class ComedyCalculator extends PerformanceCalculator {
  get amount() {
    let result = 30000;
    if (this.performance.audience > 30) {
      result += 1000 * (this.performance.audience - 30);
    }
    result += 300 * this.performance.audience;
    return result;
  }

  get volumeCredits() {
    return super.volumeCredits + Math.floor(this.performance.audience / 5);
  }
}
export default createStatementData;
