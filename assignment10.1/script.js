var movies = [
    {
        title:'Momento',
        rating: 5,
        hasWatched: true
    },
    {   
        title:'Aquaman',
        rating: 3,
        hasWatched: true
},

{
        title: 'Oceans 13',
        rating: 5,
        hasWatched: false
    },
{
        title: 'Star Wars',
        rating: 5,
        hasWatched: true
}
]
   movies.forEach(function(movie) {
       if(movie.hasWatched == true) {
           console.log("You have watched " + movie.title + " - " + movie.rating + " stars");
       } 
       else {
           console.log("You have not watched " + movie.title + " - " + movie.rating + " stars");
       }
       

   });