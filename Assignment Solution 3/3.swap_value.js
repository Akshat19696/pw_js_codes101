let x=3,y=5;
function swap(a,b){
  let m=[];
  m[0]=a;
  m[1]=b;
  m.reverse()//swaping by changin the positions of elements in array 
  return m; //returning array
}
let p=swap(x,y);//array with swaped values
console.log(`The value of x is ${x} and the value of y is ${y}`);//innitial values of x and y 
console.log(`The swaped values of x is ${p[0]} and y is ${p[1]}`);// after swap values of x and y 