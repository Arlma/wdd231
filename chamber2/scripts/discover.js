// In /scripts/discover.js
import { attractions } from '../data/attractions.mjs';

// Now use the attractions array directly
function displayCards() {
    const container = document.getElementById('attractions-container');
    
    attractions.forEach(attraction => {
        let card = document.createElement('section');
        card.classList.add('attraction-card');
        card.innerHTML = `
            <h2>${attraction.name}</h2>
            <figure>
                <img src="${attraction.image}" alt="${attraction.name}" loading="lazy" width = "300" height = "200">
            </figure>
            <address>${attraction.address}</address>
            <p>${attraction.description}</p>
            <button class="learn-more-btn">Learn More</button>
        `;
        container.appendChild(card);
    });
}

function trackVisit() {
    const visitMessage = document.getElementById('visitor-message');
    const lastVisit = localStorage.getItem('lastVisit');
    const now = Date.now();
    localStorage.setItem('lastVisit', now);

    if (!lastVisit) {
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const lastVisitNum = parseInt(lastVisit);
        const daysSince = Math.floor((now - lastVisitNum) / (1000 * 60 * 60 * 24));

        if (daysSince < 1) {
            visitMessage.textContent = "Back so soon! Awesome!";
        } else if (daysSince === 1) {
            visitMessage.textContent = `You last visited 1 day ago.`;
        } else {
            visitMessage.textContent = `You last visited ${daysSince} days ago.`;
        }
    }
}

// Initialize the page
displayCards();
trackVisit();