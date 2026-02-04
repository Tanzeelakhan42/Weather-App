const URL =
  "https://api.weatherapi.com/v1/forecast.json?key=ab9000497cb0416e967143758263101&q=Delhi";
const city = document.querySelector("#city");
const date = document.querySelector("#date");
const temp = document.querySelector("#tempLeft");
const windSpeed = document.querySelector("#windSpeedLeft");
const humidity = document.querySelector("#humidityLeft");
const tempRight = document.querySelector("#tempRight");
const windSpeedRight = document.querySelector("#windSpeedRight");
const humidityRight = document.querySelector("#humidityRight");
const greeting = document.querySelector("#upperSecRightLine1");
const timeRight = document.querySelector("#upperSecRightLine2");
const feelsLike = document.querySelector("#upperSecRightLine4");
const time1Temp = document.querySelector("#time1Temp");
const time2Temp = document.querySelector("#time2Temp");
const time3Temp = document.querySelector("#time3Temp");
const time4Temp = document.querySelector("#time4Temp");
const time5Temp = document.querySelector("#time5Temp");
const time6Temp = document.querySelector("#time6Temp");
const time1Condition = document.querySelector("#time1Condition");
const time2Condition = document.querySelector("#time2Condition");
const time3Condition = document.querySelector("#time3Condition");
const time4Condition = document.querySelector("#time4Condition");
const time5Condition = document.querySelector("#time5Condition");
const time6Condition = document.querySelector("#time6Condition");

const getData = async () => {
  let response = await fetch(URL);
  console.log(response);
  let data = await response.json();
  console.log(data);
  city.innerText = data.location.name;
  date.innerText = data.forecast.forecastday[0].date;
  temp.innerText = data.current.temp_c;
  windSpeed.innerText = data.current.wind_mph + " mph";
  humidity.innerText = data.current.humidity + " %";

  const dateObj = new Date(data.location.localtime);
  const hour = dateObj.getHours();
  if (hour >= 5 && hour < 12) {
    greeting.innerText = "Good Morning";
  } else if (hour >= 12 && hour < 17) {
    greeting.innerText = "Good Afternoon";
  } else if (hour >= 17 && hour < 21) {
    greeting.innerText = "Good Evening";
  } else {
    greeting.innerText = "Good Night";
  }
  timeRight.innerText = data.forecast.forecastday[0].date;
  tempRight.innerText = data.current.temp_c;
  windSpeedRight.innerText = data.current.wind_mph + " mph";
  humidityRight.innerText = data.current.humidity + " %";
  feelsLike.innerText = "Feels like " + data.current.feelslike_c;

  time1Temp.innerText = data.forecast.forecastday[0].hour[13].temp_c;
  time2Temp.innerText = data.forecast.forecastday[0].hour[14].temp_c;
  time3Temp.innerText = data.forecast.forecastday[0].hour[15].temp_c;
  time4Temp.innerText = data.forecast.forecastday[0].hour[16].temp_c;
  time5Temp.innerText = data.forecast.forecastday[0].hour[17].temp_c;
  time6Temp.innerText = data.forecast.forecastday[0].hour[18].temp_c;
  time1Condition.innerText =
    data.forecast.forecastday[0].hour[13].condition.text;
  time2Condition.innerText =
    data.forecast.forecastday[0].hour[14].condition.text;
  time3Condition.innerText =
    data.forecast.forecastday[0].hour[15].condition.text;
  time4Condition.innerText =
    data.forecast.forecastday[0].hour[16].condition.text;
  time5Condition.innerText =
    data.forecast.forecastday[0].hour[17].condition.text;
  time6Condition.innerText =
    data.forecast.forecastday[0].hour[18].condition.text;
};
getData();
