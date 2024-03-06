// function h(x,fn){
//   // h-> higher order function 
//   // fn -> callback
//   console.log(x*x);
//   fn();
// }
// h(10,function(){
//   console.log("done with callback");
// })
//Asynchronous code example
console.log("start");
setTimeout(function(){
  console.log("Timer done1");
},3000);
setTimeout(function(){
  console.log("timer done 2");// this piece of code first enters the callstack queue and also becomes first to enter the callsatck too
},2000);
for(let i=0;i<1000000000;i++){};//but in case of for loop it executes after start and after it ends the end is printed.
console.log("end");
//here start and end gets printed first and after timer gets completed then it executes the function inside the timeout.
