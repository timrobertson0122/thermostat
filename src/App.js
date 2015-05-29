thermostat = new Thermostat();

$(document).ready(function() {
  if(thermostat.powerSave) {
    document.getElementById('psm_on').checked = true;
  }
  else {
    document.getElementById('psm_off').checked = true;
  };
  document.getElementById('display').innerHTML = thermostat.temp;
});

function pressIncrease() {
  thermostat.increase();
  update();
}

function pressDecrease() {
  thermostat.decrease();
  update();
}

function pressResetThermostat() {
  thermostat.resetThermostat();
  document.getElementById('psm_on').checked = true;
  document.getElementById('psm_off').checked = false;
  update();
}

function pressPowerSaveButton() {
  thermostat.powerSaveButton();
  update();
}

function update() {
  // postTemperatureToAPI();
  document.getElementById('display').innerHTML = thermostat.temp;
}

// function postTemperatureToAPI() {
//   var xmlhttp = new XMLHttpRequest();
//   xmlhttp.open("POST", "/temperature_records", true);
//   xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//   xmlhttp.send("temperature=" + thermostat.temp);
// }
