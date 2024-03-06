let store={"book":15,"pen":2,"comb":1.5,"pencil":1.5};//price of item in store in usd $
console.log("old price");
console.log(store); 
let prices= Object.values(store);
let item= Object.keys(store);
let newprice=[];
for(i=0;i< prices.length;i++){
  newprice.push(prices[i]*80);
}
const obj={};
item.forEach((key,index)=>{obj[key]=newprice[index]});
console.log("new price");
console.log(obj);