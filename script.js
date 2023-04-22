
var btn = document.querySelector('button');

function  wether() {

   

    btn.style.display ='none'

    var lat = document.getElementById('lat')
    var long = document.getElementById('long')
    var h2 = document.querySelector('h2')
    h2.style.display = 'block'
    // var Map = document.getElementById('map')


    
        if(navigator.geolocation){
          navigator.geolocation.getCurrentPosition(getlatlong,error)
        }
      
  
        function getlatlong(data){
          console.log(data.coords.latitude)
          lat.innerText =`Lat:  ${data.coords.latitude}`
          long.innerText = `Long: ${data.coords.longitude}`



          var myLat = data.coords.latitude;  
          var myLong = data.coords.longitude;

          var coords = new google.maps.LatLng(myLat,myLong);

          var mapOptions = {

            zoom : 9,
            center : coords,
            mapTypeId : google.maps.MapTypeId.ROADMAP
          }

          var map = new google.maps.Map(document.getElementById('map'),mapOptions)
          // var marker = new google.maps.marker({map:map,position:coords})
          var marker = new google.maps.Marker({
            map: map,
            position: coords
          });
        } 

        // navigator.geolocation.getCurrentPosition(function(position) {
         

          const apiKey = '5a636bd1aa58fce26629d11583ba73fc';

          const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${apiKey}`;


          fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
            // Process the weather data here
               console.log(data);
               navigator.geolocation.getCurrentPosition(function(position) {

                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
              
                console.log(latitude)
                console.log(longitude)

                const locationElement = document.getElementById('location');
                const latElement = document.getElementById('Lat');
                const timeZoneElement = document.getElementById('timeZone');
                const pressureElement = document.getElementById('pressure');
                const windSpeedElement = document.getElementById('wind-speed');
                const humidityElement = document.getElementById('humidity');
                const windDirectionElement = document.getElementById('windDirection');
                const uvindexElement = document.getElementById('uvindex');
                const longElement = document.getElementById('Long');
          
                locationElement.innerHTML =`Location: ${data.location}`
                latElement.innerHTML = `Latitude: ${latitude}`;
                timeZoneElement.innerHTML = `Time Zone: ${data.timezone}`;
                pressureElement.innerHTML = `Pressure: ${data.main.pressure} hPa`;
                windSpeedElement.innerHTML = `Wind Speed: ${data.wind.speed} m/s`;
                humidityElement.innerHTML = `Humidity: ${data.main.humidity}%`;
                windDirectionElement.innerHTML = `Wind Direction: ${data.wind.deg}°`;
                uvindexElement.innerHTML = `UV Index: ${data.main.uvi}`;
                longElement.innerHTML = `Longitude: ${longitude}`;

                console.log("my data")
              })
            
              .catch(error => console.log(error))
            
              
            })
          
             
           
      
        
        function error(data) {
          console.log(data)
          alert("cannot read location")
        }
        

      }
      
      
      
    