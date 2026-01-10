const spotlightContainer = document.getElementById("spotlight-cards") || document.getElementById('spotlight-grid');

async function loadSpotlights() {
  try {
    const response = await fetch("data/members.json");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();

    // data is an array of members — membership 2 = silver, 3 = gold
    const qualified = data.filter(m => m.membership === 2 || m.membership === 3);

    // choose 2 or 3 random spotlights
    const count = Math.random() < 0.5 ? 2 : 3;
    const selected = qualified.sort(() => 0.5 - Math.random()).slice(0, count);

    spotlightContainer.innerHTML = selected.map(member => `
      <article class="spotlight">
        <img src="images/${member.image}" alt="${member.name} logo">
        <h3>${member.name}</h3>
        <p>${member.phone}</p>
        <p>${member.address}</p>
        <a href="${member.website}" target="_blank" rel="noopener noreferrer">Visit Website</a>
        <p><strong>${member.membership === 3 ? 'Gold' : 'Silver'} Member</strong></p>
      </article>
    `).join("");
  } catch (err) {
    console.error('Failed to load spotlights', err);
    spotlightContainer.innerHTML = '<p>Unable to load spotlights at this time.</p>';
  }
}

loadSpotlights();
