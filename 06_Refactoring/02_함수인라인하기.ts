type Driver = {
  numberOfLateDeliveries: number;
};

const moreThanFiveLateDeliveries = (driver: Driver) =>
  driver.numberOfLateDeliveries > 5;

const getRating = (driver: Driver) =>
  driver.numberOfLateDeliveries > 5 ? 2 : 1;
