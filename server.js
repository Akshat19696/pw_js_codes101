//let HighScore=300;
//console.log(HighScore);
let A=[1,2,3];
A.push(4,5,6);
console.log(A); 
A.pop();
console.log(A);
A.shift();
console.log(A);
A.unshift(9);
console.log(A);
let B=[4,5,6,7];
let C=A.concat(B);
console.log(C); 
let D=C.join("@");
console.log(D);
console.log(C.reverse());
console.log(C.indexOf(5));
console.log(C.indexOf(75));// 75 is not the element so it returns -1
console.log(C.slice(3,5));// slicing array elements