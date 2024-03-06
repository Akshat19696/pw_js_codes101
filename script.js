//let weight1=78;
//let height1=1.69;
//let bmi1=weight1/(height1**2);
//let weight2=92;
//let height2=1.95;
//let bmi2=weight2/(height2**2);
//console.log("Mark bmi: ",bmi1)
//console.log("jhon bmi: ",bmi2)
//if (bmi1>bmi2){
    //console.log("Mark's bmi is higher")
//}
//else{
   // console.log("jhon's bmi is higher")
//}
//let davg=(96+108+89)/3;
//let kolavg=(88+91+110)/3;
//if (davg>kolavg){ console.log("Dolphin team wins");}
//else if (kolavg>davg){console.log("Koalas team wins");}
//let fp='AkshatPal';
//console.log(`My name is ${fp}`);
// const day=prompt("Enter a day");
// switch(day){
//     case 'Monday':
//         console.log("do a project");
//         break;
//     case 'Tuesday':
//         console.log("do programming excercise");
//         break;
//     case 'Wednesday':
//         console.log('enjoy a movie');
//         break;    
//     case 'Thursday':
//         console.log('Do competitive programming');
//         break;
//     case 'Friday':
//         console.log('Do dsa');
//         break;
//     case 'Saturday':
//         console.log('do Algos');
//         break;
//     default:
//         console.log("Enter a correct day or the day is invalid");
//         break;                          
// }
// const age=23;
// age>=20?console.log('older 👴'):console.log('younger 🧔‍♂️'); 
// 'use strict';
// let bil=275,tip;
// tip= 50<=bil<=300?0.15*bil:0.20*bil;
// console.log(`The bill value was ${bil}rs`)
// console.log(`The Tip amount is ${tip}rs`);
// console.log(`The final value of bill is ${bil+tip}rs`);
// 'use strict';
// //function declaration
// function add(a,b){
//     return a+b;
// }
// let a=12,b=13;
// console.log(`The addition of two no ${a} and ${b} is`,add(a,b));

// //function expression
// const add2=function(a,b){
//     return a+b;
// }
// const age2=add2(a,b);
// console.log(`The addition of two no ${a} and ${b} is`,age2);

// 'using strict';
// // arrow function
// let p=message=>'hello';
// console.log(p());
// 'using strict';
// const age=(birthyear,year)=>{
//     const age=year-birthyear;
//     console.log(`The age of the person is ${age} years`);
// }
// // age(1999,2024);
// 'using strict';
// const calcavg=(a,b,c)=>(a+b+c)/3;
// const avgDolphins=calcavg(85,54,41),avgKoalas=calcavg(23,34,27);
// function checkWinner(avg1,avg2){
//     if(avg1>=(2*avg2)){
//         console.log("Team Dolphin wins 🏆");    
//     }
//     else if (avg1>=(2*avg2)){
//         console.log("Team Koalas wins 🏆");
//     }
//     else{
//         console.log('No team wins the game 😞');
//     }
// }
// checkWinner(avgDolphins,avgKoalas);

//Arrays
// 'using strict';
// let numb=[1,2,3,4,5];
// console.log(numb);
// console.log(numb[0]);
// console.log(numb[2]);
// console.log(numb.length);
// console.log(numb[numb.length-1]);
//new method to define an array

// const years= new Array(1995,1996,1997,1998,1999);
// arrays are mutable
// years[2]=1969;
// console.log(years);
//use of push function(add elements at the end of the array)
// numb.push('8');
// console.log(numb);
// use of unshift (add element at the beginning of the array)
// numb.unshift(0);
// console.log(numb);

//removeelemnt from the end
// const popped=numb.pop();
// console.log(numb);
// console.log(popped);
// console.log(numb.indexOf(4));
// console.log(numb.indexOf(11));//if element is not in the array it will return -1
// console.log(numb.includes(0));//returns true
// console.log(numb.includes('bob'));//returns false
// 'using strict';
// let bill=[125,555,44];
// console.log(bill);
// function calctip(bill){
//     if (50<bill,300){
//         return 0.15*bill;
//     }
//     else{
//         return 0.20*bill;
//     }
// }
// let tip=new Array(calctip(bill[0]),calctip(bill[1]),calctip(bill[2]))  
// console.log(tip) 
// const total=new Array(bill[0]+tip[0],bill[1]+tip[1],bill[2]+tip[2]);
// console.log(total);
// 'using strict';
// //discussion on objects
// let akshat={firstname:'Akshat',lastname:'Pal',age:23,job:'Full-stack web-developer',Friends:['Aman','Prashant','Alok'],calcage:function(birthyear){
//     return 2022-birthyear
// }};
// //Arrays are used for ordered or structured data and objects are used for unstructured data or unordered data
// console.log(akshat)
// console.log(akshat.lastname);
// console.log(akshat['lastname']);
// //both the above method produce the same result as 'Pal'
// const key='name';
// console.log(akshat['first'+key]);
// console.log(akshat['last'+key]);
// let intrested=prompt('What do you want to know about akshat:firstname,lastname,age,job,Friends,gmail,location😆');
// akshat.location='Bharaich'
// akshat.gmail='akshatpal19696@gmail.com'
// if (akshat[intrested]){
// console.log(akshat[intrested]);
// }
// else{
//     console.log('Wrong choice!choose between firstname,lastname,age,job,Friends,gmail,location😊');
// }
// console.log(`${akshat.firstname} has ${akshat.Friends.length} friends, and his best friend is ${akshat.Friends[1]}`)
// console.log(akshat.calcage(1999));
// 'using strict';
// ... spread operator use 
// let p=[1,2,3]
// let q=[...p,4,5,6];
// console.log(p,q);
// ... rest operator
// let disp=(...args)=>args;
// let r=new Array(disp(1,2,3,4));
// console.log(r);
// 'using strict';
//destructuring storing each elements of array in variables;
// let [a,,b]=[112,345,90];//storing elements of array in variable a and b
// console.log(a);
// console.log(b);//[a,,b] case output is 90 else for [a,b] acse output is 345
//same appllies for object
// let {name}={name:"Akshat Pal",age:23};
// console.log(name);
//name shows Akshat Pal
//age shows undefined
//concept of reference or pointers in javascript
// let person={name:'Akshat Pal'};
// let secondperson=person;
// console.log(secondperson);
//now making change in the value of person
// person.name="Krishna Pal"
// console.log(secondperson);
//here we made change in the value of person but secondperson value also changes becoz value of person is not copied to second person instead
//secondperson points towards the value of person
"using strict";
//use of map function
// let p=[1,2,3];
// let newarray=p.map((num)=>{return num*2});
// console.log(p);//[1,2,3]
// console.log(newarray);//[2,4,6]
// const akshat={
//     Firstname:'Akshat',
//     Lastname:'Pal',
//     birthyear:1999,
//     // calcage: function(birthyear){
//     //     return (2023-birthyear)
//     calcage: function(){
//         this.age=2023-this.birthyear;
//         return this.age;
//     }, 
//     getsummary:function(){ return`${this.Firstname} ${this.Lastname} is ${akshat.calcage()} years old`;},
// };
// console.log(akshat.Firstname);
// console.log(akshat.calcage());
// console.log(akshat['calcage']());
// console.log(akshat.calcage())
// console.log(akshat.age);
// console.log(akshat.getsummary());
//LOOPS IN JAVASCRIPT
// for(let i=0;i<=4;i++){
//     console.log("I am Akshat Pal");
// }
//WHILE LOOPS
// while(1){
//     console.log("akshat");
//     break;
// }
// function calcaverage(p){
// let sum=0;
// for(let i=0;i<p.length;i++){
//     sum=sum+p[i];
// }
// let avg=sum/p.length;
// return avg;
// }
// console.log(calcaverage([1,2,3]));


// var string1 = "PWSkills";
// var value = 20;
// console.log( string1 + value );
// console.log(p);



var a=1;
if(a!=null) 
    console.log(1)
else
    console.log(0)














