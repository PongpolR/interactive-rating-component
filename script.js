let count = 0;
function test() {
  if(count % 2 == 0) {
    document.getElementById("test").innerHTML = "JS";
    document.getElementById("test").id = "test2";
  }
  else {
    document.getElementById("test2").innerHTML ="Test";
    document.getElementById("test2").id = "test";
  }
  
  count++;
  
  console.log(count);
}