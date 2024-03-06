const val=document.getElementById("txt");
val.addEventListener("keydown",()=>{
  val.value=val.value.toLowerCase();
})
const val1=document.getElementById("txt1");
val1.addEventListener("keyup",()=>{
  val1.value=val1.value.toUpperCase();
})