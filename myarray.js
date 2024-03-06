// spread and rest operator have same symbol that is ...args but used in different cases explained below with examples
let a=[1,2,3,4];
console.log(typeof a);
let b=[5,6,7,8];
console.log(a.concat(b));
//const threearray=[a,b];
const threearray=[...a,...b];//used as a spread operator 
console.log(threearray);
function test(){
  let m=Object.values(arguments);// WE CAN use m=Array.from(argyments) to create array from arguments 
  console.log(m);
}
test(1,2,3,4,5,6,7);
let c="Akshat Pal";
console.log([...c]);
// using rest operator to store elements into Array 
function Rest(...args){
  return args;
}
console.log(Rest("Ajay","Vijay","Akshat"));