function numberChecker(array){
  let p=[...array];
  return function checkNum(a){
   for(let i=0;i<p.length;i++){
    if(p[i]===a){
      return true;
    }
    else if(i===(p.length-1)){
      return false;
    }
   }
  }
}
const arr=[1,2,3,4,5];
const checkNum= numberChecker(arr);
console.log(checkNum(3));
console.log(checkNum(6));

