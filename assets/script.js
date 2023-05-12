var APIkey = "646207e63c5c05bb5a8c04c6ac98c892";
//var city = document.querySelector(".userI");
//var button = document.querySelector(".butt");

//var weatherSite = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}"

// this asynchronous function will access openweathermap and determine if the 
// city the user inputs is in the database.
async function getWeatherData(cityName){
    theURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}&units=imperial`;
    try {
        const response = await fetch(theURL);
        const data = await response.json();
        // if it finds a city, it will return the city's info
        if (response.ok) {
          return data;
        } else {
          throw new Error(data.message);
        }
      } catch (error) {
        throw new Error(`ERROR. Make sure you typed in the correct city name`);
      }



}
document.querySelector(".butt").addEventListener("click", async () =>{
    const cityInput = document.getElementById('userI').value;
    console.log(cityInput);
    try {

      const cityWeather = await getWeatherData(cityInput);
      var temperature = document.querySelector(".temp");
      var desc = document.querySelector(".weather");
      var windSpeed = document.querySelector(".wind-speed");
      var humidity = document.querySelector(".humidity");

      temperature.textContent = `Temperature: ` + cityWeather.main.temp;
    desc.textContent = `Description: ` + cityWeather.weather[0].description;
    humidity.textContent = `Humidity: ` + cityWeather.main.humidity +`%`;
    windSpeed.textContent = `Wind Speed: `+ cityWeather.wind.speed+`mph`;
    } catch (error) {
      console.error(error);
    }

});

//fetch(queryURL)