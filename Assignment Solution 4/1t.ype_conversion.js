let p="abc"
function ConvertToNumber(p){
  m=parseFloat(p);
  if(isNaN(m)){
    console.log("Invalid Number");
  }
  else{
    console.log(m);
  }
}
ConvertToNumber(p);