class Person{
  name;
  age;
  constructor(n,a) {
    if(n===undefined){
      this.name="Unknown"
    }else{
    this.name=n;}
    if(a===undefined){
    this.age=0;}else{
      this.age=a;
    }
    
  }
  getDetails(){
    console.log("Name:",this.name);
    console.log("Age:",this.age);
  }
}
const person1=new Person("Mithun",20);
person1.getDetails();
const person2=new Person();
person2.getDetails();