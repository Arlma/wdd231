// ================================
// COURSE DATA (12+ TOTAL CREDITS)
// ================================
const courses = [
  { code: "WDD 130", title: "Web Fundamentals", credits: 3, completed: true },
  { code: "WDD 231", title: "Frontend Development I", credits: 3, completed: false },
  { code: "CSE 110", title: "Programming Basics", credits: 2, completed: true },
  { code: "CSE 111", title: "Programming with Functions", credits: 2, completed: true },
  { code: "WDD 131", title: "Dynamic Web Fundamentals", credits: 2, completed: true }
];

// ================================
// DOM REFERENCES
// ================================
const courseContainer = document.querySelector("#courses");
const creditDisplay = document.querySelector("#credits");

// ================================
// DISPLAY COURSES
// ================================
function displayCourses(courseArray) {
  courseContainer.innerHTML = "";

  courseArray.forEach(course => {
    const card = document.createElement("div");
    card.classList.add("course");

    if (course.completed) {
      card.classList.add("completed");
    }

    card.textContent = `${course.code} – ${course.title} (${course.credits} credits)`;
    courseContainer.appendChild(card);
  });

  updateCredits(courseArray);
}

// ================================
// UPDATE TOTAL CREDITS (REDUCE)
// ================================
function updateCredits(courseArray) {
  const total = courseArray.reduce((sum, course) => sum + course.credits, 0);
  creditDisplay.textContent = total;
}

// ================================
// FILTER FUNCTIONS
// ================================
document.querySelector("#all").addEventListener("click", () => {
  displayCourses(courses);
});

document.querySelector("#wdd").addEventListener("click", () => {
  const filtered = courses.filter(course => course.code.startsWith("WDD"));
  displayCourses(filtered);
});

document.querySelector("#cse").addEventListener("click", () => {
  const filtered = courses.filter(course => course.code.startsWith("CSE"));
  displayCourses(filtered);
});

document.querySelector("#twoCredits").addEventListener("click", () => {
  const filtered = courses.filter(course => course.credits === 2);
  displayCourses(filtered);
});

document.querySelector("#threeCredits").addEventListener("click", () => {
  const filtered = courses.filter(course => course.credits === 3);
  displayCourses(filtered);
});

// ================================
// INITIAL PAGE LOAD
// ================================
displayCourses(courses);

