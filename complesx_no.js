class ComplexNumber{
  #real;
  #img;
  constructor(r,i){
 this.#real=r;
 this.#img=i;
  }
  display(){
    console.log(this.#real,"+ i",this.#img);
  }
  get real(){
    return this.#real;
  }
  get img(){
    return this.#img;
  }
  addComplexNumber(c){
    this.#real+=c.real;
    this.#img+=c.img;
  }
}
const c1= new ComplexNumber(3,5);
c1.display();
console.log(c1.real);
console.log(c1.img);
const c2=new ComplexNumber(4,9);
c1.addComplexNumber(c2);
c1.display();