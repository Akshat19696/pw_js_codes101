let arr=[2,1,4];
arr.forEach(function(element,index,arr){ console.log(element,index,arr);})
const heroes=["akshay","salman","amitabh","abhishiek","karthik"];
heroes.forEach((p)=>{console.log( p.toUpperCase())});
heroes.map((m)=>{console.log(m.toUpperCase())});
let val=heroes.filter((n)=>{ return(n.startsWith("ak"))});
console.log(val);
let sum=arr.reduce((prev,curr)=>prev+curr,0);
console.log(sum);
let arrcheck=arr.every((k)=>typeof k === 'number');
console.log(arrcheck);
let above=arr.find((p)=>p>2);
console.log(above);
