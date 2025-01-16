var url="https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Culture%20%26%20Entertainment/Netflix%20Content.csv";

var types=getColumn(url,1);
var movies=getColumn(url,2);
var countries=getColumn(url,3);
var releaseYears=getColumn(url,5);
var ratings=getColumn(url,6);
var genres=getColumn(url,7)


function getMovieFromGenre(genre){
    var MovieWithGenre=[]
    for (var i=0; i<movies.length; i++){
        if (genres[i].lowerCase().includes(genre.lowerCase())){
            if(movies[i].substring(0, 1)== "\""){
                
            }
            MovieWithGenre.push(movies[i])
        }
    }
    return MovieWithGenre
}
console.log (getMovieFromGenre("Comedy"))