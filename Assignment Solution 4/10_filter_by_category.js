let products=[{name:"Shirt",category:"Clothing"},{name:"Pants",category:"Clothing"},{name:"Hat",category:"Accessories"},{name:"Sunglasses",category:"Aceessories"}];
function filterByCategory(p){
  let prod=[...p];
  return function category(m){
    let s=[]
    for(let i=0;i<prod.length;i++){
      if(prod[i].category===m){
         s.push(prod[i]);
      }
    }
    return s;
  }
}
let clothingProducts = filterByCategory(products)("Clothing");
console.log(clothingProducts);