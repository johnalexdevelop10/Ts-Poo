export class MyDate {
    year: number;
    month: number;
    day: number;
  
    constructor(year: number, month: number, day: number) {
      this.year = year;
      this.month = month;
      this.day = day;
    }
  
    printFormat(): string {//METODOS
      return `${this.day}/${this.month}/${this.year}`;//aqui imprime con el ``
    }
  
    add(amount: number, type: 'days' | 'months' | 'years') {//CANTIDADES
      if (type === 'days') {
        this.day += amount;
      }
      if (type === 'months') {
        this.month += amount;
      }
      if (type === 'years') {
        this.year += amount;
      }
    }
  }
  
  const myDate = new MyDate(1993, 7, 9);
  console.log(myDate.printFormat());
  myDate.add(3, 'days');
  console.log(myDate.printFormat());
  myDate.add(1, 'months');
  console.log(myDate.printFormat());
  console.log(myDate.day);
  console.log(myDate.month);
  console.log(myDate.year);