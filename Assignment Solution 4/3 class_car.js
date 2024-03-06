class Car{
  year;
  company;
  model;
  constructor(y,c,m){
    this.year=y;
    this.company=c;
    this.model=m;
  }
  getDescription(){
    return `This is a ${this.year} ${this.company} ${this.model}.`;
  }
};
const myCar=new Car(2022,"Skoda","Rapid");
console.log(myCar.getDescription());
