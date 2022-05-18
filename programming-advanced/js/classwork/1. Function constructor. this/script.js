// const user = {
//   name: {
//     first: "Chester",
//     last: "Miller",
//   },
//   sex: "male",
//   age: 34,
//   getFullName: function () {
//     return `${user.name.first} ${user.name.last}`;
//   },
//   isAdult: function () {},
// };
// const user = {
//   name: {
//     first: "Chester",
//     last: "Miller",
//   },
//   sex: "male",
//   age: 17,
//   getFullName: function () {
//     return `${this.name.first} ${this.name.last}`;
//   },
//   isAdult: function () {
//     if (this.age >= 18) {
//       return true;
//     } else return false;
//   },
// };
// console.log(user.getFullName());
// console.log(user.isAdult());
function User(firstname, lastname, sex, age) {
  this.name = {
    first: firstname,
    last: lastname,
  };
  this.age = age;
  this.sex = sex;
}
User.prototype.isAdult = function () {
  return this.age >= 18;
};
const me = new User("Anton", "Sui", "male", 22);
console.log(me);
