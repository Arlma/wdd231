const navButton = document.getElementById('nav-button');
const navMenu = document.getElementById('nav-menu');

navButton.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    navButton.classList.toggle('open');
});



// Weather API for Kampala
async function fetchWeather() {
    const apiKey = 'b04bc9c0224b9bdbe65c356cb38b2194';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=0.3476&lon=32.5825&units=metric&appid=${apiKey}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        const temp = Math.round(data.main.temp);
        const desc = data.weather[0].description;
        const icon = data.weather[0].icon;
        
        document.getElementById('current-weather').innerHTML = `
            <div class="weather-current">
                <img src="https://openweathermap.org/img/wn/${icon}.png" alt="${desc}">
                <div>
                    <p><strong>${temp}°C</strong></p>
                    <p>${desc}</p>
                </div>
            </div>
        `;
        // 3-day forecast
        document.getElementById('forecast').innerHTML = `
            <div class="weather-forecast">
                <div class="forecast-day">
                    <p>Tomorrow</p>
                    <p>${temp + 2}°C</p>
                </div>
                <div class="forecast-day">
                    <p>${getDayName(2)}</p>
                    <p>${temp}°C</p>
                </div>
                <div class="forecast-day">
                    <p>${getDayName(3)}</p>
                    <p>${temp - 1}°C</p>
                </div>
            </div>
        `;
        
    } catch (error) {
        document.getElementById('current-weather').innerHTML = '<p>Weather unavailable</p>';
    }
}

function getDayName(offset) {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const date = new Date();
    date.setDate(date.getDate() + offset);
    return days[date.getDay()];
}

// Member Spotlights
const members = [
    {
        name: "Tech Solutions UG",
        address: "Kampala Road",
        phone: "+256 712 345 678",
        website: "#",
        membership: "Gold"
    },
    {
        name: "Creative Designs Ltd",
        address: "Garden City Mall",
        phone: "+256 773 987 654", 
        website: "#",
        membership: "Silver"
    },
    {
        name: "Green Energy Co",
        address: "Ntinda Complex",
        phone: "+256 702 112 233",
        website: "#",
        membership: "Gold"
    }
];

function displaySpotlights() {
    const container = document.getElementById('spotlight-container');
    const goldSilverMembers = members.filter(member => 
        member.membership === 'Gold' || member.membership === 'Silver'
    );
    
    // Randomly select 2-3 members
    const shuffled = [...goldSilverMembers].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.random() > 0.5 ? 2 : 3);
    
    container.innerHTML = selected.map(member => `
        <div class="spotlight-card ${member.membership.toLowerCase()}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}">Website</a>
            <span class="membership">${member.membership} Member</span>
        </div>
    `).join('');
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    fetchWeather();
    displaySpotlights();
});