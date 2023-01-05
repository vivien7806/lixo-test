import Employee from "./employee";
import Employees from "./employees";
import Vacation from "./vacation";

import * as express from "express";

class EmployeeApi {
  private app: express.Application;
  private employees = new Employees([]);

  constructor(private port = 3000) {
    this.app = express();
    this.app.use(express.json());
    this.declareEndpoints();
    this.app.listen(this.port, () =>
      console.log(`Employee API is listening on port ${this.port}`)
    );
  }

  private declareEndpoints() {
    // create an employee
    this.app.post("/employee", (request, response) => {
      let employee = new Employee(
        request.body.firstName,
        request.body.lastName
      );
      this.employees.addEmployee(employee);
      return response.status(201).send();
    });

    // get list of all employees
    this.app.get("/employee", (request, response) => {
      return response.status(200).json(this.employees);
    });

    // add vacation to an employee
    this.app.post("/employee/:id/vacation", (request, response) => {
      const employee = this.employees.getEmployee(request.params.id);
      if (!employee) return response.status(404).send();

      const vacation: Vacation = new Vacation(
        new Date(request.body.startDate),
        new Date(request.body.endDate),
        request.body.comment
      );

      employee.addVacation(vacation);

      return response.status(201).send();
    });

    // get an employee details
    this.app.get("/employee/:id", (request, response) => {
      const employee = this.employees.getEmployee(request.params.id);
      if (!employee) return response.status(404).send();
      return response.status(200).json(employee);
    });

    // return list of employees currently on vacations
    this.app.post("/currentlyoff", (request, response) => {
      const currentlyOff = this.employees.currentlyOff(
        new Date(request.body.startDate),
        new Date(request.body.endDate)
      );
      return response.status(200).json(currentlyOff);
    });
  }
}

new EmployeeApi();
