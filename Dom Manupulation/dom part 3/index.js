document.addEventListener("mouseenter",hello);// many option are available like click ,dbclick,mouseenter etc check on mdn
function hello(){
  let name=document.querySelector("p");
  name.innerText="Namaste";
}
function colorchng(){
  document.body.style.backgroundColor = "red";
}