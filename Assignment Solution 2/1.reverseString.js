setTimeout(function reverseString(){  
  let input="Hello World";
  let s=input.split("");
  let p=s.reverse();
  let q=p.join("");
   console.log(q);
  },2000)