let count=0
let result=document.getElementById("counter")
function increment()
{
    count+=1
   result.innerText=count
}
function save()
{
      let s = count + " -> "
      document.getElementById("output").textContent+=s
      count=0
      result.innerText=0
}    
