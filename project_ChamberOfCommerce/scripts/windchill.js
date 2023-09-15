const api_url = 'https://api.openweathermap.org/data/2.5';
const lat = -41.46885933722645;
const lon = -72.9438125004234;
const api_key = '069a3667af0a632c367191f8e73aa6df';

const api_url_full = `${api_url}/weather?lat=${lat}&lon=${lon}&appid=${api_key}`

console.log(api_url_full);

async function getWeather() {
    const response = await fetch(api_url_full);
    const data = await response.json();
    weatherData(data);
    console.table(data);
}

getWeather();

// show name and temp from api_url_full in console
const weatherData = (data) => {
    // NAMES
    // document.querySelector('#loc-name').textContent = data.name;
    // document.querySelector('#loc-country').textContent = data.sys.country;

    // TEMPERATURE
    const currentTempKelvin = data.main.temp;
    const currentTempCelcius = Math.round(currentTempKelvin - 273.15);
    document.querySelector('#current-temp').textContent = currentTempCelcius;

    // ICON
    const weather_icon = document.querySelector('#weather-icon');
    const icon_weather = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weather_icon.setAttribute('src', icon_weather);
    // weather_icon.setAttribute('width', '50px');

    // DESCRIPTION
    document.querySelector('#weather-description').textContent = data.weather[0].description;
    const temperature = document.querySelector("#current-temp");
    const windspeed = document.querySelector(".wind-speed");
    const windchill = document.querySelector(".wind-chill");

    console.log("temperature:")
    console.log(temperature);
    // convert const temperature to a number
    const temp = parseInt(temperature.textContent);
    const speed = parseFloat(windspeed.textContent);

    console.log(temp);
    console.log(speed);

    const tempF = Math.round(temp * (9/5) + 32);

    console.log(tempF);

    // wind chill value
    function calculateWindChill(tempF, speed) {
        if ((tempF <= 50) & (speed > 3)) {
          const windChill = Math.round
          (
            35.74 + 0.6215 * tempF - 35.75 * speed ** 0.16 + 0.4275 * tempF * speed ** 0.16
          );
          const windChillCelcius = Math.round(((windChill - 32) * 5) / 9);
          return `${windChillCelcius} °C`;
        } 
        else {
          return "N/A";
        }
      }

    console.log("result:", calculateWindChill(tempF, speed))
    document.querySelector(".wind-chill").innerHTML = calculateWindChill(tempF, speed);
}



