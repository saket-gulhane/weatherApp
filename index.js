function search() {
  if (city.value.length == 0) {
    alert("Enter City Name!!");
    return false;
  }

  var req = new XMLHttpRequest();
  //   var payload = { location: null, temperature: null, humidity: null };
  var urlSend =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    document.getElementById("city").value +
    "&units=metric&appid=7a152efb80d0ac3843a672f527bfa1a3";
  req.open("GET", urlSend, true);

  req.addEventListener("load", () => {
    if (req.status >= 200 && req.status < 400) {
      var response = JSON.parse(req.responseText);
      console.log(response);

      var temp = Math.round(response.main.temp, 2);
      var temp = temp + " °C";
      var city = response.name;
      var des = response.weather[0].description;
      var img = response.weather[0].icon;
      //image
      var imageURL = "https://openweathermap.org/img/wn/" + img + "@2x.png";

      document.getElementById("location").textContent = city;
      document.getElementById("temp").textContent = temp;

      var img = document.createElement("img");
      img.src = imageURL;

      document.getElementById("image").appendChild(img);
      document.getElementById("des").textContent = des;
    } else {
      console.log("Error in network request: " + req.statusText);
    }
  });
  req.send(null);
}
