const apiKey = "f7aa811b5dfab56682188fef2355eede";

const convertToCelsius = (temp) => {
    const result = `${(temp - 273.15).toFixed()}°C`;
    return result;
}

const showWeather = (weather) => {
    console.log(weather)
    const city = document.getElementById("CityName");
    const country = document.getElementById("Country");
    const clouds = document.getElementById("Clouds");
    const temp = document.getElementById("Temp");
    city.textContent = weather.name;
    country.textContent = weather.sys.country;
    clouds.textContent = weather.clouds.all;
    temp.textContent = convertToCelsius(weather.main.temp);

}

const getWeatherByLocation = (info) => {
   const lon = info.coords.longitude;
   const lat = info.coords.latitude;
   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

   fetch(url)
   .then((res)=> res.json())
   .then((res) => showWeather(res))
}

const getMyLocation = () => {
    navigator.geolocation.getCurrentPosition((pos)=>getWeatherByLocation(pos))
}
getMyLocation();





