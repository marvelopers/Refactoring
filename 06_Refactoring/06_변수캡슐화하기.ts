type Owner = {
  firstName: string;
  lastName: string;
};

// let defaultOwner = {firstName: 'Martin', lastName: 'Fowler'}
let defaultOwnerData = { firstName: "Martin", lastName: "Fowler" };

// export const getDefaultOwner = () => defaultOwnerData;
// export const defaultOwner = () => defaultOwnerData;
// export const defaultOwner = () => Object.assign({}, defaultOwnerData);
export const defaultOwner = () => new Person(defaultOwnerData);
export const setDefaultOwner = (arg: Owner) => (defaultOwnerData = arg);

class Person {
  constructor(data: Owner) {
    this.lastName = data.lastName;
    this.firstName = data.firstName;
  }

  get lastName() {
    return this.lastName;
  }
  get firstName() {
    return this.firstName;
  }
}
