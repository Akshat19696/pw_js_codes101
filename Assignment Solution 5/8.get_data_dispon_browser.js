function get_data_fromApi(){
  return new Promise(function data(resolve,reject){
    fetch(`https://jsonplaceholder.typicode.com/posts`).then((response)=>{return response.json()}).then((data)=>resolve(data));
  });
}
get_data_fromApi().then((value)=>console.log(value));