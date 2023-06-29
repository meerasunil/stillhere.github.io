// Function to fetch weather data from the API
function fetchWeatherData() {
  var apiKey = "e6ffc2983e4a45e3818221008231406";
  var weatherUrl = "https://api.weatherapi.com/v1/current.json?key=e6ffc2983e4a45e3818221008231406&q=London&aqi=no";
  var timeUrl = "https://api.weatherapi.com/v1/timezone.json?key=e6ffc2983e4a45e3818221008231406&q=London";

  // Make the first API call to fetch weather data
  fetch(weatherUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (weatherData) {
      // Extract weather information from the response
      var location = weatherData.location.name + ", " + weatherData.location.country;
      var temperature = weatherData.current.temp_c;
      var condition = weatherData.current.condition.text;

      // Make the second API call to fetch time data
      fetch(timeUrl)
        .then(function (response) {
          return response.json();
        })
        .then(function (timeData) {
          // Extract time information from the response
          var time = timeData.localtime;
          

          // Update the HTML elements with weather and time data
          document.getElementById("location").textContent = "Location: " + location;
          document.getElementById("temperature").textContent = "Temperature: " + temperature + "°C";
          document.getElementById("condition").textContent = "Condition: " + condition;
          document.getElementById("time").textContent = "Time: " + time;
        })
        .catch(function (error) {
          console.log("Error fetching time data:", error);
        });
    })
    .catch(function (error) {
      console.log("Error fetching weather data:", error);
    });
}

// Call the fetchWeatherData function to retrieve weather and time data
fetchWeatherData();
