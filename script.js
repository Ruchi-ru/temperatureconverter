const temper= document.getElementById("temper");
const tofahrenheit= document.getElementById("tofahrenheit");
const tocelcius= document.getElementById("tocelcius");
const result= document.getElementById("result");
let temp;

function calculate(){
  if(tofahrenheit.checked){
    temp= Number(temper.value);
    temp = temp * 9/5 +32;
    result.textContent= temp.toFixed(1) + "F";
  }
  else if(tocelcius.checked){
    temp= Number(temper.value);
    temp = (temp -32) * 5/9;
     result.textContent= temp.toFixed(1) + "C";
  }
  else{
    result.textContent= "Select a unit";
  }
}