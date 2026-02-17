import { saveTheme, loadTheme } from "./storage.js";

// ================= HAMBURGER MENU =================
const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
}

// ================= DARK MODE =================
const themeBtn = document.getElementById("theme-btn");

if (themeBtn) {
  loadTheme();
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    saveTheme();
  });
}

// ================= FETCH OPPORTUNITIES =================
async function getData() {
  const container = document.getElementById("opportunity-list");
  if (!container) return;

  try {
    const response = await fetch("data/opportunities.json");
    const data = await response.json();
    displayData(data);
  } catch (error) {
    console.error("Error loading data:", error);
  }
}

function displayData(data) {
  const container = document.getElementById("opportunity-list");
  if (!container) return;

  container.innerHTML = "";

  data.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h3>${item.title}</h3>
      <p><strong>Organization:</strong> ${item.organization}</p>
      <p><strong>Country:</strong> ${item.country}</p>
      <p><strong>Deadline:</strong> ${item.deadline}</p>
      <button class="more-btn">More Details</button>
    `;

    card.querySelector(".more-btn").addEventListener("click", () => showModal(item));
    container.appendChild(card);
  });
}

// ================= MODAL CODE =================
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");

function showModal(item) {
  document.getElementById("modal-title").textContent = item.title;
  document.getElementById("modal-org").textContent = "Organization: " + item.organization;
  document.getElementById("modal-country").textContent = "Country: " + item.country;
  document.getElementById("modal-deadline").textContent = "Deadline: " + item.deadline;

  modal.hidden = false;
}

if (closeModal) {
  closeModal.addEventListener("click", () => {
    modal.hidden = true;
  });
}

// Click outside modal to close
if (modal) {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.hidden = true;
    }
  });
}

// ================= LOAD DATA =================
getData();
