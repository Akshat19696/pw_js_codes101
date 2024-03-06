let person={
  first_name:"Akshat",
  last_name:"Pal",
  age:24
};
function ageInDays(p,result){
let full_name=p.first_name+" "+p.last_name;
let age_in_days=p.age*365;
return result(full_name,age_in_days);
};
function logResult(name,age){
  return console.log(`The person's full name is ${name},and their age in days is ${age}`)
}
ageInDays(person,logResult);