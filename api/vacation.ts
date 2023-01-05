export default class Vacation {
  startDate: Date;
  endDate: Date;
  comment: string;

  // Normal signature with defaults
  constructor(startDate: Date, endDate: Date, comment: string) {
    this.startDate = startDate;
    this.endDate = endDate;
    this.comment = comment;
  }

  toString() {
    return `from ${this.startDate} to ${this.endDate} for ${this.comment}`;
  }
}
