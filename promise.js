function createPromise(){
  return new Promise(function exec(resolve,reject){
    setTimeout(function f(){console.log("timer done");
  resolve("done 10");},3000);
  });
}
console.log("start");
const x= createPromise();
console.log("got a new promise");
x.then(function f(value) {console.log("promise done",value);//value is the value that is passed in resolve or rejcted function inside promise
});
console.log("promise end");
for(let i=0;i<1000000000;i++){};