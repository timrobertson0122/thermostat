describe('Interface', function() {
  
  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = './';
    loadFixtures('Thermostat.html');
    $.holdReady(false);
  });

  it('displays default temperature', function(){
    expect("#temp").toContainText('20');
  });

  it('is set to PSM on', function(){
    expect("#psm_on").toBeChecked();
  });

  it('increases temperature when up arrow is cicked', function(){
    $('#up').click();
    expect('#temp').toContainText('21');
  });

  it('decreases temperature when down arrow is cicked', function(){
    $('#down').click();
    expect('#temp').toContainText('19');
  });

  it('resets to temp 20 and PSM on when reset button is click', function(){
    $('#resetbutton').click();
    expect('#temp').toContainText('20');
    expect("#psm_on").toBeChecked();
  });

  it('has PSM off checked when clicked', function(){
    $('#psm_off').click();
    expect("#psm_off").toBeChecked();
  })

  it('has PSM on after turning off and back on', function(){
    $('#psm_off').click();
    $('#psm_on').click();
    expect("#psm_on").toBeChecked();
  })

});
