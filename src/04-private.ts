export class MyDate {
    year: number;
    month: number;
    private day: number;
  
    constructor(year: number, month: number, day: number) {
      this.year = year;
      this.month = month;
      this.day = day;
    }
  
    printFormat(): string {
      const day = this.addPadding(this.day);//INGRESAR A LOS METODOS
      const month = this.addPadding(this.month);
      return `${day}/${month}/${this.year}`;
    }
  
    private addPadding(value: number) {//PUED0 PONER PRIVATE A LOS METODOS
      if (value < 10) {
        return `0${value}`;
      }
      return `${value}`;
    }
  
    add(amount: number, type: 'days' | 'months' | 'years') {
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
  
    getDay() {
      return this.day;
    }
  }
  
  const myDate = new MyDate(1993, 7, 10);
  console.log(myDate.printFormat());
  console.log(myDate.getDay());

  //PRIVATE= NO SE PUEDE MODIFICAR LA VARIABLE  O LAS PROPIEDADES
  //PRIVATE = ENCAPSULAR Y PROTEGER Y TIENE ACCESO INTERNO Y DESDDE AFUERA NO PUEDE EJECUTAR METODOS O MODIF UNA VAR