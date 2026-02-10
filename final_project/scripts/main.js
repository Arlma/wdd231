import { saveTheme, loadTheme } from "./storage.js";


const menuBtn = document.querySelector("#menu-btn");
const nav = document.querySelector("#nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("show");
});

// THEME LOCAL STORAGE
const themeBtn = document.querySelector("#theme-btn");
if (themeBtn) {
  loadTheme();
  themeBtn.addEventListener("click", saveTheme);
}

// FETCH DATA
let showModal; // Declare showModal in outer scope

async function getData() {
  const container = document.querySelector("#opportunity-list");
  if (!container) return; // Only fetch if container exists
  
  try {
    const response = await fetch("data/opportunities.json");
    const data = await response.json();
    displayData(data);
  } catch (error) {
    console.error("Error loading data", error);
  }
}

function displayData(data) {
  const container = document.querySelector("#opportunity-list");
  if (!container) return;

  // Using map() array method to transform data into card elements
  const cards = data.map(item => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h3>${item.title}</h3>
      <p><strong>Organization:</strong> ${item.organization}</p>
      <p><strong>Country:</strong> ${item.country}</p>
      <p><strong>Deadline:</strong> ${item.deadline}</p>
      <button class="more-btn">More Details</button>
    `;

    card.querySelector(".more-btn").addEventListener("click", () => {
      if (showModal) showModal(item);
    });

    return card;
  });

  // Append all cards to container
  cards.forEach(card => container.appendChild(card));
}

// MODAL CODE
const modal = document.querySelector("#modal");
const closeBtn = document.querySelector("#close-modal");

if (modal && closeBtn) {
  showModal = function(item) {
    const titleEl = document.querySelector("#modal-title");
    const orgEl = document.querySelector("#modal-org");
    const countryEl = document.querySelector("#modal-country");
    const deadlineEl = document.querySelector("#modal-deadline");
    
    if (titleEl) titleEl.textContent = item.title;
    if (orgEl) orgEl.innerHTML = `<strong>Organization:</strong> ${item.organization}`;
    if (countryEl) countryEl.innerHTML = `<strong>Country:</strong> ${item.country}`;
    if (deadlineEl) deadlineEl.innerHTML = `<strong>Deadline:</strong> ${item.deadline}`;
    modal.hidden = false;
    // Save to localStorage
    localStorage.setItem("lastViewed", JSON.stringify(item));
  };

  closeBtn.addEventListener("click", () => {
    modal.hidden = true;
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.hidden = true;
    }
  });
}

// Load data when DOM is ready
getData();

