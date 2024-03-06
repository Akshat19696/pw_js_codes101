class Product{
  name;
  price;
  #rating; // now placing a # symbol before  the data members in js it becomes private and cannot be accesed or updated with the help of objects
  constructor(n,p,r){
    this.name=n;
    this.price=p;
    this.#rating=r;
    console.log("constructor is called");
    //return 10;//returing primitive will be avoided in constructor 
    //return {x:10,y:12};//returning non primitive like object will reurn that only 
  }
  static custom(){
    console.log("calling a static method");
  }
  //getter and setter are basically used to get info about the private variable defined inside the class and also they are not function 
  get ratingGetter(){
    console.log(this.#rating);
  }
  set ratingSetter(r){
    if(r<0)return;
    this.#rating=r;
  }
  display(){
   console.log("Displaying the current product",this.#rating);
  }
}
const p= new Product("Iphone",100000,5); //new->creates empty plain object
// In the above piece of code we are calling constructor method 
console.log(p.display());
//console.log(p.custom());// This custom function cannot be called with the help of object but it can be called with the help of class
Product.custom();
p.ratingSetter=4;
p.ratingGetter;
