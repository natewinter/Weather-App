var city = $("#search").val().trim();
var queryURL = "https://api.openweathermap.org/data/2.5/weather?"
var apiKey= "&appid=166a433c57516f51dfab1f7edaed8413"


var inputURL = queryURL + apiKey + "&q=" + city
// var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "i&appid=9a5d6e36f72300cd983f4720a162dd94"
// 
$(".btn").on("click", function(){
    $.ajax({url:inputURL,method: "GET"})
    .then(function(response){
        console.log(response)
        console.log(city)
        
        var tempF = (response.main.temp - 273.15) * 1.8 + 32;

                $("#city").html("<h1>" + response.name + "Weather Details </h1>");
                $("#humidity").text("Humidity: "+ response.main.humidity);
                $("#windSpeed").text("Wind Speed: " + response.wind.speed);
                // $("#temperature").text("Temperature (F)" + tempF.tofixed(2));
                // $("#uvIndex")
                
            })
        })