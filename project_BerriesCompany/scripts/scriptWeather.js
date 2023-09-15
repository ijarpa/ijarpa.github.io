// Days name
const currentDate_1 = new Date();
currentDate_1.setDate(currentDate_1.getDate() + 1);
const dayOfWeek1 = currentDate_1.getDay();

const currentDate_2 = new Date();
currentDate_2.setDate(currentDate_1.getDate() + 1);
const dayOfWeek2 = currentDate_2.getDay();

const currentDate_3 = new Date();
currentDate_3.setDate(currentDate_1.getDate() + 2);
const dayOfWeek3 = currentDate_3.getDay();

const dayName = ['Sun', 'Mon', 'Tue', 'Wedn', 'Thur', 'Fri', 'Sat'];
const tomorrowDay = dayName[dayOfWeek1];
const afterTomorrowDay = dayName[dayOfWeek2];
const afterTomorrowDay2 = dayName[dayOfWeek3];

const tomorrowDayElements = document.querySelectorAll('.tomorrow-day');

for (let i = 0; i < tomorrowDayElements.length; i++) {
  tomorrowDayElements[i].textContent = tomorrowDay;
}

const afterTomorrowDayElements = document.querySelectorAll('.after-tomorrow-day');

for (let i = 0; i < afterTomorrowDayElements.length; i++) {
  afterTomorrowDayElements[i].textContent = afterTomorrowDay;
}

const afterTomorrowDayElements2 = document.querySelectorAll('.after-tomorrow-day2');

for (let i = 0; i < afterTomorrowDayElements2.length; i++) {
  afterTomorrowDayElements2[i].textContent = afterTomorrowDay2;
}


// weather API for Carlsad California
const api_url = 'https://api.openweathermap.org/data/2.5';
const lat = 33.16032413488669;
const lon = -117.37831067945368;
const api_key = '069a3667af0a632c367191f8e73aa6df';

const api_url_full = `${api_url}/weather?lat=${lat}&lon=${lon}&appid=${api_key}`

async function getWeather() {
    const response = await fetch(api_url_full);
    const data = await response.json();
    weatherData(data);
}

getWeather();
// show name and temp from api_url_full in console
const weatherData = (data) => {
    // TEMPERATURE IN CELCIUS
    const currentTempKelvin = data.main.temp;
    const currentTempCelcius = Math.round(currentTempKelvin - 273.15);
    document.querySelector('#current-temp').textContent = currentTempCelcius;

    // Humidity
    const currentHumidity = data.main.humidity;
    document.querySelector('.humidity').textContent = currentHumidity;

    // ICON
    const weather_icon = document.querySelector('#weather-icon');
    const icon_weather = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weather_icon.setAttribute('src', icon_weather);

    // DESCRIPTION
    document.querySelector('#weather-description').textContent = data.weather[0].description;
    document.querySelector('#weather-description').style.textTransform = "Capitalize";
    document.querySelector('#weather-description').style.fontWeight = "600";
}


// FOR TOMORROW
const api_url_full_tomorrow = `${api_url}/forecast?lat=${lat}&lon=${lon}&cnt=16&appid=${api_key}`

async function getWeatherTomorrow() {
    const response = await fetch(api_url_full_tomorrow);
    const data = await response.json();
    weatherDataTomorrow(data);
}

getWeatherTomorrow();

const weatherDataTomorrow = (data) => {

  const groupedData = {};

  data.list.forEach((obj) => {
    const date = obj.dt_txt.split(' ')[1];
  
    if (groupedData[date]) {
      if (obj.main.temp_min < groupedData[date].temp_min) {
        groupedData[date].temp_min = obj.main.temp_min;
      }
      if (obj.main.temp_max > groupedData[date].temp_max) {
        groupedData[date].temp_max = obj.main.temp_max;
      }
    } else {
      groupedData[date] = {
        temp_min: obj.main.temp_min,
        temp_max: obj.main.temp_max,
      };
    }
  });

  const result = Object.entries(groupedData).map(([date, temps]) => ({
    date,
    temp_min: temps.temp_min,
    temp_max: temps.temp_max,
  }));

  console.log(result);

    // TOMORROW
    const currentTempKelvinMax = result[0].temp_max;
    const currentTempCelciusMax = Math.round(currentTempKelvinMax - 273.15);
    document.querySelector('#tomorrow-temp-Max').textContent = currentTempCelciusMax;

    const currentTempKelvinMin = result[0].temp_min;
    const currentTempCelciusMin = Math.round(currentTempKelvinMin - 273.15);
    document.querySelector('#tomorrow-temp-Min').textContent = currentTempCelciusMin;

    const weather_icon_t = document.querySelector('#weather-icon-tomorrow');
    const icon_weather = `http://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
    weather_icon_t.setAttribute('src', icon_weather);

    // AFTER TOMORROW
    const currentTempKelvinMax_day2 = result[1].temp_max;
    const currentTempCelciusMax_day2 = Math.round(currentTempKelvinMax_day2 - 273.15);
    document.querySelector('#tomorrow-afterTemp-Max').textContent = currentTempCelciusMax_day2;

    const currentTempKelvinMin_day2 = result[1].temp_min;
    const currentTempCelciusMin_day2 = Math.round(currentTempKelvinMin_day2 - 273.15);
    document.querySelector('#tomorrow-afterTemp-Min').textContent = currentTempCelciusMin_day2;

    // ICON
    const weather_icon_day2 = document.querySelector('#weather-icon-afterTomorrow');
    const icon_weather_day2 = `http://openweathermap.org/img/w/${data.list[8].weather[0].icon}.png`;
    weather_icon_day2.setAttribute('src', icon_weather_day2);

    // AFTER AFTER TOMORROW
    const currentTempKelvinMax_day3 = result[2].temp_max;
    const currentTempCelciusMax_day3 = Math.round(currentTempKelvinMax_day3 - 273.15);
    document.querySelector('#tomorrow-afterTemp-Max2').textContent = currentTempCelciusMax_day3;

    const currentTempKelvinMin_day3 = result[2].temp_min;
    const currentTempCelciusMin_day3 = Math.round(currentTempKelvinMin_day3 - 273.15);
    document.querySelector('#tomorrow-afterTemp-Min2').textContent = currentTempCelciusMin_day3;

    // ICON
    const weather_icon_day3 = document.querySelector('#weather-icon-afterTomorrow2');
    const icon_weather_day3 = `http://openweathermap.org/img/w/${data.list[8].weather[0].icon}.png`;
    weather_icon_day3.setAttribute('src', icon_weather_day3);
}


// weahter API for Los Angeles California 34.055188075152564, -118.25929720314062
const latLA = 34.055188075152564;
const lonLA = -118.25929720314062;

const api_url_fullLA = `${api_url}/weather?lat=${latLA}&lon=${lonLA}&appid=${api_key}`

async function getWeatherLA() {
    const response = await fetch(api_url_fullLA);
    const data = await response.json();
    weatherDataLA(data);
}
getWeatherLA();
// show name and temp from api_url_full in console
const weatherDataLA = (data) => {
    // TEMPERATURE IN CELCIUS
    const currentTempKelvin = data.main.temp;
    const currentTempCelcius = Math.round(currentTempKelvin - 273.15);
    document.querySelector('#current-temp-LA').textContent = currentTempCelcius;

    // Humidity
    const currentHumidity = data.main.humidity;
    document.querySelector('.humidityLA').textContent = currentHumidity;

    // ICON
    const weather_icon = document.querySelector('#weather-icon-LA');
    const icon_weather = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weather_icon.setAttribute('src', icon_weather);

    // DESCRIPTION
    document.querySelector('#weather-description-LA').textContent = data.weather[0].description;
    document.querySelector('#weather-description-LA').style.textTransform = "Capitalize";
    document.querySelector('#weather-description-LA').style.fontWeight = "600";
}

// FOR TOMORROW
const api_url_full_tomorrowLA = `${api_url}/forecast?lat=${latLA}&lon=${lonLA}&cnt=16&appid=${api_key}`

async function getWeatherTomorrowLA() {
    const response = await fetch(api_url_full_tomorrowLA);
    const data = await response.json();
    weatherDataTomorrowLA(data);
}

getWeatherTomorrowLA();

const weatherDataTomorrowLA = (data) => {

  const groupedData = {};

  data.list.forEach((obj) => {
    const date = obj.dt_txt.split(' ')[1];
  
    if (groupedData[date]) {
      if (obj.main.temp_min < groupedData[date].temp_min) {
        groupedData[date].temp_min = obj.main.temp_min;
      }
      if (obj.main.temp_max > groupedData[date].temp_max) {
        groupedData[date].temp_max = obj.main.temp_max;
      }
    } else {
      groupedData[date] = {
        temp_min: obj.main.temp_min,
        temp_max: obj.main.temp_max,
      };
    }
  });

  const result = Object.entries(groupedData).map(([date, temps]) => ({
    date,
    temp_min: temps.temp_min,
    temp_max: temps.temp_max,
  }));

  // TOMORROW
  const currentTempKelvinMax = result[0].temp_max;
  const currentTempCelciusMax = Math.round(currentTempKelvinMax - 273.15);
  document.querySelector('#tomorrow-temp-MaxLA').textContent = currentTempCelciusMax;

  const currentTempKelvinMin = result[0].temp_min;
  const currentTempCelciusMin = Math.round(currentTempKelvinMin - 273.15);
  document.querySelector('#tomorrow-temp-MinLA').textContent = currentTempCelciusMin;

  const weather_icon_t = document.querySelector('#weather-icon-tomorrowLA');
  const icon_weather = `http://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
  weather_icon_t.setAttribute('src', icon_weather);

  // AFTER TOMORROW
  const currentTempKelvinMax_day2 = result[1].temp_max;
  const currentTempCelciusMax_day2 = Math.round(currentTempKelvinMax_day2 - 273.15);
  document.querySelector('#tomorrow-afterTemp-MaxLA').textContent = currentTempCelciusMax_day2;

  const currentTempKelvinMin_day2 = result[1].temp_min;
  const currentTempCelciusMin_day2 = Math.round(currentTempKelvinMin_day2 - 273.15);
  document.querySelector('#tomorrow-afterTemp-MinLA').textContent = currentTempCelciusMin_day2;

  // ICON
  const weather_icon_day2 = document.querySelector('#weather-icon-afterTomorrowLA');
  const icon_weather_day2 = `http://openweathermap.org/img/w/${data.list[15].weather[0].icon}.png`;
  weather_icon_day2.setAttribute('src', icon_weather_day2);

  // AFTER TOMORROW
  const currentTempKelvinMax_day3 = result[2].temp_max;
  const currentTempCelciusMax_day3 = Math.round(currentTempKelvinMax_day3 - 273.15);
  document.querySelector('#tomorrow-afterTemp-MaxLA2').textContent = currentTempCelciusMax_day3;

  const currentTempKelvinMin_day3 = result[2].temp_min;
  const currentTempCelciusMin_day3 = Math.round(currentTempKelvinMin_day3 - 273.15);
  document.querySelector('#tomorrow-afterTemp-MinLA2').textContent = currentTempCelciusMin_day3;

  // ICON
  const weather_icon_day3 = document.querySelector('#weather-icon-afterTomorrowLA2');
  const icon_weather_day3 = `http://openweathermap.org/img/w/${data.list[15].weather[0].icon}.png`;
  weather_icon_day3.setAttribute('src', icon_weather_day3);
}


// weahter API for San Diego California 32.71889660562673, -117.18862932834311
const latSD = 32.71889660562673;
const lonSD = -117.18862932834311;

const api_url_fullSD = `${api_url}/weather?lat=${latSD}&lon=${lonSD}&appid=${api_key}`

async function getWeatherSD() {
    const response = await fetch(api_url_fullSD);
    const data = await response.json();
    weatherDataSD(data);
}
getWeatherSD();
// show name and temp from api_url_full in console
const weatherDataSD = (data) => {
    // TEMPERATURE IN CELCIUS
    const currentTempKelvin = data.main.temp;
    const currentTempCelcius = Math.round(currentTempKelvin - 273.15);
    document.querySelector('#current-temp-SD').textContent = currentTempCelcius;

    // Humidity
    const currentHumidity = data.main.humidity;
    document.querySelector('.humiditySD').textContent = currentHumidity;

    // ICON
    const weather_icon = document.querySelector('#weather-icon-SD');
    const icon_weather = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weather_icon.setAttribute('src', icon_weather);

    // DESCRIPTION
    document.querySelector('#weather-description-SD').textContent = data.weather[0].description;
    document.querySelector('#weather-description-SD').style.textTransform = "Capitalize";
    document.querySelector('#weather-description-SD').style.fontWeight = "600";
}

// FOR TOMORROW
const api_url_full_tomorrowSD = `${api_url}/forecast?lat=${latSD}&lon=${lonSD}&cnt=16&appid=${api_key}`

async function getWeatherTomorrowSD() {
    const response = await fetch(api_url_full_tomorrowSD);
    const data = await response.json();
    weatherDataTomorrowSD(data);
}

getWeatherTomorrowSD();

const weatherDataTomorrowSD = (data) => {

  const groupedData = {};

  data.list.forEach((obj) => {
    const date = obj.dt_txt.split(' ')[1];
  
    if (groupedData[date]) {
      if (obj.main.temp_min < groupedData[date].temp_min) {
        groupedData[date].temp_min = obj.main.temp_min;
      }
      if (obj.main.temp_max > groupedData[date].temp_max) {
        groupedData[date].temp_max = obj.main.temp_max;
      }
    } else {
      groupedData[date] = {
        temp_min: obj.main.temp_min,
        temp_max: obj.main.temp_max,
      };
    }
  });

  const result = Object.entries(groupedData).map(([date, temps]) => ({
    date,
    temp_min: temps.temp_min,
    temp_max: temps.temp_max,
  }));

  // TOMORROW
  const currentTempKelvinMax = result[0].temp_max;
  const currentTempCelciusMax = Math.round(currentTempKelvinMax - 273.15);
  document.querySelector('#tomorrow-temp-MaxSD').textContent = currentTempCelciusMax;

  const currentTempKelvinMin = result[0].temp_min;
  const currentTempCelciusMin = Math.round(currentTempKelvinMin - 273.15);
  document.querySelector('#tomorrow-temp-MinSD').textContent = currentTempCelciusMin;

  const weather_icon_t = document.querySelector('#weather-icon-tomorrowSD');
  const icon_weather = `http://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
  weather_icon_t.setAttribute('src', icon_weather);

  // AFTER TOMORROW
  const currentTempKelvinMax_day2 = result[1].temp_max;
  const currentTempCelciusMax_day2 = Math.round(currentTempKelvinMax_day2 - 273.15);
  document.querySelector('#tomorrow-afterTemp-MaxSD').textContent = currentTempCelciusMax_day2;

  const currentTempKelvinMin_day2 = result[1].temp_min;
  const currentTempCelciusMin_day2 = Math.round(currentTempKelvinMin_day2 - 273.15);
  document.querySelector('#tomorrow-afterTemp-MinSD').textContent = currentTempCelciusMin_day2;

  // ICON
  const weather_icon_day2 = document.querySelector('#weather-icon-afterTomorrowSD');
  const icon_weather_day2 = `http://openweathermap.org/img/w/${data.list[8].weather[0].icon}.png`;
  weather_icon_day2.setAttribute('src', icon_weather_day2);

  // AFTER TOMORROW
  const currentTempKelvinMax_day3 = result[2].temp_max;
  const currentTempCelciusMax_day3 = Math.round(currentTempKelvinMax_day3 - 273.15);
  document.querySelector('#tomorrow-afterTemp-MaxSD2').textContent = currentTempCelciusMax_day3;

  const currentTempKelvinMin_day3 = result[2].temp_min;
  const currentTempCelciusMin_day3 = Math.round(currentTempKelvinMin_day3 - 273.15);
  document.querySelector('#tomorrow-afterTemp-MinSD2').textContent = currentTempCelciusMin_day3;

  // ICON
  const weather_icon_day3 = document.querySelector('#weather-icon-afterTomorrowSD2');
  const icon_weather_day3 = `http://openweathermap.org/img/w/${data.list[15].weather[0].icon}.png`;
  weather_icon_day3.setAttribute('src', icon_weather_day3);
}