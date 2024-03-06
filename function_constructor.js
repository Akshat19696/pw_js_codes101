function Product(n,p,r){// Arrow function cannot be used as function constructor but anonymous function can be used in a similar way as explained below
  this.name=n;
  this.price=p;
  this.rating=r
  return {x:1,y:2};//returning non primitive data type changes output
}
const p=new Product("Referigerator",10000,4.3);
console.log(p);
