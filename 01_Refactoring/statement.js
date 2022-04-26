import invoice from "./invoices.json";
import plays from "./plays.json";
import createStatementData from "./createStatementData";

const usd = (aNumber) =>
  new Intl.NumberFormat("es-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(aNumber / 100);

const renderHtml = (data) => {
  let result = `<h1>청구 내역 (고객명: ${data.customer})</h1>\n`;
  for (let perf of data.performances) {
    result += `<p>${perf.play.name}: ${usd(perf.amount)} (${
      perf.audience
    }석)</p>\n`;
  }

  result += `<p>총액: <em>${usd(data.totalAmount)}\n</em></p>\n`;
  result += `<p>적립 포인트: <em>${data.volumeCredits}</em>점</p>\n`;

  return result;
};

const statement = () => renderHtml(createStatementData(invoice, plays));

statement(invoice);
