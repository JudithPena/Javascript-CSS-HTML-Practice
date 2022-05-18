class Person {
  constructor(firstName, lastName, group) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.group = group;
  }

  makeCoffee() {
    console.log(`${this.firstName} is making black coffee`);
  }
  useWifi() {
    console.log(`${this.firstName} is connected to wifi`);
  }
}

class Student extends Person {
  constructor(id, firstName, lastName, group) {
    super(firstName, lastName, group);
    this.id = id;
  }
  attendLessons() {
    console.log(`${this.firstName} is attending lessons`);
  }
}

class Teacher extends Person {
  constructor(firstName, lastName, group) {
    super(firstName, lastName, group);
  }
  makeCoffee() {
    console.log(`${this.firstName} is making latte`);
  }
}

class Mentor extends Teacher {
  constructor(isOnline, firstName, lastName, group) {
    super(firstName, lastName, group);
    this.isOnline = isOnline;
  }
  estimateHomework() {
    console.log(`${this.firstName} is estimating homework`);
  }
}

const maria = new Student(5434, "Maria", "Stee", "fe2");
console.log(maria);
maria.makeCoffee();
maria.useWifi();
maria.attendLessons();

const rostyslav = new Teacher("Rostyslav", "Svid", "fe2");
console.log(rostyslav);
rostyslav.makeCoffee();
rostyslav.useWifi();

const katya = new Mentor(true, "Katya", "Dan", "fe2");
katya.estimateHomework();
// rostyslav.attendLessons()

console.log("----");
console.log(rostyslav.__proto__);
