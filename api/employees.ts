import Employee from "./employee";

export default class Employees {
  employees: Employee[];

  constructor(employees: Employee[]) {
    this.employees = employees;
  }
  getEmployee(uuid: string) {
    return this.employees.find((e) => e.uuid === uuid);
  }
  addEmployee(employee: Employee) {
    this.employees.push(employee);
  }
  currentlyOff(startDate: Date, endDate: Date): Employee[] {
    let employeesOff: Employee[] = [];
    for (let employee of this.employees) {
      for (let vacation of employee.vacations) {
        if (
          (startDate >= vacation.startDate && startDate <= vacation.endDate) ||
          (endDate >= vacation.startDate && endDate <= vacation.endDate)
        ) {
          employeesOff.push(employee);
          break;
        }
      }
    }
    return employeesOff;
  }
}
