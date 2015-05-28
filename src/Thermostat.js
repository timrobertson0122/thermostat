function Thermostat () {
  this.minTemp = 10
  this.temp = 20
  this.maxTemp = 25
  this.powerSave = true
};

Thermostat.prototype.increase = function() {
  if((this.powerSave === true && this.temp < 25) 
     || (this.powerSave === false && this.temp < 32)) {
    this.temp += 1
  } 
};

Thermostat.prototype.decrease = function() {
  if(this.temp > 10) {
    this.temp -= 1
  }
};

Thermostat.prototype.resetThermostat = function() {
  this.temp = 20
  this.maxTemp = 25
  this.powerSave = true
};

Thermostat.prototype.powerSaveButton = function() {
  if(this.powerSave === true)  {
    this.maxTemp = 32;
    this.powerSave = false;
  } 
  else 
  {
    this.maxTemp = 25;
    this.powerSave = true;
    this.temp = 25;
  }
};
