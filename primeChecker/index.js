const number=document.getElementById("number");
const checkbtn=document.getElementById("checkPrime");
const display=document.getElementById("display")

checkbtn.addEventListener("click",function(){
  let value=Number(number.value);
  for( i=2;i<=Math.sqrt(value);i++)
    if(value%i==0)
      {
        display.innerText="Not a Prime"
}
  else{
    display.innerText="Prime"
  }

})

