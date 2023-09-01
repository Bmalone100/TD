

function openNav() {
    document.getElementById("mySidebar").style.width = "150px";
    document.getElementById("sidebar-btn").style.visibility ="hidden";
    document.getElementById("main").style.left= "150px";
}
        
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("sidebar-btn").style.visibility ="visible";
    document.getElementById("main").style.left= "0px";
}   
var map = new Map();
//url, array, key, value - args
function getJsonCountyData() {
    /*Gets Json data from local url*/
    fetch('http://localhost:5500/countyLinks.json').then(function(response){
        return response.json();
    }).then(function(object){
        object = JSON.stringify(object);
        json = JSON.parse(object);
        console.log(json);
        for(let i = 0; i< json.counties.length ;i++){
            map.set(json.counties.county, json.counties.url);
            console.log("Value " + i + map.get(json.counties.county[i]));
        }
        
    }).catch(function(){
        console.error("Data retrieval unsuccessful");
    });
}

function openURL(url){
    window.open(url)
   }

function changeLayerLinks(){
    document.getElementById("link-layer").style.visibility ="visible";
    document.getElementById("md-layer").style.visibility ="hidden";
    document.getElementById("mapsection").style.visibility ="hidden";
}

function changeLayerMD(){
    document.getElementById("md-layer").style.visibility ="visible";
    document.getElementById("link-layer").style.visibility ="hidden";
    document.getElementById("mapsection").style.visibility ="visible";
}



