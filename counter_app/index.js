const value=document.getElementById('counter');
const incrementBtn=document.getElementById('btn-increment');
const decrementBtn=document.getElementById('btn-decrement');
function increment(){
    let count=Number(value.innerText);
    count=count+1;
    value.innerText=count;
}
function decrement()
{
    let count=Number(value.innerText)
    count=count-1;
    value.innerText=count;  
}