const URL =
  "https://api.open-meteo.com/v1/forecast?latitude=28.61&longitude=77.21&current=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min&timezone=Asia%2FKolkata";

const city = document.querySelector("#city");
const date = document.querySelector("#date");
const temp = document.querySelector("#temp");

const getData = async () => {
  let response = await fetch(URL);
  console.log(response);
  let fetchedData = await response.json();
  console.log(fetchedData);
  city.innerText = fetchedData.location.name;
  let currentDate = fetchedData.data.time;
  const localTime = new Date(currentDate);
  date.innerText =
    localTime.toLocaleTimeString() + " " + localTime.toLocaleDateString();
  temp.innerText = fetchedData.data.values.temperature;
};

getData();
