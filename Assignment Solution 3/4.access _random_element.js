function random(...args){
  let m=args.map(((a)=>a));
  let p=[m[0],m[1],m[(m.length)-1]];
  return p;
}
let random_vals=random(1,2,3,4,5,6,8,9);
console.log(random_vals);