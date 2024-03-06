try{
  let x=undefined;
  console.log(x[0]);
}
catch(err){
console.log("error handling in catch",err);//to know what error has actually occured in try block we can know it by this method 
}
finally{
console.log("finally always gets executed regardless of try and catch");
}2