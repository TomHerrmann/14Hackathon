const weatherAPIURL = 'http://api.openweathermap.org/data/2.5/weather?id=5128638&units=imperial&APPID=fd855b304a1527194bbd531dbe4f61e2';

const weatherData = fetch(weatherAPIURL)
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        const iconID = response['weather'][0]['icon'];
        document.getElementById('temp').innerHTML = response['main']['temp'];

        // Image 
        const weatherIcon = document.createElement('img');
        weatherIcon.src = `http://openweathermap.org/img/wn/${iconID}@2x.png`;
        temp.appendChild(weatherIcon);
    });