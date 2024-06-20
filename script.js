const Apikey = "4f5eee79a2dcc792b5f0e2086b882dde";
const Apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchbox = document.querySelector(".search input");
let searchbtn = document.querySelector(".search button");
let weatherIcon = document.querySelector(".weather-icon");

async function checkweather(city){
    const response = await fetch(Apiurl + city + `&appid=${Apikey}`);
    var data = await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "/kph";
    document.querySelector(".description").innerHTML = data.weather[0].main;

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "clouds.png";
    } else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "clear.png";
    } else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "drizzle.png";
    } else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "mist.png";
    } else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "rain.png";
    } else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "snow.png";
    } else{
        weatherIcon.src = "mist.png";
    }

};

searchbox.addEventListener('input',()=>{
    checkweather(searchbox.value);
})
searchbtn.addEventListener('click', ()=>{
    checkweather(searchbox.value);
})


