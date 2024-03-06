"using strict";
const printForcast=function(arr){
    for(let i=0;i<arr.length;i++){
    p=p+`... ${arr[i]}°C in ${i+1} days`
    }
}
let p='';
let temp=[23,34,12,34,78,65];
printForcast(temp);
console.log(p);