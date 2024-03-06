let empty_set=new Set();
empty_set.add(1);
console.log(empty_set);
let a=[1,2,3]
let second_set= new Set(a);
console.log(second_set);
console.log(second_set.has(2)); //has gives true or false as response 
empty_set.clear();// deletes all elements inside the set 
console.log(empty_set);
//set difference 
let empty_map= new Map();
console.log(empty_map.size);
let arraywithKeyValue=[[1,"book"],[2,"pen"],[3,"pencil"]]
arraywithKeyValue.map((item)=> empty_map.set(item[0],item[1]));
console.log(empty_map);
