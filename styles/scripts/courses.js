/* ============================
   COURSE DATA
============================ */
const courses = [
  { code: "WDD 130", name: "Web Fundamentals", credits: 2, completed: true },
  { code: "WDD 231", name: "Frontend Development I", credits: 3, completed: false },
  { code: "CSE 121", name: "Programming Concepts", credits: 3, completed: true },
  { code: "CSE 110", name: "Introduction to Programming", credits: 2, completed: true }
];

/* ============================
   DOM REFERENCES
============================ */
const coursesContainer = document.querySelector("#courses");
const totalCreditsEl = document.querySelector("#totalCredits");
const yearEl = document.querySelector("#year");
const lastModifiedEl = document.querySelector("#lastModified");

/* ============================
   DISPLAY + CREDIT CALCULATION
============================ */
function displayCourses(courseList) {
  coursesContainer.innerHTML = "";

  courseList.forEach(course => {
    const courseDiv = document.createElement("div");
    courseDiv.classList.add("course");

    if (course.completed) {
      courseDiv.classList.add("completed");
    }

    courseDiv.textContent = `${course.code} - ${course.name} (${course.credits} credits)`;
    coursesContainer.appendChild(courseDiv);
  });

  // REQUIRED reduce() calculation
  const totalCredits = courseList.reduce(
    (sum, course) => sum + course.credits,
    0
  );

  totalCreditsEl.textContent = totalCredits;
}

/* ============================
   FILTER BUTTON EVENTS
============================ */
document.querySelector("#all").addEventListener("click", () => {
  displayCourses(courses);
});

document.querySelector("#wdd").addEventListener("click", () => {
  const wddCourses = courses.filter(course =>
    course.code.startsWith("WDD")
  );
  displayCourses(wddCourses);
});

document.querySelector("#cse").addEventListener("click", () => {
  const cseCourses = courses.filter(course =>
    course.code.startsWith("CSE")
  );
  displayCourses(cseCourses);
});

/* ============================
   FOOTER DATES
============
