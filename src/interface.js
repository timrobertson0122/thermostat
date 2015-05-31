thermostat = new Thermostat();

$(document).ready(function(){

  var OpenWeather = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk'

  $.getJSON(OpenWeather, function(data) {
    getTemp = data.main.temp;
    temp = temperatureConverter(getTemp);
    $('#outsideTemperature').html(temp);
  });

  function temperatureConverter(temp){
    temp = temp - 273.15;
    return temp.toFixed(1);
  };

  $('#temp').text(thermostat.temp());
  $('#temp').text(function(){
    updateColor();
  });

  $('#up').click(function(){
    thermostat.upButton();
    updateColor();
    $('#temp').text(thermostat.temp());
  });

  $('#down').click(function(){
    thermostat.downButton();
    updateColor();
    $('#temp').text(thermostat.temp());
  });

  $('#resetbutton').click(function(){
    thermostat.resetThermostat();
    updateColor();
    $('#temp').text(thermostat.temp());
  });

  $('#psStatus').click(function(){
    thermostat.psButton();
    $('#temp').text(thermostat.temp());
  });

});