let person={
  name: "Mithun",
  age:21,
  address: {
    street:"B8, Block B, Industrail Area.",
    city:"Sector 62, Noida",
    State:"Uttar Pradesh"
  },
};
// Creating Function to extract name and stree and return them as object 
function Person_Details(){
  let p={}
  for(let i=0;i<arguments.length;i++){
       if(typeof arguments[i]==="object"){
        p.name=arguments[i].name;
        p.street=arguments[i].address.street;
       }
  }
  return p;
}
console.log(Person_Details(person));