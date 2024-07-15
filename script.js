const apiKey = "eecf361bab69763c7561d2a983aa1205";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const WeatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector(".max-temp").innerHTML = Math.round(data.main.temp_max) + '°C';
    document.querySelector(".min-temp").innerHTML = Math.round(data.main.temp_min) + '°C';
    document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
    document.querySelector(".wind").innerHTML = data.wind.speed + ' km/h';

    console.log(data);

    if(data.weather[0].main == 'Clouds') {
        WeatherIcon.src = 'https://openweathermap.org/img/wn/02d@2x.png';
    }
    else if(data.weather[0].main == 'Rain') {
        WeatherIcon.src = 'https://openweathermap.org/img/wn/10d@2x.png';
    }
    else if(data.weather[0].main == 'Clear') {
        WeatherIcon.src = 'https://openweathermap.org/img/wn/01d@2x.png';
    }
    else if(data.weather[0].main == 'Drizzle') {
        WeatherIcon.src = 'https://openweathermap.org/img/wn/09d@2x.png';
    }
    else if(data.weather[0].main == 'Storm') {
        WeatherIcon.src = 'https://openweathermap.org/img/wn/11d@2x.png';
    }
    else if(data.weather[0].main == 'Snow') {
        WeatherIcon.src = 'https://openweathermap.org/img/wn/13d@2x.png';
    }
    else if(data.weather[0].main == 'Fog') {
        WeatherIcon.src = 'https://openweathermap.org/img/wn/50d@2x.png';
    }
    else if(data.weather[0].main == 'Haze') {
        WeatherIcon.src = 'https://openweathermap.org/img/wn/50d@2x.png';
    }
    else if(data.weather[0].main == 'Mist') {
        WeatherIcon.src = 'https://openweathermap.org/img/wn/50d@2x.png';
    }
    else {
        WeatherIcon.src = 'https://openweathermap.org/img/wn/01d@2x.png';
    }

    document.querySelector('.weather').style.display = 'block';
}

searchBtn.addEventListener('click', ()=> {
    checkWeather(searchBox.value);
});

searchBox.addEventListener('keypress', (e)=> {
    if (e.key === 'Enter') {
        checkWeather(searchBox.value);
    }
});

// Add the following HTML code to display the max and min temperatures
// <div class="weather-info">
//     <span class="temp-max">Max Temp: </span><span class="max-temp"></span>
//     <span class="temp-min">Min Temp: </span><span class="min-temp"></span>
// </div>

// And add the following CSS