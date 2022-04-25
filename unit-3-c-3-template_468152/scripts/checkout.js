// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time


let store_movie= JSON.parse(localStorage.getItem("movie")) || [];
       console.log(store_movie)
       store_movie.forEach(function(elem,index){
           
        let movies =  document.getElementById("movie")
          movies.innerHTML=null;

        let div = document.createElement("div")
        div.setAttribute("id","div")

       let h2 = document.createElement("h3")
       h2.innerText=elem.Title;
     
       //remiangi append of data 

       let img = document.createElement("img")
       img.setAttribute("src",elem.Poster)
       img.setAttribute("id","img")
      
      div.append(h2,img)
      movies.append(div)
 });
 function confirm()
 {
    let paise2 = Number(JSON.parse(localStorage.getItem("amount")))
    console.log(paise2)
   
    let   paise = JSON.parse(localStorage.getItem("movie"))||[];
     console.log(money.length)
    let booking =Number(money.length)*200;
  
    if(money2<booking)
    {
        alert("Insufficient Balance!")
    }
    console.log(booking)
    console.log(money)
 }
 confirm()