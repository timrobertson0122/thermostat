function Thermostat () {

  this.temp = 20
  this.powerSave = true
  this.minTemp = 10
  this.maxTemp = 25
};

Thermostat.prototype.powerSaveButton = function() {
  if(this.powerSave === true)  {
    this.maxTemp = 32;
    this.powerSave = false;
  } 
  else {
    this.maxTemp = 25;
    this.powerSave = true;
  }
};

Thermostat.prototype.increase = function() {
  return this.temp += 1
};

Thermostat.prototype.decrease = function() {
  return this.temp -= 1
};

Thermostat.prototype.resetThermostat = function() {
  this.temp = 20
  this.maxTemp = 25
  this.powerSave = true
};