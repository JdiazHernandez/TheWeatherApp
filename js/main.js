/*Weather App*/
$(document).ready(function() {

    if (navigator.geolocation.getCurrentPosition) {
     
    navigator.geolocation.getCurrentPosition(function(position) {
       var latitude = position.coords.latitude;
       var longitude = position.coords.longitude;  
     $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat=" + latitude + "&" + "lon=" + longitude, function(responseText,statusText, xhr) { 
       if (statusText == "success") {
          var icon=responseText.weather[0].icon;     
        switch (responseText.weather[0].main) {

                case "Clear":
                     $("<img src=" + icon + ">").appendTo('#icon');
                     $("html").css("background-image", "url(https://res.cloudinary.com/inspiredbytravel/image/upload/v1523813341/Stavanger.jpg)" );
                     break;
                     
                 case "Clear-night":
                      $("<img src=" + icon + ">").appendTo('#icon');
                      $("html").css("background-image", "url(https://res.cloudinary.com/inspiredbytravel/image/upload/v1526898727/paris.jpg)" );
                     break;
                     
                 case "Rain":
                      $("<img src=" + icon + ">").appendTo('#icon');
                     $("html").css("background-image", "url(https://res.cloudinary.com/inspiredbytravel/image/upload/v1526902179/Brussels_street_Belgium.jpg)" );
                     break;
                     
                 case "Snow":
                      $("<img src=" + icon + ">").appendTo('#icon');
                      $("html").css("background-image", "url(https://res.cloudinary.com/inspiredbytravel/image/upload/v1526897125/lapland.jpg)" );
                     break;
                     
                 case "Sleet":
                     $("<img src=" + icon + ">").appendTo('#icon');
                     $("html").css("background-image", "url(https://res.cloudinary.com/inspiredbytravel/image/upload/v1523813250/Rovanievi.jpg)" );
                     break;
                     
                 case "Wind":
                      $("<img src=" + icon + ">").appendTo('#icon');
                      $("html").css("background-image", "url(https://res.cloudinary.com/inspiredbytravel/image/upload/v1523813124/Kulm_railroad.jpg)" );
                     break;
                     
                 case "Fog":
                      $("<img src=" + icon + ">").appendTo('#icon');
                      $("html").css("background-image", "url(https://res.cloudinary.com/inspiredbytravel/image/upload/v1526902179/Brussels_street_Belgium.jpg)" );
                     break;
                     
                 case "Clouds":
                     $("<img src=" + icon + ">").appendTo('#icon');
                     $("html").css("background-image", "url(https://res.cloudinary.com/inspiredbytravel/image/upload/v1523813124/Kulm_railroad.jpg)" );
                     break;
                     
                 case "Partly-cloudy-day":
                     $("<img src=" + icon + ">").appendTo('#icon');
                     $("html").css("background-image", "url(https://res.cloudinary.com/inspiredbytravel/image/upload/v1523813025/Vuvuzela_Tronheim.jpg)" );
                     break;
                     
                 case "Partly-cloudy-night":
                     $("<img src=" + icon + ">").appendTo('#icon');
                     $("html").css("background-image", "url(https://res.cloudinary.com/inspiredbytravel/image/upload/v1526902527/Aurora.jpg)" );
                     break;
                        }
                  var city = responseText.name;
                 var country = responseText.sys.country;
    
                 $("#city").html(city + ", " + country);
                $("#condition").html(responseText.weather[0].description)
                 /* Change from celsius to Fahrenheit*/
                 var changeTemperature = false;
                 
                 $("#temperature").html(responseText.main.temp + " °C");
    
                 $("#temperature").click(function() {
                     if(!changeTemperature) {
                         var f = Math.round(responseText.main.temp * 9/5 + 32);
                         $("#temperature").html(f + " °F");
                         changeTemperature = true;
                     } else {
                         $("#temperature").html(responseText.main.temp + " °C");
                         changeTemperature = false;
                     }
                 }); 
           } else {
               $("#errorMessage").html("No information available");
               }     
             });
         }); 
     } 
    });
