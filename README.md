Mock thermostat with OpenWeather API
===================================

Try it out on Heroku
http://jsthermostat.herokuapp.com/

![Screenshot](/img/Screen.png)


Specification
-------------

### Thermostat

- Thermostat starts at 20 degrees  
- You can increase the temp with the up button  
- You can decrease the temp with the down button  
- The minimum temperature is 10 degrees  
- If power saving mode is on, the maximum temperature is 25 degrees  
- If power saving mode is off, the maximum temperature is 32 degrees  
- Power saving mode is on by default  
- You can reset the temperature to 20 by hitting the reset button  

### API

- Uses a JQuery AJAX call to query the OpenWeather API
- Selects current forecase and temperature data
- Returns data in user-friendly format

Technologies
------------

Jquery/Javascript  
Tested with Jasmine 
Styled with Bootstrap

### Future Functionality

Save state between browser refreshes by implementing a remote API  
Styling to better imitate a thermostat, provide colour to reflect temperature changes
