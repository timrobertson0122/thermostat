function Thermostat() {
  this._temp = 20
  this._powerSave = true
};

Thermostat.prototype.temp = function() {
  return this._temp;
};

Thermostat.prototype.upButton = function() {
  if (this._powerSave && this._temp < 25) {
    this._temp ++;
  }; 
  if (this._powerSave === false && this._temp < 32) {
    this._temp ++;
  };
};

Thermostat.prototype.downButton = function() {
  if(this._temp > 10) {
    this._temp --;
  };
};

Thermostat.prototype.psStatus = function() {
  return this._powerSave;
};

Thermostat.prototype.resetThermostat = function() {
  this._temp = 20;
  this._powerSave;
};

Thermostat.prototype.psButton = function() {
  this._powerSave = !this._powerSave;
  if (this._temp > 25) {
    this._temp = 25;
  };
};