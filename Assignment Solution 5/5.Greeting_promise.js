function greeting(name){
  return new Promise(function func(resolve,reject){
    resolve(`Hello,${name}!.`);
  })
}
console.log( greeting("Akshat Pal"));
