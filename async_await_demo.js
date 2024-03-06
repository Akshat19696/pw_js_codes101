//this is a basically a function that always returns a promise for example
function createPromise(){
  return new Promise(function exec(resolve,reject){
    setTimeout(function f(){console.log("timer done");
  reject("done 10");},3000);//on using reject rather than that of resolve we move to catch
  });
}
async function compose(){
  try{
  console.log("inside function");
  const response=await createPromise();
  const response1=await createPromise();//await basically is used with async its a subsitute for .then
  console.log("reponse is",response);//await hamesha hmko bacaha hua code run karne deta hai lekin background mai asynchronous code run karta hai
  }catch(err){
    console.log("handled",err);
  } 

}
console.log("start");
console.log(compose());
console.log("end");
//fetch("anyurl").then(function f(response){reurn reponse.json;}.then(function f(value){reuturn value;}))//ecample of fetch in js