var url="https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Culture%20%26%20Entertainment/Netflix%20Content.csv";

var types=getColumn(url,1);
var movies=getColumn(url,2);
var countries=getColumn(url,3);
var releaseYears=getColumn(url,5);
var ratings=getColumn(url,6);
var genre=getColumn(url,7)

// returns a list of all shows and movies after a certain year
// year{number} specified number year
// return{list} all shows and movies after a certain year
function getContentFromAfterYear(year){
    var contentAfterYear=[]
    for(var i=0; i<movies.length; i++){
        if(releaseYears[i]>=year){
            moviesAfterYear.push(movies[i])
        }
    }
    if(contentAfterYear.length==0){
        return -1
    }
    return contentAfterYear
}
console.log (getContentFromAfterYear(2113))