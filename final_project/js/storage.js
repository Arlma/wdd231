export function saveTheme() {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark"));
}

export function loadTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "true") document.body.classList.add("dark");
}
