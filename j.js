function getanswer(){
    let url = 'http://www.omdbapi.com/?apikey=4129ce76';
    let userInput = document.getElementById("userinput").value;
    // let type = document.getElementsByClassName("movieType").value;
    let type = document.getElementById("movieType").value;
    let year = document.getElementById("movieYear").value;
    url += '&s=' + userInput;
    
     if (type.trim() != "Type") {
       url += '&type=' + type;
    } 
   
     if (year.trim() !="year") {
       url += '&y=' + year;
     }
     console.log(url)
   
     fetch(url)
     .then((response) => {
         if (!response.ok) {
             throw new Error('ERR');
         }
   
         return response.text();
     })
     .then((data) => {
       var movies = JSON.parse(data);
   
       for (var movie of movies['Search']) {
         append_stuff(movie)
         console.log(movie)
       }
     
     })
     .catch((error) => {
         console.log(err);
     })
   
   
   function append_stuff(inpt) {
     let showResult = document.getElementById("answer");
     let html_stuff = `<div class="movieImg">
     <div class="col-sm-4">
       <img src="${inpt.Poster}" class="img">
       <h2>${inpt.Title}</h2>
       <ul class="list-group">
         <li class="list-group-item"><strong>Type :  </strong>${inpt.Type}</li>
         <li class="list-group-item"><strong>Year released :  </strong>${inpt.Year}</li>
         <li class="list-group-item"><strong>Imdb ID :  </strong>${inpt.imdbID}</li>
       </ul>
     </div>
   </div>`
     showResult.innerHTML += html_stuff;
     console.log(showResult)
   }
   
   }