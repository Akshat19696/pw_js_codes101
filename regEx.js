//tough topic  of js /\w\d/  d for number and w for word g for global 
let regexp=/pal/gi
let strtocheck="akshat pal is legend";
let result=regexp.test(strtocheck);
console.log(result);
let anotherresult=strtocheck.replace(regexp,"Pal");
console.log(anotherresult);