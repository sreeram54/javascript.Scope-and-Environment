function two(){
    var a;
    console.log(a);
  }
  function one(){
    var a=2;
    console.log(a);
    two();
  }
  var a=1;
  console.log(a);
  one();


  function one(){

    function two(){
     console.log(a);
    }
  
    var a=2;
    console.log(a);
    two();
  }
  
  var a=1;
  console.log(a);
  one();