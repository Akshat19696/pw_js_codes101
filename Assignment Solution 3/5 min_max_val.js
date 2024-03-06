function Min_Max(...args){
  let Num=args.map((p)=>p);
  let ob={'Max': Math.max(...Num),"Min": Math.min(...Num)}
  return ob;
}
console.log(Min_Max(1,2,3,2,33,12,13,42,67,22,44,32));