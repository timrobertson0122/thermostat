describe('Thermostat UI', function() {
  
  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures();
    // $.holdReady(false);
  });

  it('displays default temperature', function(){
    expect("#display").toContainText('20');
  });

  // it('increases temperature when Up arrow is cicked', function(){
  //   ('#up').click();
  //   expect('#display').toContainText('21');
  // });









});
