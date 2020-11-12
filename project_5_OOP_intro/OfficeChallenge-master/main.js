class Document {
    constructor(EmployeeName) {
        this.EmployeeName = EmployeeName;
    }
}

class Employee {
    constructor(name) {
        this.name = name;
    }
    work(office){
        for (let i = 0; i < 10; i++) {
            const document = new Document(this.name);
            office.documents.push(document);
        }
    }
}

class Manager {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }
    hireEmployee(name) {
        const employee = new Employee(name);
        this.employees.push(employee);
    }
    askEmployeesToWork(office) {
        this.employees.forEach(e => e.work(office));
    }
}

class Cleaner {
    constructor(name) {
        this.name = name;
    }
    clean() {
        console.log('Clean');
    }
}

class Office {
    constructor() {
        this.documents = [];
        this.managers = [];
        this.cleaners = [];
    }
    hireCleaner(name) {
        const cleaner = new Cleaner(name);
        this.cleaners.push(cleaner);
    }
    hireManager(name) {
        const manager = new Manager(name);
        this.managers.push(manager);
    }
    startWorkDay() {
        const office = this;
        this.managers.forEach(m => m.askEmployeesToWork(office));
        this.cleaners.forEach(c => c.clean());
    }
}

