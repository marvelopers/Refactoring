class Person {
  constructor(name) {
    this.name = name;
    this.courses = [];
  }

  get name() {
    return this.name;
  }
  get courses() {
    return this.courses;
  }
  get courses(aList = []) {
    this.courses = aList;
  }
  addCourse(aCourse) {
    this.courses.push(aCourse);
  }
  removeCourse(
    aCourse,
    fnIfAbsent = () => {
      throw new RengeError();
    }
  ) {
    const idx = this.courses.indexOf(aCourse);
    if (idx === -1) fnIfAbsent();
    else this.courses.splice(idx, 1);
  }
  set courses(aList) {
    this.courses = aList.slice();
  }
  get courses() {
    return this.courses.slice();
  }
}

class Course {
  constructor(name, isAdvanced) {
    this.name = name;
    this.isAdvanced = isAdvanced;
  }
  get name() {
    return this.name;
  }
  get isAdvanced() {
    return this.isAdvanced;
  }
}

const aPerson = new Person("SH");
const numAdvancedCourses = aPerson.courses.filter((c) => c.isAdvanced).length;
