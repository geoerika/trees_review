class Employee {
  constructor(name, title, salary) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.boss = null;
    this.subordinates = [];
  }

  addSubordinate(subordinate) {
    this.subordinates.push(subordinate);
    subordinate.boss = this;
  }

  employeesThatMakeOver(amount) {

    let employees = []; // 1

    if (this.salary > amount) {
      employees.push(this); // 2
    }

    for (const subordinate of this.subordinates) {
      const subordinatesThatMakeOver = subordinate.employeesThatMakeOver(amount); // 3
      employees = employees.concat(subordinatesThatMakeOver);
    }

    return employees;
  }

  get totalEmployees() {

    let totalEmployees = 0; // 1

    // Use depth first traversal to calculate the total employees

    if (this) {
      totalEmployees = 1;
    }

    for (const subordinate of this.subordinates) {
      const totalEmployees1 = subordinate.totalEmployees;
      totalEmployees = totalEmployees + 1;
   }

    return totalEmployees;

  }
}

const ada = new Employee("Ada", "CEO", 3000000.00);
const craig    = new Employee("Craig", "VP Software", 1000000);
const arvinder = new Employee("Arvinder", "Chief Design Officer", 1000000);
const angela   = new Employee("Angela", "VP Retail", 1000000);
const phil     = new Employee("Phil", "VP Marketing", 1000000);
const ali = new Employee('Ali');
const simone = new Employee('Simone');
ada.addSubordinate(craig);
ada.addSubordinate(arvinder);
ada.addSubordinate(angela);
ada.addSubordinate(phil);
craig.addSubordinate(ali);
craig.addSubordinate(simone);

// console.log(ada.employeesThatMakeOver(418401));
console.log(craig.totalEmployees);

