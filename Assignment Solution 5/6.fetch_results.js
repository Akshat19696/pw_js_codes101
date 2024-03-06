function fetch_results(){
  return new Promise(function Results(resolve,reject){
    fetch('https://jsonplaceholder.typicode.com/todos/1').then((response)=>{return response.json().then((data)=>resolve(data));});
  });
}
fetch_results().then((value)=>console.log(value));