//hex color
// #
// 123456789
// ABCDEF 
" use strict";
const btn=document.getElementById("btn");
const randomColor=()=>{
  let val="0123456789ABCDEF";
  let cons="#";
  for(i=0;i<6;i++){
    cons=cons+val[Math.floor(Math.random()*16)];
  }
return cons;
};
//console.log(randomColor());
btn.addEventListener("click",()=>{{
  document.body.style.backgroundColor= randomColor();
}});