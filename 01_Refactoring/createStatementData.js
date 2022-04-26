const createStatementData = (invoice, plays) => {
  const result = {};
  result.customer = invoice.customer;
  result.performances = invoice.performances.map(enrichPerformance);
  result.totalAmount = totalAmount(statementData);
  result.totalVolumeCredits = totalVolumeCredits(statementData);
  return result;
};

const enrichPerformance = (aPerformance) => {
  const result = Object.assign({}, aPerformance);
  result.play = playFor(result);
  result.amount = amountFor(result);
  return result;
};

const playFor = (aPerformance) => plays[aPerformance.playID];

const amountFor = (aPerformance, play) => {
  let result = 0;

  switch (amountFor(perf).type) {
    case "tragedy":
      thisAmount = 40000;
      if (aPerformance.audience > 30) {
        thisAmount += 1000 * (aPerformance.audience - 30);
      }
      break;
    case "comedy":
      thisAmount = 30000;
      if (aPerformance.audience > 20) {
        thisAmount += 1000 + 500 * (aPerformance.audience - 20);
      }
      thisAmount += 300 * aPerformance.audience;
      break;

    default:
      throw new Error(`알 수 없는 장르: ${amountFor(perf).type}`);
  }

  return result;
};

const volumeCreditsFor = (aPerformance) => {
  let result = 0;
  result += Math.max(aPerformance.audience - 30, 0);
  if ("comedy" === playFor(aPerformance).type) {
    result += Math.floor(aPerformance.audience / 5);
  }
  return result;
};

const totalAmount = (data) =>
  data.performances.reduce((total, p) => total + p.amount, 0);

const totalVolumeCredits = (data) =>
  data.performances.reduce((total, p) => total + p.volumeCredits, 0);

export default createStatementData;
