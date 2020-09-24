var queryURL = "https://api.openweathermap.org/data/2.5/weather?"
var apiKey = "&appid=166a433c57516f51dfab1f7edaed8413"


// var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "i&appid=9a5d6e36f72300cd983f4720a162dd94"
// 
function startProgram(){
    var city = $("#search").val().trim();
    searchCity(city)
}
function citySidebar(city) {
    $("#cityList").empty()
    var localItem = JSON.parse(localStorage.getItem("cities"))
    if (!(localItem)) {
        localItem = []
    }
    localItem.push(city)
    localItem = [...new Set(localItem)]
    if (localItem.length>5){
        localItem.slice(-5)
    }
    
    localStorage.setItem("cities", JSON.stringify(localItem))

    for (item of localItem) {
        console.log(item)
        var liEL = $("<li>")
        liEL.text(item)
        liEL.attr("class", "list-group-items list-group-items-action")
        liEL.on("click", function () {
            searchCity($(this).text())
        })
        $("#cityList").append(liEL)
    }
}



function searchCity(city) {
    var inputURL = queryURL + "&q=" + city + apiKey
    $.ajax({
            url: inputURL,
            method: "GET"
        })
        .then(function (response) {
            console.log(response)
            console.log(city)

            var tempF = (response.main.temp - 273.15) * 1.8 + 32;

            $("#city").html("<h1>" + response.name + " Weather Details </h1>");
            $("#humidity").text("Humidity: " + response.main.humidity);
            $("#windSpeed").text("Wind Speed: " + response.wind.speed);
            // $("#temperature").text("Temperature (F)" + tempF.tofixed(2));
            // $("#uvIndex")
            citySidebar(response.name)
        })
}
$(".btn").on("click", startProgram)