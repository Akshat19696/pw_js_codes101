let global_val=0;
function func(){
  let val1=1;
  console.log(global_val);
  function innerfunc(){
    console.log(global_val,val1);
    let val2=2;
    function innerinnerfunc(){
      console.log(global_val,val1,val2);
    }
    innerinnerfunc();
  }
  innerfunc();
}
func();