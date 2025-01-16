var url="https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Culture%20%26%20Entertainment/Netflix%20Content.csv"

var type= getColumn(url,1);
var title= getColumn(url,2); 
var country= getColumn(url,3);
var addedToNetflix= getColumn(url,4);
var releaseDate= getColumn(url,5);
var rating= getColumn(url,6);
var genre= getColumn(url,7);


// returns the information of a certain show
// contentName{string}chosen show/movie
// return{list} all information pertaining to the specified show/movie
function getInformationFromTitle(contentName){
    var info=[]
    for(var i = 0; i<title.length; i++){
        if(title[i].toLowerCase()==contentName.toLowerCase()){
            info.push(type[i], country[i], rating[i], releaseDate[i], genre[i])
            return info}
    }return -1
  
} console.log(getInformationFromTitle())         
