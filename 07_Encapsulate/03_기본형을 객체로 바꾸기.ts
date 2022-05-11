class Priority {
  constructor(value) {
    if (value instanceof Priority) return value;
    if (Priority.legalValues().includes(value)) this.value = value;
    else throw new Error(`${value} is invalid for Priority`);
  }
  toString() {
    return this.value;
  }
  get index() {
    return Priority.legalValues().findIndex((s) => s === this.value);
  }

  static legalValues() {
    return ["low", "normal", "high", "rush"];
  }

  equals(other) {
    return this.index === other.index;
  }
  higherThan(other) {
    return this.index > other.index;
  }
  lowerThan(other) {
    return this.index < other.index;
  }
}

class Order {
  constructor(data) {
    this.priority = data.priority;
  }

  get priorityString() {
    return this.priority.toString();
  }
  set priority(aString) {
    this.priority = new Priority(aString);
  }
}

function cla() {
  highPriorityCount = orders.filter((o) =>
    o.priority.higherThan(new Priority("normal"))
  ).length;
}
