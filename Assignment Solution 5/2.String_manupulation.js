function manipulateString(p,logString){
  return logString(p.toUpperCase());
}
function logString(m){
  return console.log("The manipulated string is:",m);
}

manipulateString("hello,world!",logString);
