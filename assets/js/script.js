//all the global variables

var datesOne = "";
var weatherOne = "";
var humidityOne = "";
var windOne = "";


var datesTwo = "";
var weatherTwo = "";
var humidityTwo = "";
var windTwo = "";


var datesThree = "";
var weatherThree = "";
var humidityThree = "";
var windThree = "";


var datesFour = "";
var weatherFour = "";
var humidityFour = "";
var windFour = "";


var datesFive = "";
var weatherFive = "";
var humidityFive = "";
var windFive = "";


var fetchButton = document.getElementById('fetch-button');
var cityNameInput = document.querySelector('#cityname');
var latitude = "";
var longitude = "";
var tableBody = document.getElementById('repo-table');
var usernameCity  = cityNameInput.value.trim();
var repoContainerEl = document.querySelector('#repos-container');
var username= "";

var searchesCity = [];
var searchHistoryOne = "";
var searchHistoryTwo = document.getElementById('searches2').innerHTML;
var searchHistoryThree = document.getElementById('searches3').innerHTML;
var searchHistoryFour = document.getElementById('searches4').innerHTML;


var ButtonSearchHistoryTwo = document.getElementById('searches2')
var ButtonSearchHistoryThree = document.getElementById('searches3')
var ButtonSearchHistoryFour = document.getElementById('searches4')
  


function getLocation() {

  //sets the header of the last city
    username = cityNameInput.value.trim();
    document.getElementById("theTitle").innerHTML = username;
    localStorage.setItem("username", username);

  
    
    //fetches the location data which will be used to call to the weather data in the next function

    var fetchLocation = "http://api.openweathermap.org/geo/1.0/direct?q="+ username+ "&limit=1&appid=c90f7779e82532c0aebec4317257467a";

 
   fetch(fetchLocation)
   .then(function (response) {
     return response.json();
   })
   .then(function(data){
     console.log(data)
      latitude = data[0].lat;
      longitude = data[0].lon;
      latitude = latitude.toString();
      longitude = longitude.toString();
     console.log(latitude)
     console.log(longitude);
      
     getWeather(latitude,longitude);
   });
    
}









function getWeather(latitude,longitude){
  var requestUrl = "http://api.openweathermap.org/data/2.5/forecast?lat="+latitude+"&lon="+longitude+"&appid=c90f7779e82532c0aebec4317257467a";

  fetch(requestUrl)
 .then(function (response) {
   return response.json();
 })
 .then(function(data){
   console.log(data)
   console.log(data.list[0].main)


//container one
    datesOne = data.list[0].dt_txt;
    weatherOne = data.list[0].main.temp;
    humidityOne = data.list[0].main.humidity;
    windOne = data.list[0].wind.speed;
   
   localStorage.setItem("datesOne", datesOne);
   localStorage.setItem("weatherOne", weatherOne);
   localStorage.setItem("humidityOne", humidityOne);
   localStorage.setItem("windOne", windOne);


   document.getElementById("containerOne").innerHTML = datesOne;
   document.getElementById("weatherOne").innerHTML = weatherOne;
   document.getElementById("humidityOne").innerHTML = humidityOne;
   document.getElementById("windOne").innerHTML = windOne;


   //container two
    datesTwo = data.list[8].dt_txt;
    weatherTwo = data.list[8].main.temp;
    humidityTwo = data.list[8].main.humidity;
    windTwo = data.list[8].wind.speed;

   localStorage.setItem("datesTwo", datesTwo);
   localStorage.setItem("weatherTwo", weatherTwo);
   localStorage.setItem("humidityTwo", humidityTwo);
   localStorage.setItem("windTwo", windTwo);

   document.getElementById("containerTwo").innerHTML = datesTwo;
   document.getElementById("weatherTwo").innerHTML = weatherTwo;
   document.getElementById("humidityTwo").innerHTML = humidityTwo;
   document.getElementById("windTwo").innerHTML = windTwo;


    //container three
   datesThree = data.list[16].dt_txt;
   weatherThree = data.list[16].main.temp;
   humidityThree = data.list[16].main.humidity;
   windThree = data.list[16].wind.speed;


   localStorage.setItem("datesThree", datesThree);
   localStorage.setItem("weatherThree", weatherThree);
   localStorage.setItem("humidityThree", humidityThree);
   localStorage.setItem("windThree", windThree);

   document.getElementById("containerThree").innerHTML = datesThree;
   document.getElementById("weatherThree").innerHTML = weatherThree;
   document.getElementById("humidityThree").innerHTML = humidityThree;
   document.getElementById("windThree").innerHTML = windThree;


   //container four 
   datesFour = data.list[24].dt_txt;
   weatherFour = data.list[24].main.temp;
   humidityFour = data.list[24].main.humidity;
   windFour = data.list[24].wind.speed;

   localStorage.setItem("datesFour", datesFour);
   localStorage.setItem("weatherFour", weatherFour);
   localStorage.setItem("humidityFour", humidityFour);
   localStorage.setItem("windFour", windFour);

   document.getElementById("containerFour").innerHTML = datesFour;
   document.getElementById("weatherFour").innerHTML = weatherFour;
   document.getElementById("humidityFour").innerHTML = humidityFour;
   document.getElementById("windFour").innerHTML = windFour;

   //container five 
    datesFive = data.list[32].dt_txt;
    weatherFive = data.list[32].main.temp;
    humidityFive = data.list[32].main.humidity;
    windFive = data.list[32].wind.speed;

   localStorage.setItem("datesFive", datesFive);
   localStorage.setItem("weatherFive", weatherFive);
   localStorage.setItem("humidityFive", humidityFive);
   localStorage.setItem("windFive", windFive);

   document.getElementById("containerFive").innerHTML = datesFive;
   document.getElementById("weatherFive").innerHTML = weatherFive;
   document.getElementById("humidityFive").innerHTML = humidityFive;
   document.getElementById("windFive").innerHTML = windFive;

    //inputs searches
  var usernameNew = cityNameInput.value.trim()
 searchesCity.unshift(usernameNew);
 console.log(searchesCity);
 saveSearches(searchesCity);





 });

}


//function to save all the searches


function saveSearches(){

  localStorage.setItem("searchesCity", JSON.stringify(searchesCity));
  console.log('this block is running');
  console.log(searchesCity);
  searchHistoryOne = searchesCity[0];
  searchHistoryTwo = searchesCity[1];
  searchHistoryThree = searchesCity[2];
  searchHistoryFour = searchesCity[3];

  document.getElementById('searches1').innerHTML = searchHistoryOne;
  document.getElementById('searches2').innerHTML = searchHistoryTwo;
  document.getElementById('searches3').innerHTML = searchHistoryThree;
  document.getElementById('searches4').innerHTML = searchHistoryFour;


}



//recall all the previous data.
function init(){


   datesOne = localStorage.getItem("datesOne");
   weatherOne = localStorage.getItem("weatherOne");
   humidityOne = localStorage.getItem("humidityOne");
   windOne = localStorage.getItem("windOne");
   document.getElementById("containerOne").innerHTML = datesOne;
   document.getElementById("weatherOne").innerHTML = weatherOne;
   document.getElementById("humidityOne").innerHTML = humidityOne;
   document.getElementById("windOne").innerHTML = windOne;


   datesTwo = localStorage.getItem("datesTwo");
   weatherTwo = localStorage.getItem("weatherTwo");
   humidityTwo = localStorage.getItem("humidityTwo");
   windTwo = localStorage.getItem("windTwo");
   document.getElementById("containerTwo").innerHTML = datesTwo;
   document.getElementById("weatherTwo").innerHTML = weatherTwo;
   document.getElementById("humidityTwo").innerHTML = humidityTwo;
   document.getElementById("windTwo").innerHTML = windTwo;


   datesThree = localStorage.getItem("datesThree");
   weatherThree = localStorage.getItem("weatherThree");
   humidityThree = localStorage.getItem("humidityThree");
   windThree = localStorage.getItem("windThree");
   document.getElementById("containerThree").innerHTML = datesThree;
   document.getElementById("weatherThree").innerHTML = weatherThree;
   document.getElementById("humidityThree").innerHTML = humidityThree;
   document.getElementById("windThree").innerHTML = windThree;

   datesFour = localStorage.getItem("datesFour");
   weatherFour = localStorage.getItem("weatherFour");
   humidityFour = localStorage.getItem("humidityFour");
   windFour = localStorage.getItem("windFour");
   document.getElementById("containerFour").innerHTML = datesFour;
   document.getElementById("weatherFour").innerHTML = weatherFour;
   document.getElementById("humidityFour").innerHTML = humidityFour;
   document.getElementById("windFour").innerHTML = windFour;


   datesFive = localStorage.getItem("datesFive");
   weatherFive = localStorage.getItem("weatherFive");
   humidityFive = localStorage.getItem("humidityFive");
   windFive = localStorage.getItem("windFive");
   document.getElementById("containerFive").innerHTML = datesFive;
   document.getElementById("weatherFive").innerHTML = weatherFive;
   document.getElementById("humidityFive").innerHTML = humidityFive;
   document.getElementById("windFive").innerHTML = windFive;

   username = localStorage.getItem("username")
   document.getElementById("theTitle").innerHTML = username;


  
    //runs local storage for search history

    var usernameCityLocal = [];
    usernameCityLocal = JSON.parse(localStorage.getItem("searchesCity"));
    console.log(usernameCityLocal);
    if(usernameCityLocal != null){
      searchesCity.push(usernameCityLocal[0]);
      searchesCity.push(usernameCityLocal[1]);
      searchesCity.push(usernameCityLocal[2]);
      searchesCity.push(usernameCityLocal[3]);

      searchHistoryOne = usernameCityLocal[0];
      searchHistoryTwo = usernameCityLocal[1];
      searchHistoryThree = usernameCityLocal[2];
      searchHistoryFour = usernameCityLocal[3];


      document.getElementById('searches1').innerHTML = searchHistoryOne;
      document.getElementById('searches2').innerHTML = searchHistoryTwo;
      document.getElementById('searches3').innerHTML = searchHistoryThree;
      document.getElementById('searches4').innerHTML = searchHistoryFour;
    }
   

    


}


//these group of functions listen to the previous search and pass the data back in to generate the old results, note theirs no event listener on the most recent search because thats already being displayed so it would be redundant 

function runPreviousSearchTwo (){
  console.log("the button works!")
  var tempSearchTwo = searchesCity[1];
  document.getElementById('cityname').value = tempSearchTwo;
  getLocation();


}


function runPreviousSearchThree (){
  console.log("the button works!")
  var tempSearchThree = searchesCity[2];
  document.getElementById('cityname').value = tempSearchThree;
  getLocation();


}

function runPreviousSearchFour (){
  console.log("the button works!")
  var tempSearchFour = searchesCity[3];
  document.getElementById('cityname').value = tempSearchFour;
  getLocation();


}





init()


//button for the original search
fetchButton.addEventListener('click', getLocation);

//event listeners to call up previous searches

ButtonSearchHistoryTwo.addEventListener('click',runPreviousSearchTwo);
ButtonSearchHistoryThree.addEventListener('click',runPreviousSearchThree);
ButtonSearchHistoryFour.addEventListener('click',runPreviousSearchFour);
