const apikey = "<Your API Key>";

async function getWeather() {
    const city = document.getElementById("cityName").value;
    if (!city) {
        alert("Please enter a city name!");
        return;
    }

    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    try {
        const response = await fetch(apiurl);
        const data = await response.json();
        if (response.ok) {
            const temp = data.main.temp.toFixed(2);  // Ensure the temperature is a number with 2 decimal places
            const color = temp > 28 ? "orange" : "blue";
            const weatherInfo = `
                <div class="city-name">${data.name}</div>
                <div class="temperature" style="color: ${color};">${temp}°C</div>
                <div class="details">
                    <div class="weather-description">Weather: ${data.weather[0].description}</div>
                    <div class="humidity">Humidity: ${data.main.humidity}%</div>
                </div>
            `;
            document.getElementById("weatherInfo").innerHTML = weatherInfo;
        } else {
            document.getElementById("weatherInfo").innerHTML = `<p>${data.message}</p>`;
        }
    } catch (error) {
        document.getElementById("weatherInfo").innerHTML = `<p>Cannot Fetch Weather Data!</p>`;
    }
}
