// function User(firstName, lastName, sex, age) {
//     this.name = {
//         first: firstName,
//         last: lastName,
//         }
//     this.sex = sex;
//     this.age = age;
// }
// const anton = new User("Anton", "Sui", "male", 22);
// console.log(anton);

class Employee {

    constructor(options){
        this.name = options.name;
        this.age = options.age;
        this.salary = options.salary;
    }
    voice() {
        console.log("I am " + this.age);
    }
}

class Programmer extends Employee {

        constructor(){
            super()
            this.lang = ["Pythot", "Java", "JavaScript"]
        }
}
const employee = new Programmer({
        name: "John",
        age: 32,
        salary: 1000,
    
})
console.log(employee.lang);
employee.voice()