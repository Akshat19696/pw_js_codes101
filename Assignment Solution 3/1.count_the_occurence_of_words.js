let txt="Nory was a Catholic because her mother was a Catholic, and Nory mother was a Catholic because her father was a Catholic, and her father was a Catholic because his mother was a Catholic, or had been.";
let p= txt.split(" ");
let unique=new Set(txt.split(" "));
console.log(unique);
unique.forEach(((m)=>{}));
let noofeachword= new Map();
let c=0;
for(const element of unique){
for(let i=0;i<p.length;i++){
  if(element===p[i]){
    c++
  } 
}
noofeachword.set(element,c);
c=0;
}
console.log(noofeachword);
