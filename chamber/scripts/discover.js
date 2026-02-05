import { places } from "../data/discover.mjs";

const cardsContainer = document.querySelector("#cards");

places.forEach((place, index) => {
  const card = document.createElement("section");
  card.classList.add("card", `card${index + 1}`);

  card.innerHTML = `
    <h2>${place.name}</h2>
    <figure>
      <img src="${place.image}" alt="${place.name}" loading="lazy">
    </figure>
    <address>${place.address}</address>
    <p>${place.description}</p>
    <button>Learn More</button>
  `;

  cardsContainer.appendChild(card);
});

/* ---------- localStorage Visit Message ---------- */
const messageBox = document.querySelector("#visit-message");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
  messageBox.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const days = Math.floor((now - lastVisit) / 86400000);

  if (days < 1) {
    messageBox.textContent = "Back so soon! Awesome!";
  } else {
    messageBox.textContent =
      `You last visited ${days} ${days === 1 ? "day" : "days"} ago.`;
  }
}

localStorage.setItem("lastVisit", now);
document.querySelector("#year").textContent = new Date().getFullYear();
