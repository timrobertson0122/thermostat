thermostat = new Thermostat

window.onload = function WindowLoad(event) {
  if(thermostat.powerSave === true) {
    document.getElementById('psm_on').checked = true;
  }
  else {
    document.getElementById('psm_off').checked = true;
  };
  document.getElementById('display').innerHTML = thermostat.temp
};

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
  document.getElementById('display').innerHTML = thermostat.temp;
}