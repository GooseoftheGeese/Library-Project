var url="https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Culture%20%26%20Entertainment/Netflix%20Content.csv";

var types=getColumn(url,1);
var movies=getColumn(url,2);
var countries=getColumn(url,3);
var releaseYears=getColumn(url,5);
var ratings=getColumn(url,6);
var genre=getColumn(url,7)

function getMovieFromAfterYear(year){
    var moviesAfterYear=[]
    for(var i=0; i<movies.length; i++){
        if(releaseYears[i]>=year){
            moviesAfterYear.push(movies[i])
        }
    }
    return moviesAfterYear
}
console.log (getMovieFromAfterYear(2020))