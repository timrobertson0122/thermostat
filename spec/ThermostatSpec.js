describe('Thermostat', function() {

  var thermostat;

    beforeEach(function() {
      thermostat = new Thermostat();
    });

  describe('when created', function()  {
    
    it('is set at a default temperature of 20', function()   {
      expect(thermostat.temp).toBe(20);
    });

    it('is set to Power Saving mode on', function() {
      expect(thermostat.powerSave).toBe(true);
      // expect(thermostat.maxTemp).toBe(25);
    });
  });

  describe('can', function() {

    it('increase the temperature by one with the up button', function() {
      thermostat.upButton()
      expect(thermostat.temp).toBe(21);
    });

    it('decrease the temperature by one with the down button', function() {
      thermostat.downButton()
      expect(thermostat.temp).toBe(19);
    });

    it('can be reset to default settings', function() {
      for (var i = 0; i < 20; i ++) {
        thermostat.upButton();
      };
      thermostat.resetThermostat();
      expect(thermostat.temp()).toBe(20);
    });

    it('toggle power saving mode off', function() {
      thermostat.psButton();
      expect(thermostat.powerSave()).toBe(false);
    });

    it('sets the maximum temp to 25 when PSM is on', function() {
      thermostat.psButton();
      for (var i = 0; i < 20; i ++) {
      thermostat.upButton();
      };
      thermostat.upButton();
      expect(thermostat.temp()).toBe(25); 
    });
  });

  describe('has', function() {

    it('has a minimum temperature of 10', function() {
      for (var i = 0; i < 20; i ++) {
        thermostat.downButton();
      };
      expect(thermostat.temp()).toBe(10);
    });

    it('a maximum temp of 25 with power saving mode on', function() {
      for (var i = 0; i < 20; i ++) {
        thermostat.upButton();
      };
      expect(thermostat.temp()).toBe(25);
    });

    it('a maximum temp of 32 with power saving mode off', function() {
      thermostat.psButton();
      for (var i = 0; i < 20; i ++) {
        thermostat.upButton();
      };
      expect(thermostat.temp()).toBe(32);
    });
  });

  // describe('displays', function() {

  //   it('green when temp is less than 18', function() {
  //     for (var i = 0; i < 20; i ++) {
  //       thermostat.downButton();
  //     };
  //     expect(thermostat.tempColor()).toBe('green');
  //   });

  //   it('yellow when temp is less than 25', function() {
  //     for (var i = 0; i < 2; i ++) {
  //       thermostat.upButton();
  //     };
  //     expect(thermostat.tempColor()).toBe('yellow');
  //   });

  //   it('red when temp is 25 or above', function() {
  //     for (var i = 0; i < 20; i ++) {
  //       thermostat.upButton();
  //     };
  //     expect(thermostat.tempColor()).toBe('red');
  //   });
  // });
});