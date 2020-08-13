class Employee{
    constructor(name, salary){
        this.name = name;
        this.salary = salary;
    }

    responsibilities(){}

    work(){
        return `${this.name} executes ${this.responsibilities()}`
    }

    getPaid(){
        return `${this.name} has salary: ${this.salary}`
    }
}

class Developer extends Employee{
    constructor(name, salary){
        super(name, salary);
    }

    responsibilities(){
        return 'creating programms process'
    }
}

class Tester extends Employee{
    constructor(name, salary){
        super(name, salary);
    }

    responsibilities(){
        return 'executes testing process'
    }
}

const dev = new Developer('Dima', 15000);
console.log(dev.getPaid());
console.log(dev.work());

const tester = new Tester('Oleskandr', 10000);
console.log(tester.getPaid());
console.log(tester.work());