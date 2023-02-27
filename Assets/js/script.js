var API_key = '23ed6a8fec52add373bbf7318a99ed18';


var currentCity = document.getElementById('city');
var currentWeather = document.getElementById('currentWeather');
var dateEl = document.getElementById('date');
var iconEl = document.getElementById('icon');
var tempEl = document.getElementById('temp');
var windEl = document.getElementById('wind');
var humidityEl = document.getElementById('humidity');

var dayoneEl = document.getElementById('day-1');
var dayonedateEl = document.getElementById('date1');
var dayoneiconEl = document.getElementById('icon1');
var dayonetempEl = document.getElementById('temp1');
var dayonewindEl = document.getElementById('wind1');
var dayonehumidityEl = document.getElementById('humidity1');

var daytwoEl = document.getElementById('day-2');
var daytwodateEl = document.getElementById('date2');
var daytwoiconEl = document.getElementById('icon2');
var daytwotempEl = document.getElementById('temp2');
var dayttwowindEl = document.getElementById('wind2');
var daytwohumidityEl = document.getElementById('humidity2');

var daythreeEl = document.getElementById('day-3');
var daythreedateEl = document.getElementById('date3');
var daythreeiconEl = document.getElementById('icon3');
var daythreetempEl = document.getElementById('temp3');
var daythreewindEl = document.getElementById('wind3');
var daythreehumidityEl = document.getElementById('humidity3');

var dayfourEl = document.getElementById('day-4');
var dayfourdateEl = document.getElementById('date4');
var dayfouriconEl = document.getElementById('icon4');
var dayfourtempEl = document.getElementById('temp4');
var dayfourwindEl = document.getElementById('wind4');
var dayfourhumidityEl = document.getElementById('humidity4');

var dayfiveEl = document.getElementById('day-5');
var dayfivedateEl = document.getElementById('date5');
var dayfiveiconEl = document.getElementById('icon5');
var dayfivetempEl = document.getElementById('temp5');
var dayfivewindEl = document.getElementById('wind5');
var dayfivehumidityEl = document.getElementById('humidity5');







var submitBtn = document.getElementById('searchWeather');

submitBtn.addEventListener('click', function(event) {
    event.preventDefault();
    var userInput = document.getElementById('inputCity');
    var cityname= userInput.value;
    
    
    
    searchWeather(cityname);


});

function searchWeather(cityname) {


   
    var RequestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${API_key}&units=imperial`


    fetch(RequestUrl)
        .then (function (response) {
            console.log(response);
            return response.json();
            
        })
        .then (function (data) {
            
            console.log(data);
            
            
            
            var city = data.name;
            var date = data.dt;
            var icon = data.weather[0].icon;
            var temp = data.main.temp;
            var wind = data.wind.speed;
            var humidity = data.main.humidity;

            console.log(data.coord)
            var lon = data.coord.lon
            var lat = data.coord.lon

            checkedCities(city);
            displayCheckedCities();

            currentCity.textContent = city;

            var today = dayjs();
            console.log(today.format('DD/MM/YYYY'));
            dateEl.textContent = "Date: " + today.format('DD/MM/YYYY');

            iconEl.setAttribute('src',`https://openweathermap.org/img/w/${icon}.png`);

            tempEl.textContent = "Temp: " + temp + " Celsius";

            windEl.textContent = "Wind: " + wind + " km/h";

            humidityEl.textContent = "Humidity: " + humidity + " %";

            if (lat && lon) {
            var oneCallUrl = 'https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon={lon}&appid=${API_key}';

            console.log(oneCallUrl)
            fetch(oneCallUrl)
                .then((data) => {
                    return data.json();
                })
                .then((data) => {
                    console.log("oneCall data: ", data);
                })



            };



            var forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=${API_key}&units=metric'
            fetch(forecastUrl)
                .then(function(response) {
                    return response.json();

                })
                .then(function(data) {
                    console.log(data);


                })


        })
   
     
};


function checkedCities(city) {


};

function displayCheckedCities() {


};




