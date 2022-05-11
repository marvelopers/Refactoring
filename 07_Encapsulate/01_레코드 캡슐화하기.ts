class Origanization {
  constructor(data) {
    this.name = data.name;
    this.country = data.country;
  }

  get name() {
    return this.name;
  }
  get name(arg) {
    this.name = arg;
  }
  get country() {
    return this.country;
  }
  get country(arg) {
    this.country = arg;
  }
}

const organization = new Origanization({
  name: "애크미 구스베리",
  country: "GB",
});

const getOrganization = () => organization;
