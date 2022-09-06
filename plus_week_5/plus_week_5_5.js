function showTemperature(response) {
  let temp = Math.round(response.data.main.temp);

  console.log(temp);
  let h1 = document.querySelector("h1");
  h1.innerHTML = temp;
}

function showPosition(position) {
  console.log(position);
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  console.log(latitude);
  console.log(longitude);
  let apiKey = "c95d60a1e3adbeb286133f1ebebc2579";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}

navigator.geolocation.getCurrentPosition(showPosition);
