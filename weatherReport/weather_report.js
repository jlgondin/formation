function showweatherDetails(event) {
    event.preventDefault();

    const city = document.getElementById('city').value;
    const apiKey = '450ca96c75466e65eecce6d5389c2d48'; // Remplacez 'YOUR_API_KEY' par votre clé API réelle
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                    <p>Temperature: ${data.main.temp} &#8451;</p>
                                    <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
          console.error('Error fetching weather:', error);
          const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = `<p>Échec de la récupération de la météo. Veuillez réessayer.</p>`;
        });
}

function showweatherLatLonDetails(event) {
    event.preventDefault();

    const lat = document.getElementById('Lat').value;
    const lon = document.getElementById('Lon').value;
    const apiKey = '450ca96c75466e65eecce6d5389c2d48'; // Remplacez 'YOUR_API_KEY' par votre clé API réelle
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherLatLonInfo = document.getElementById('weatherLatLonInfo');
            weatherLatLonInfo.innerHTML = `<h2>Weather in ${data.coord.lat} ${data.coord.lon}</h2>
                                    <p>Temperature: ${data.main.temp} &#8451;</p>
                                    <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
          console.error('Error fetching weather:', error);
          const weatherLatLonInfo = document.getElementById('weatherLatLonInfo');
          weatherLatLonInfo.innerHTML = `<p>Échec de la récupération de la météo. Veuillez réessayer.</p>`;
        });
}

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );
document.getElementById('weatherLatLonForm').addEventListener('submit',showweatherLatLonDetails );