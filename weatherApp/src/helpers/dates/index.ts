class DateHelper {
  monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  private today: Date;
  constructor(today: Date) {
    this.today = today;
  }

  getToday() {
    return `${this.dayReadable(
      this.today.getDay(),
    )}. ${this.today.getDate()}. ${this.monthNames[this.today.getMonth()]}`;
  }

  toDateString(date: Date) {
    return `${this.dayReadable(date.getDay())}. ${date.getDate()}. ${
      this.monthNames[this.today.getMonth()]
    }`;
  }

  private dayReadable(dayNo: number): DayReadable {
    const dayMap = {
      0: "Mon",
      1: "Tues",
      2: "Wed",
      3: "Thurs",
      4: "Fri",
      5: "Sat",
      6: "Sun",
    };
    return dayMap[dayNo as keyof typeof dayMap] as DayReadable;
  }
}

type DayReadable = "Mon" | "Tues" | "Wed" | "Thurs" | "Fri" | "Sat" | "Sun";

export const dateHelper = new DateHelper(new Date());
