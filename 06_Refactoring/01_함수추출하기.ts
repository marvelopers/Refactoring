type Invoice = {
  orders: { amount: number }[];
  customer: string;
  dueDate: Date;
};

const printBanner = () => {
  console.log("****************");
  console.log("*****고객채무*****");
  console.log("****************");
};

const printDetail = (invoice: Invoice, outstanding: number) => {
  console.log(`고객명: ${invoice.customer}`);
  console.log(`채무액: ${outstanding}`);
  console.log(`마감일: ${invoice.dueDate.toLocaleDateString()}`);
};

const recordDueDate = (invoice: Invoice) => {
  const today = Clock.today;
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );
};

const calculateOutStanding = (invoice: Invoice) => {
  let result = 0;
  for (const o of invoice.orders) {
    result += o.amount;
  }
  return result;
};

function printOwing(invoice: Invoice) {
  printBanner();
  let outstanding = calculateOutStanding(invoice);
  recordDueDate(invoice);
  printDetail(invoice, outstanding);
}
