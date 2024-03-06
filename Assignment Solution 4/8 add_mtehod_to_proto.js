function Student(name){
  this.name=name; 
}
const student=new Student("Mithun");
Object.prototype.printDetails=function(){return `Hello, the student is ${this.name}`};
console.log(student.printDetails());