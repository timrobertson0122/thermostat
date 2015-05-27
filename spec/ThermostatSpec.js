describe('Thermostat', function()  {

  var thermostat;

    beforeEach(function()   {
      thermostat = new Thermostat();
    });

  describe('a working thermostat', function()  {
    
    it('is set at a default temperature of 20', function()   {
      expect(thermostat.temp).toBe(20);
    });

    it('is set to Power Saving mode on with max temp of 25', function() {
      expect(thermostat.powerSave).toBe(true);
      expect(thermostat.maxTemp).toBe(25);
    });

    it('has a minimum temperature of 10', function()   {
      expect(thermostat.minTemp).toBe(10);
    });

    it('has a button to increase the temperature by one', function()   {
      thermostat.increase()
      expect(thermostat.temp).toBe(21);
    });

    it('has a button to decrease the temperature by one', function()   {
      thermostat.decrease()
      expect(thermostat.temp).toBe(19);
    });

    it('can be reset to default settings', function()   {
      thermostat.increase()
      thermostat.powerSaveButton()
      thermostat.resetThermostat()
      expect(thermostat.temp).toBe(20);
      expect(thermostat.maxTemp).toBe(25);
      expect(thermostat.powerSave).toBe(true);
    });

    it('has a maximum temp of 32 when Power Saving Mode is off', function() {
      thermostat.powerSaveButton()
      expect(thermostat.maxTemp).toBe(32);
    });

    it('has a maximum temp of 25 when PSM is on', function()  {
      thermostat.maxTemp = 32
      thermostat.powerSave = false
      thermostat.powerSaveButton()
      expect(thermostat.maxTemp).toBe(25);
    });

  });

})