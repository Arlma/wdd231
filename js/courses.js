// js/courses.js
// Dynamic course list, filtering, and credits calculation using reduce

const courses = [
  { code: "WDD130", title: "Web Fundamentals", subject: "WDD", credits: 2, completed: true },
  { code: "WDD131", title: " Dynamic Web Fundamentals", subject: "WDD", credits: 2, completed: true },
  { code: "WDD231", title: "Web fronted Development", subject: "WDD", credits: 2, completed: false },
  { code: "CSEPC110", title: "Intro to Programming", subject: "CSE", credits: 2, completed: true },
  { code: "CSE212", title: " Programming with Data Structures", subject: "CSE", credits: 2, completed: true },
 { code: "CSE111", title: "Programming with functions", subject: "CSE", credits: 2, completed: false }
];

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function createCourseCard(course) {
  const statusClass = course.completed ? 'course-completed' : 'course-incomplete';
  return `
    <article class="course-card ${statusClass}" aria-labelledby="${course.code}-title">
      <h3 id="${course.code}-title">${course.code} — ${escapeHtml(course.title)}</h3>
      <p>Subject: <strong>${course.subject}</strong></p>
      <p>Credits: <strong>${course.credits}</strong></p>
      <p class="status">${course.completed ? 'Completed ✔' : 'Not completed'}</p>
    </article>
  `;
}

function displayCourses(list) {
  const container = document.getElementById('courses');
  if (!container) return;
  if (list.length === 0) {
    container.innerHTML = '<p>No courses to display.</p>';
  } else {
    container.innerHTML = list.map(createCourseCard).join('');
  }
  updateCredits(list);
}

function updateCredits(list) {
  const total = list.reduce((sum, c) => sum + (Number(c.credits) || 0), 0);
  const creditsEl = document.getElementById('credits');
  if (creditsEl) creditsEl.textContent = total;
}

function filterBy(subject) {
  if (!subject || subject === 'ALL') return courses.slice();
  return courses.filter(c => c.subject.toUpperCase() === subject);
}

function setActiveFilter(button) {
  document.querySelectorAll('.filters button').forEach(b => b.classList.remove('active'));
  if (button) button.classList.add('active');
}

function initCourseUI() {
  const allBtn = document.getElementById('all');
  const wddBtn = document.getElementById('wdd');
  const cseBtn = document.getElementById('cse');

  if (allBtn) allBtn.addEventListener('click', () => {
    displayCourses(filterBy('ALL'));
    setActiveFilter(allBtn);
  });

  if (wddBtn) wddBtn.addEventListener('click', () => {
    displayCourses(filterBy('WDD'));
    setActiveFilter(wddBtn);
  });

  if (cseBtn) cseBtn.addEventListener('click', () => {
    displayCourses(filterBy('CSE'));
    setActiveFilter(cseBtn);
  });

  // initial render
  displayCourses(filterBy('ALL'));
  if (allBtn) setActiveFilter(allBtn);
}

document.addEventListener('DOMContentLoaded', initCourseUI);

// Export for testing/debug if environment exposes modules (safe noop otherwise)
try { window._courses = courses; } catch (e) { /* ignore */ }
