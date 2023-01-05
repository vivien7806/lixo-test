import Vacation from "./vacation";
import { randomUUID } from "crypto";

export default class Employee {
  uuid: string;
  firstName: string;
  lastName: string;
  vacations: Vacation[];

  // Normal signature with defaults
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.uuid = randomUUID();
    this.vacations = [];
  }
  addVacation(vacation: Vacation) {
    this.vacations.push(vacation);
  }
}
