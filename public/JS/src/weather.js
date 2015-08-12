$(document).ready( function(){
  $('#city-search').submit( function(event){
    event.preventDefault();
    var cityInput = $('input[name=city]').val();
    console.log(cityInput);
    var apiString = 'http://api.openweathermap.org/data/2.5/weather?q=';
      $.get(apiString + cityInput, function(data){
        $('#city-weather').text(data.weather[0].description);
        console.log(data.weather[0].description);
        $('#city-temp').text(Math.round(data.main.temp - 273.15));
        console.log(data.main.temp);
      });
   });
});