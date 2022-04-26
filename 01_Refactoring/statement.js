import invoice from "./invoices.json";
import plays from "./plays.json";

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

const usd = (aNumber) =>
  new Intl.NumberFormat("es-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(aNumber / 100);

const totalVolumeCredits = (data) =>
  data.performances.reduce((total, p) => total + p.volumeCredits, 0);

const totalAmount = (data) =>
  data.performances.reduce((total, p) => total + p.amount, 0);

const renderPlainText = (data, plays) => {
  let result = `청구 내역 (고객명: ${data.customer})\n`;
  for (let perf of data.performances) {
    result += `${perf.play.name}: ${usd(perf.amount)} (${perf.audience}석)\n`;
  }

  result += `총액: ${usd(data.totalAmount)}\n`;
  result += `적립 포인트: ${data.volumeCredits}점\n`;

  return result;
};

const enrichPerformance = (aPerformance) => {
  const result = Object.assign({}, aPerformance);
  result.play = playFor(result);
  result.amount = amountFor(result);
  return result;
};

const statement = (invoice, plays) => {
  const statementData = {};
  statementData.customer = invoice.customer;
  statementData.performances = invoice.performances.map(enrichPerformance);
  statementData.totalAmount = totalAmount(statementData);
  statementData.totalVolumeCredits = totalVolumeCredits(statementData);
  return renderPlainText(statementData, plays);
};

statement(invoice);
