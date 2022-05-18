class Employee {
    constructor(options){
        this.name = options.name;
        this.age = options.age;
        this.salary = options.salary;
    }
    get nameInfo() {
        return this.name;
    }
    set nameInfo(newName) {
        return this.name = newName;
    }
    get salaryInfo() {
        return this.salary
    }
    set salaryInfo(newSalary) {
        return this.salary = newSalary;
    }
}

class Programmer extends Employee {

    constructor(options){
        super(options)
        this.lang = options.lang;
    }

    get salaryInfo() {
        return this.salary * 3
    }
    set salaryInfo(newSalary) {
        return this.salary = newSalary;
    }
}



const mariana = new Programmer({name: "Mariana", age:"21", salary:"1000", lang:"html"})
const lipen = new Programmer({name: "Lipen", age:"26", salary:"1200", lang:"html, css"})
const yavor = new Programmer({name: "Yavor", age:"27", salary:"1500", lang:"html, css, js"})

console.log(mariana);
console.log(lipen);
console.log(yavor);
console.log(lipen.name);
console.log(yavor.age);
console.log(lipen.salary);