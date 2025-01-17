var url="https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Culture%20%26%20Entertainment/Netflix%20Content.csv";

var types=getColumn(url,1);
var movies=getColumn(url,2);
var countries=getColumn(url,3);
var releaseYears=getColumn(url,5);
var ratings=getColumn(url,6);
var genres=getColumn(url,7)

//gives a list of movies and shows from a certain genre
//genre{string} chosen genre
// return {list} list of all shows and movies from the specified genre
function getContentFromGenre(genre){
    var MovieWithGenre=[]
    for (var i=0; i<movies.length; i++){
        if (genres[i].toLowerCase().includes(genre.toLowerCase())){
            MovieWithGenre.push(movies[i])
        }
    }
    if(MovieWithGenre.length==0){
        return -1
    }
    return MovieWithGenre
}
console.log (getContentFromGenre("romantic"))