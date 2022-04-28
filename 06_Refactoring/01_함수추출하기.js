// 유효범위를 벗어나는 변수가 없을 때
function printOwing() {
  let outstanding = 0;

  printBanner();

  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  const today = Clock.today;
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );

  printDetail();

  function printBanner() {
    console.log("****************");
    console.log("*****고객채무*****");
    console.log("****************");
  }

  function printDetail() {
    console.log(`고객명: ${invoice.customer}`);
    console.log(`채무액: ${outstanding}`);
    console.log(`마감일: ${invoice.dueDate.toLocalDateString()}`);
  }
}
