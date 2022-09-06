function displayTemperature(response) {
  //4 console.log(response.data.main.temp);

  let temp = Math.round(response.data.main.temp);
  let city = response.data.name;
  let message = `It is ${temp} degrees in ${city}`;
  let h1 = document.querySelector("h1");
  h1.innerHTML = message;
}

let apiKey = "c95d60a1e3adbeb286133f1ebebc2579";
let city = "Kyiv";
let units = "metric";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

axios.get(apiUrl).then(displayTemperature);
