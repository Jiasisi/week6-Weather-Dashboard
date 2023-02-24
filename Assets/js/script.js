var API_key = "23ed6a8fec52add373bbf7318a99ed18";


var currentCity = document.getElementById('city');
var currentWeather = document.getElementById('currentWeather');
var dateEl = document.getElementById('date');
var iconEl = document.getElementById('icon');
var tempEl = document.getElementById('temp');
var humidityEl = document.getElementById('humidity');

var dayoneEl = document.getElementById('day-1');
var dayonedateEl = document.getElementById('date1');
var dayoneiconEl = document.getElementById('icon1');
var dayonetempEl = document.getElementById('temp1');
var dayonehumidityEl = document.getElementById('humidity1');

var daytwoEl = document.getElementById('day-2');
var daytwodateEl = document.getElementById('date2');
var daytwoiconEl = document.getElementById('icon2');
var daytwotempEl = document.getElementById('temp2');
var daytwohumidityEl = document.getElementById('humidity2');

var daythreeEl = document.getElementById('day-3');
var daythreedateEl = document.getElementById('date3');
var daythreeiconEl = document.getElementById('icon3');
var daythreetempEl = document.getElementById('temp3');
var daythreehumidityEl = document.getElementById('humidity3');

var dayfourEl = document.getElementById('day-4');
var dayfourdateEl = document.getElementById('date4');
var dayfouriconEl = document.getElementById('icon4');
var dayfourtempEl = document.getElementById('temp4');
var dayfourhumidityEl = document.getElementById('humidity4');

var dayfiveEl = document.getElementById('day-5');
var dayfivedateEl = document.getElementById('date5');
var dayfiveiconEl = document.getElementById('icon5');
var dayfivetempEl = document.getElementById('temp5');
var dayfivehumidityEl = document.getElementById('humidity5');









function searchWeather(cityname) {

    var userInput =document.getElementById('inputCity');

    if (cityname !== null) {
        cityname = document.getElementById('inputCity').value;
    }

    var RequestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_key}`;


    fetch(RequestUrl)
        .then (function (response) {
            return response.json();

        })
        .then (function (data) {
            userInput.value = '';
            console.log(data);
            var city = data.name;
            var date = data.dt;
            var icon = data.weather[0].icon;
            var temp = data.main.temp;
            var wind = data.wind.speed;

            console.log(data.coord)

            checkedCities(city);
            displayCheckedCities();

            currentCity.textContent = city;
            tempEl.textContent = "Temp: " + temp + " Celsius";
            





        })
   
     
};


function checkedCities(city) {


};

function displayCheckedCities() {


};




