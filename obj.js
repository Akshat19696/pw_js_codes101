let student={Name:"Akshat Pal",age:25,height:"183cm (6ft)",weight:"87 kg"}
let gender= new Object();
gender.First="Male";
gender.Second="Female";
console.log(gender);
console.log(student);
console.log(Object.keys(student));
console.log(Object.values(student));
//updating objects 
student.weight=" 84 kg ";
console.log(student);
// making of objects using functions 
function car(n,c,f){
  this.brand=n;
  this.color=c;
  this.fuel=f;
}
car1= new car("Altroz","White","petrol");
console.log(car1);