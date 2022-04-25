// Store the wallet amount to your local storage with key "amount"

function open_It()
{
    window.location.href="movies.html"
}

let arr=[];
     
// let h1 =  document.getElementById("wallet")
//      let  amounts = JSON.parse(localStorage.getItem("amount"))
//      h1.innerText=Number(amounts)



function Run_It(event)
{
  event.preventDefault()
  let amount = Number(document.getElementById("amount").value)
    
    arr.push(amount)

    let sum = arr.reduce(function(acc,elem){
            return parseFloat(acc)+ parseFloat(elem)
    },0)
     localStorage.setItem("amount",JSON.stringify(sum))
  
     let input =  document.getElementById("amount").value="";
    //  let h1 =  document.getElementById("wallet")
   
    //  h1.innerText=Number(sum)
      
  let money = JSON.parse(localStorage.getItem("amount"))
  let h1 = document.getElementById("wallet");
     h1.innerText=money;
}


 
  // let sums = JSON.parse(localStorage.getItem("amount"))
  //  let h1 =  document.getElementById("wallet")
  //  h1.innerText=Number(sums)
  
  let money = JSON.parse(localStorage.getItem("amount"))
  let h1 = document.getElementById("wallet");
     h1.innerText=money;

  



