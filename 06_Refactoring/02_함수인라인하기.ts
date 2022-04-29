type Driver = {
  numberOfLateDeliveries: number;
};

type Customer = {
  name: string;
  location: string;
};

const moreThanFiveLateDeliveries = (driver: Driver) =>
  driver.numberOfLateDeliveries > 5;

const getRating = (driver: Driver) =>
  driver.numberOfLateDeliveries > 5 ? 2 : 1;

const reportLines = (aCustomer: Customer) => {
  const lines = [];
  // getherCustomerData(lines, aCustomer.name);
  lines.push(["name", aCustomer.name]);
  lines.push(["location", aCustomer.location]);
  return lines;
};
