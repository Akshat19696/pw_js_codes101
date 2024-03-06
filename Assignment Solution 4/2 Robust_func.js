function getPerson(p){
  if(Object.keys(p).length===2 && !Array.isArray(p)) {
  console.log("Name :",p.name);
  console.log("Age:",p.age);
  }
  else{
    console.log("Invalid parameter");
  }}
getPerson(["name","Mithun"]);
getPerson({name:"Mithun"});
getPerson({name:"Mithun",age:20});
console.log(Array.isArray({name:"Mithun",age:20}));