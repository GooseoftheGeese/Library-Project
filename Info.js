var url="https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Culture%20%26%20Entertainment/Netflix%20Content.csv"

var types= getColumn(url,1);
var titles= getColumn(url,2); 
var countries= getColumn(url,3);
var addedToNetflix= getColumn(url,4);
var releaseDates= getColumn(url,5);
var ratings= getColumn(url,6);
var genres= getColumn(url,7);

function getInformationFromTitle(contentName){
    var info=[]
    for(var i = 0; i<title.length; i++){
        if(title[i].toLowerCase()==contentName.toLowerCase()){
            info.push(type[i], country[i], rating[i], releaseDate[i], genre[i])
            return info}
    }return -1
  
} console.log(getInformationFromTitle("Only the Dead"))         
