//Get and display the weather data
document.getElementById("search").onkeypress = function(event) {
    if (event.keyCode == 13 || event.which == 13) {
        getWeatherData(document.getElementById("search").value); 
        //displayWeatherData(); 
    }
}

function getWeatherData (cityName) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=31b2a5013f4c6aafb5060edf826d41ca')
        .then(response => {
            return response.json()
        })
        .then(data => {
            if (data.cod == "404") {
                document.getElementById("city").innerHTML = "There has been an error. Make sure you typed the name of the city correctly."; 
                console.log("404 Error");
                document.getElementById("temp").innerHTML = ""; 
                document.getElementById("feels-like").innerHTML = ""; 
                document.getElementById("weather").innerHTML = "";

            } else {
                console.log(data);

                document.getElementById("city").innerHTML = "The Weather In: " + data.name; 
                document.getElementById("temp").innerHTML = "The Temperature is " + (data.main.temp - 273.15).toFixed(1) + "ºC"; 
                document.getElementById("feels-like").innerHTML = "It feels like " + (data.main.feels_like - 273.15).toFixed(1) + "ºC outside"; 
                

                if (data.weather[0].description == "clear sky") {
                    document.getElementById("weather").innerHTML = "The sky is clear ";

                //Clouds
                } else if (data.weather[0].description == "few clouds") {
                    document.getElementById("weather").innerHTML = "It's slightly cloudy outside ";
                } else if (data.weather[0].description == "scattered clouds") {
                    document.getElementById("weather").innerHTML = "There are scattered clouds outside ";
                } else if (data.weather[0].description == "broken clouds") {
                    document.getElementById("weather").innerHTML = "There are broken clouds outside ";
                } else if (data.weather[0].description == "overcast clouds") {
                    document.getElementById("weather").innerHTML = "It's cloudly outside ";
                
                //Precipitation
                } else if (data.weather[0].main == "Drizzle") {
                    document.getElementById("weather").innerHTML = "It's drizzling outside ";
                } else if (data.weather[0].main == "Rain") {
                    document.getElementById("weather").innerHTML = "It's raining outside ";
                } else if (data.weather[0].main == "Snow") {
                    document.getElementById("weather").innerHTML = "It's snowing outside ";
                } else if (data.weather[0].main == "Thunderstorm") {
                    document.getElementById("weather").innerHTML = "There are thunderstorms ";

                //Atmosphere
                } else if (data.weather[0].main == "Mist") {
                    document.getElementById("weather").innerHTML = "It's misty outside ";
                } else if (data.weather[0].main == "Fog") {
                    document.getElementById("weather").innerHTML = "It's foggy outside ";
                } else if (data.weather[0].main == "Tornado") {
                    document.getElementById("weather").innerHTML = "It's tornado weather! ";
                } else if (data.weather[0].main == "Dust") {
                    document.getElementById("weather").innerHTML = "It's dusty outside! ";
                } 
            }
        })
        .catch(err => {
        })
    
}



