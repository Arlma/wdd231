const params = new URLSearchParams(window.location.search);
const output = document.getElementById("results");

const fields = ["fname", "lname", "email", "phone", "business", "timestamp"];

fields.forEach(field => {
  if (params.has(field)) {
    const p = document.createElement("p");
    p.textContent = `${field}: ${params.get(field)}`;
    output.appendChild(p);
  }
});
