// join.js
document.addEventListener("DOMContentLoaded", () => {
  // Find the hidden timestamp input
  const timestampField = document.getElementById("timestamp");

  // Fill it with the current date and time
  if (timestampField) {
    timestampField.value = new Date().toISOString();
  }
});
