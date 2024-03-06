let p=document.getElementById("one");
console.log(p.innerText);
let q=document.getElementsByClassName("one");
console.log(q[2].innerText);
q[1].innerText='nodejs';
let r=document.getElementsByTagName("h4");
console.log(r);
console.log(r[0].innerText);
console.log(r[1].style.color="red");
//query slector in javascript 
let var4=document.querySelector(".class");///by using #ids we can select id too 
console.log(var4.innerText);
var4.className="hello";
var4.setAttribute("id","Akshat");
let title=document.createElement("h1");
title.innerText="Akshat Pal";
title.style.color="red";
title.className="member";
document.body.appendChild(title);
let ul=document.querySelector("ul");
console.log(ul);
let lists=document.querySelectorAll("li");
for (list of lists){
  ul.removeChild(list);
}