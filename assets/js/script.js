
var issueContainer = document.getElementById('issues');
var fetchButton = document.getElementById('fetch-button');
var cityNameInput = document.querySelector('#cityname');
var latitude = "";
var longitude = ""
var tableBody = document.getElementById('repo-table');


// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

 
function getLocation() {
  // fetch request gets a list of all the repos for the node.js organization
    username = cityNameInput.value.trim();

    

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
    ;
}

function getWeather(latitude,longitude){
  var requestUrl = "http://api.openweathermap.org/data/2.5/forecast?lat="+latitude+"&lon="+longitude+"&appid=c90f7779e82532c0aebec4317257467a";

  fetch(requestUrl)
 .then(function (response) {
   return response.json();
 })
 .then(function(data){
   console.log(data)
   console.log(data.list[0])
   for (var i = 0; i < data.length; i++) {
    var userName = document.createElement('h3');
    var issueTitle = document.createElement('p');
    userName.textContent = data.list[i];
    issueTitle.textContent = data.list[i];
    issueContainer.append(userName);
    issueContainer.append(issueTitle);
  }



 

 });



}



fetchButton.addEventListener('click', getLocation);