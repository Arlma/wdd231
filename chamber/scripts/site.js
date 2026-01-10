// site-wide small utilities (year and lastModified)
(function () {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
  const lm = document.getElementById('lastModified');
  if (lm) lm.textContent = document.lastModified || '—';
})();
