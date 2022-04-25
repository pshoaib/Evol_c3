// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page


let   money = JSON.parse(localStorage.getItem("amount"))||[];
let h1 = document.getElementById("wallet");
   h1.innerText=money;

   let movies = document.getElementById("movies");
   let id;

let query = document.getElementById("inp_query").value
           
   async function searchMovies(query)
   {
       try {
           let key = "e34ed918";
           const url =`https://www.omdbapi.com/?s=${query}&apikey=e34ed918`
         
           const res = await fetch(`${url}`)

           const data = await res.json();
           
           //console.log(data.Search)
           let movies = data.Search
          return movies
       }
        catch (error) 
       {
           console.log(error)
       }
   }

    function appendMovies(data)
    {
       
        movies.innerHTML=null;
        data.forEach((elem) => {
         
            let div = document.createElement("div")
               div.setAttribute("id","div")

            let h2 = document.createElement("h3")
              h2.innerText=elem.Title;
            
              //remiangi append of data 

              let img = document.createElement("img")
              img.setAttribute("src",elem.Poster)
              img.setAttribute("id","img")

              let btn = document.createElement("button")
                btn.innerText="book now"
                btn.setAttribute("class","book_now")
                btn.addEventListener("click",function(){
                    store_it(elem)
                })
        
             div.append(h2,img,btn)
             movies.append(div)
        });

    }
              
     async function main()
     {
         try {

            let data = await  searchMovies();
            console.log(data)
           

            if(data=== undefined)
            {
                return false
            }
             appendMovies(data)
   
             
         } catch (error) {
              console.log(error)
         }
     }
     function debounce(func,delay)
     {
          if(id)
          {
              clearTimeout(id)
          }
         id=setTimeout(function(){

            func()
         },delay)

     }


     function store_it(elem)
     {
         console.log(elem)
   
         let store_movie= JSON.parse(localStorage.getItem("movie")) || [];
          
         store_movie.push(elem)
   
          localStorage.setItem("movie",JSON.stringify(store_movie))
           window.location.href="checkout.html"
          
     }
