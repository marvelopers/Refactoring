// const circum = (radius: number) => radius * 2 * Math.PI;
// 원의 둘레 : circumference
const circumference = (radius: number) => radius * 2 * Math.PI;

type CustomerInfo = {
  address: {
    state: string;
  };
};

// const inNewEngland = (aCustomer: CustomerInfo) =>
//   ["MA", "CT", "ME", "VT", "NH", "RI"].includes(aCustomer.address.state);

const inNewEngland = (stateCode: string) =>
  ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
// inNewEngland(aCustomer.address.state)
