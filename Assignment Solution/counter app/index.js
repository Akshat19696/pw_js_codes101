"using strict"
let valu=0;
function resetVal(){
  const val=document.getElementById("text");
  valu=0;
  val.innerText=valu;
}
function incVal(){
  const val=document.getElementById("text");
  val.innerText=++valu;
}
function decVal(){
  const val=document.getElementById("text");
  --valu;
  if(valu<0){
    valu=0
  }
  val.innerText=valu;
}


