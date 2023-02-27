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
var daytwowindEl = document.getElementById('wind2');
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

var searchHistory = JSON.parse(localStorage.getItem("history"))
var results = [...searchHistory]
var cityListEl = document.getElementById("city-list")

function addHistoryCity(item) {
    results.push(item);
    localStorage.setItem("history", JSON.stringify(results))
    displayHistory();
}

function displayHistory() {
    cityListEl.innerHTML = '';

    var lastCities = results.slice(Math.max(results.length - 5,1));
    lastCities.forEach((item) => {
        var cityButton = document.createElement("button");
        cityButton.setAttribute('class', 'cityname');
        cityButton.setAttribute('id', item);
        cityButton.setAttribute('class', 'btn')
        cityButton.textContent = item;

        cityListEl.prepend(cityButton)
    })

};


function clickCity(event) {
    var lastSearch = event.target.getAttribute('id');
    searchWeather(lastSearch);
};

cityListEl.addEventListener('click', clickCity);


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

            addHistoryCity(city);
            displayHistory();

            currentCity.textContent = city;

            var today = dayjs();
            console.log(today.format('DD/MM/YYYY'));
            dateEl.textContent = "Date: " + today.format('DD/MM/YYYY');

            iconEl.setAttribute('src',`https://openweathermap.org/img/w/${icon}.png`);

            tempEl.textContent = "Temp: " + temp + " F";

            windEl.textContent = "Wind: " + wind + " km/h";

            humidityEl.textContent = "Humidity: " + humidity + " %";

            if (lat && lon) {
            var oneCallUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${API_key}`;

            console.log(oneCallUrl)
            fetch(oneCallUrl)
                .then((data) => {
                    return data.json();
                })
                .then((data) => {
                    console.log(data);

                })



            };



            var forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=${API_key}&units=metric`
            fetch(forecastUrl)
                .then(function(response) {
                    return response.json();

                })
                .then(function(data) {
                    console.log(data);

                    // forecast 1
                    var forecastDayOne = data.list[5].dt_txt;
                    console.log(forecastDayOne);

                    var strippedDate1 = forecastDayOne.split(" ");
                    console.log(strippedDate1);

                    dayonedateEl.textContent = strippedDate1[0];

                    dayoneiconEl.setAttribute('src', `https://openweathermap.org/img/wn/${icon}.png` );

                    var forecastDayOneTemp = data.list[5].main.temp;
                    dayonetempEl.textContent = "Temp: " + forecastDayOneTemp + " F";

                    var forecastDayOneWind = data.list[5].wind.speed;
                    dayonewindEl.textContent = "Wind: " + forecastDayOneWind + " km/h";

                    var forecastDayOneHum = data.list[5].main.humidity;
                    dayonehumidityEl.textContent = "Humidity: " + forecastDayOneHum + " %";

                    // forecast 2
                    var forecastDayTwo = data.list[13].dt_txt;
                    console.log(forecastDayTwo);

                    var strippedDate2 = forecastDayTwo.split(" ");
                    console.log(strippedDate2);

                    daytwodateEl.textContent = strippedDate2[0];

                    daytwoiconEl.setAttribute('src', `https://openweathermap.org/img/wn/${icon}.png` );

                    var forecastDayTwoTemp = data.list[13].main.temp;
                    daytwotempEl.textContent = "Temp: " + forecastDayTwoTemp + " F";

                    var forecastDayTwoWind = data.list[13].wind.speed;
                    daytwowindEl.textContent = "Wind: " + forecastDayTwoWind + " km/h";

                    var forecastDayTwoHum = data.list[13].main.humidity;
                    daytwohumidityEl.textContent = "Humidity: " + forecastDayTwoHum + " %";

                    // forecast 3
                    var forecastDayThree = data.list[21].dt_txt;
                    console.log(forecastDayThree);

                    var strippedDate3 = forecastDayThree.split(" ");
                    console.log(strippedDate3);

                    daythreedateEl.textContent = strippedDate3[0];

                    daythreeiconEl.setAttribute('src', `https://openweathermap.org/img/wn/${icon}.png` );

                    var forecastDayThreeTemp = data.list[21].main.temp;
                    daythreetempEl.textContent = "Temp: " + forecastDayThreeTemp + " F";

                    var forecastDayThreeWind = data.list[21].wind.speed;
                    daythreewindEl.textContent = "Wind: " + forecastDayThreeWind + " km/h";

                    var forecastDayThreeHum = data.list[21].main.humidity;
                    daythreehumidityEl.textContent = "Humidity: " + forecastDayThreeHum + " %";

                    // forecast 4
                    var forecastDayFour = data.list[29].dt_txt;
                    console.log(forecastDayFour);

                    var strippedDate4 = forecastDayFour.split(" ");
                    console.log(strippedDate4);

                    dayfourdateEl.textContent = strippedDate4[0];

                    dayfouriconEl.setAttribute('src', `https://openweathermap.org/img/wn/${icon}.png` );

                    var forecastDayFourTemp = data.list[29].main.temp;
                    dayfourtempEl.textContent = "Temp: " + forecastDayFourTemp + " F";

                    var forecastDayFourWind = data.list[29].wind.speed;
                    dayfourwindEl.textContent = "Wind: " + forecastDayFourWind + " km/h";

                    var forecastDayFourHum = data.list[29].main.humidity;
                    dayfourhumidityEl.textContent = "Humidity: " + forecastDayFourHum + " %";

                    // forcast 5
                    var forecastDayFive = data.list[37].dt_txt;
                    console.log(forecastDayFive);

                    var strippedDate5 = forecastDayFive.split(" ");
                    console.log(strippedDate5);

                    dayfivedateEl.textContent = strippedDate5[0];

                    dayfiveiconEl.setAttribute('src', `https://openweathermap.org/img/wn/${icon}.png` );

                    var forecastDayFiveTemp = data.list[37].main.temp;
                    dayfivetempEl.textContent = "Temp: " + forecastDayFiveTemp + " F";

                    var forecastDayFiveWind = data.list[37].wind.speed;
                    dayfivewindEl.textContent = "Wind: " + forecastDayFiveWind + " km/h";

                    var forecastDayFiveHum = data.list[37].main.humidity;
                    dayfivehumidityEl.textContent = "Humidity: " + forecastDayFiveHum + " %";


                })


        })
   
     
};

var lastcheckedcity = results.pop();
searchWeather(lastcheckedcity)



