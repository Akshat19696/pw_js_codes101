function combine_two_api(){
  return new Promise(function get_obj(resolve,reject){
    let obj1={},obj2={};
    fetch('https://jsonplaceholder.typicode.com/todos/1').then((response)=>{return response.json();}).then((data)=>{ Object.assign(obj1,data);});
    fetch('https://jsonplaceholder.typicode.com/posts/1').then((response)=>{return response.json();}).then((data)=>{obj2= data;resolve({...obj1,...obj2})});
  }); 
}
combine_two_api().then((result)=>console.log(result));