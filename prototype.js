let p="Akshat  ";
String.prototype.truelength=function(){
  console.log(`The true length of string is ${this.trim().length}`);
}
p.truelength();
// How to add protoype to object 
Object.prototype.Akshat=function(){
  console.log("pal");
}
let student={name:"Ramesh",
agest:12};
let teacher={name:"Atal",
age:34,__proto__:student};
student.Akshat();
//now we can acces student property with the help of teacher
console.log(teacher.agest)