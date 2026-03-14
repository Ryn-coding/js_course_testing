const apiKey = '455eb6d49656494b1652ab07d55b1213'; // Replace with your actual OpenWeatherMap API key

function showweatherDetails(event) {
    event.preventDefault();

    const lat = document.getElementById('latitude').value.trim();
    const lon = document.getElementById('longitude').value.trim();
    const weatherInfo = document.getElementById('weatherInfo');

    if (!lat || !lon) {
        weatherInfo.innerHTML = '<p>Please enter both latitude and longitude.</p>';
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${encodeURIComponent(lat)}&lon=${encodeURIComponent(lon)}&appid=${apiKey}&units=metric`;

    fetchWeather(apiUrl, lat, lon);
}

function fetchWeather(apiUrl, lat, lon) {
    const weatherInfo = document.getElementById('weatherInfo');

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            if (data.cod && data.cod !== 200) {
                weatherInfo.innerHTML = `<p>Error: ${data.message}</p>`;
                return;
            }

            weatherInfo.innerHTML = `<h2>Weather at (${lat}, ${lon})</h2>
                                      <p>Location: ${data.name || 'N/A'}</p>
                                      <p>Temperature: ${data.main.temp} &#8451;</p>
                                      <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
        });
}

document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);