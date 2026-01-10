// Replace with your OpenWeatherMap API key. Leave empty to show instructions.
const apiKey = ""; // e.g. "abcd1234yourkey"
const city = "Kampala";

async function getWeather() {
  const target = document.getElementById("weather");
  if (!apiKey) {
    target.innerHTML = '<p>Please add your OpenWeatherMap API key in <code>chamber/scripts/weather.js</code> to display live weather.</p>';
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();

    // current (first item) and 3-day forecast at 12:00
    const current = data.list[0];
    document.getElementById("current-temp").textContent = Math.round(current.main.temp);
    document.getElementById("weather-desc").textContent = current.weather[0].description;

    const forecast = data.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 3);
    const html = forecast.map(day => {
      const d = new Date(day.dt_txt);
      return `<div class="forecast-day"><strong>${d.toLocaleDateString(undefined,{weekday:'short', month:'short', day:'numeric'})}</strong>: ${Math.round(day.main.temp)}°C</div>`;
    }).join('');

    document.getElementById('forecast').innerHTML = html;
  } catch (err) {
    target.innerHTML = `<p>Unable to load weather data: ${err.message}</p>`;
    console.error(err);
  }
}

getWeather();
