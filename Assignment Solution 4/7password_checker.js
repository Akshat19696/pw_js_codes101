class User{
  username;
  password;
  constructor(n){
    this.username=n;
  }
  set setPassword(p){
    if(p.length>=8 && /[A-Z]/.test(p) && /[a-z]/.test(p) && /[0-9]/.test(p)){
      this.password=p;
    }else{
      console.log("Password must be 8 character long and must have atleast a number,uppercase and a lowercase charachter in it")
    }
  }
  get getPassword(){
    let p_astr="";
    if(this.password!==undefined){
    for(let i=0;i<this.password.length;i++){
      p_astr=p_astr+"*";
    }}
    return p_astr;
  }
}
const user= new User("Mithun");
user.setPassword="mypassword";
user.setPassword="Mypassword";
user.setPassword="Mypassword123";
console.log(user.getPassword);