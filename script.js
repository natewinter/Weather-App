// var APIKey = "i&appid=9a5d6e36f72300cd983f4720a162dd94";
// var city = $("#search")

// // var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + APIKey;
// <!-- city name and current day -->
// <div id="city"></div>
// document.name
// <!-- temperature  -->
// <div id="temperature"></div>
// .main.temp
// <!-- humidity -->
// <div id="humidity"></div>
// .main.humidity
// <!-- wind speed -->
// <div id="windSpeed"></div>
// .main.wind.speed
// <!-- uv index -->
// <div id="uvIndex"></div>


var city = $("#search")
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Bujumbura,Burundi&appid=166a433c57516f51dfab1f7edaed8413"

// var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "i&appid=9a5d6e36f72300cd983f4720a162dd94"
// 
        $(".btn").on("click", function(){
            $.ajax({
                url:queryURL,
                method: "GET"
                

            }).then(function(response){
                console.log(response)

                 var tempF = (response.main.temp - 273.15) * 1.8 + 32;


                $("#city").html("<h1>" + response.name + "Weather Details </h1>");
                $("#humidity").text("Humidity: "+ response.main.humidity);
                $("#windSpeed").text("Wind Speed: " + response.wind.speed);
                // $("#temperature").text("Temperature (F)" + tempF.tofixed(2));
                // $("#uvIndex")
                
            })
        })