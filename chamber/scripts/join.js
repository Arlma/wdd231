// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Get the hidden timestamp input
  const timestampField = document.getElementById("timestamp");
  
  // Fill it with current date & time
  if (timestampField) {
    timestampField.value = new Date().toISOString();
  }
});
