const number=document.getElementById("number");
const checkbtn=document.getElementById("checkPrime");
const display=document.getElementById("display")
console.log(number,checkbtn,display);

checkbtn.addEventListener("click",function(){
  let value=Number(number.value);
  for(let i=2;i<=Math.sqrt(value);i++)
    if(value%i==0)
      {
        console.log("Not a Prime");
        display.innerText="Not a Prime";
        break;
      }     
  else{
    console.log("Prime");
    display.innerText="Prime";
  }

})

