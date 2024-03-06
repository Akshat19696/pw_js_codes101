function double(a,func){
let p=[...a];
let q=p.map((m)=> m*2);
return func(q);
};
function disp_new_arr(p){
let new_arr=[...p];
return new_arr;
};
let arr=[1,2,3,4,5];
console.log(double(arr,disp_new_arr));

