const courses = [
  { code: "WDD 130", name: "Web Fundamentals", credits: 2, completed: true },
  { code: "WDD 231", name: "Frontend Development I", credits: 3, completed: false },
  { code: "CSE 121", name: "Programming Concepts", credits: 3, completed: true },
  { code: "CSE 110", name: "Introduction to Programming", credits: 2, completed: true }
];

const coursesContainer = document.querySelector("#courses");
const totalCreditsEl = document.querySelector("#totalCredits");
const filterAll = document.querySelector("#all");
const filterWdd = document.querySelector("#wdd");
const filterCse = document.querySelector("#cse");

function displayCourses(courseList) {
  coursesContainer.innerHTML = "";

  courseList.forEach(course => {
    const div = document.createElement("div");
    div.classList.add("course");
    div.setAttribute('role', 'article');
    div.setAttribute('aria-label', `${course.code} - ${course.name}`);

    if (course.completed) {
      div.classList.add("completed");
    }

    div.innerHTML = `<strong>${course.code}</strong>: ${course.name} (<span class="credit">${course.credits}</span> credits)`;
    coursesContainer.appendChild(div);
  });

  const totalCredits = courseList.reduce(
    (sum, course) => sum + course.credits,
    0
  );

  totalCreditsEl.textContent = totalCredits;
}

function setActiveFilter(button) {
  [filterAll, filterWdd, filterCse].forEach(b => {
    b.classList.remove('active-filter');
    b.setAttribute('aria-pressed', 'false');
  });
  button.classList.add('active-filter');
  button.setAttribute('aria-pressed', 'true');
}

// Filter Buttons
filterAll.addEventListener("click", () => {
  setActiveFilter(filterAll);
  displayCourses(courses);
});

filterWdd.addEventListener("click", () => {
  setActiveFilter(filterWdd);
  displayCourses(courses.filter(course => course.code.startsWith("WDD")));
});

filterCse.addEventListener("click", () => {
  setActiveFilter(filterCse);
  displayCourses(courses.filter(course => course.code.startsWith("CSE")));
});

// Footer dates
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// Initial load
displayCourses(courses);
setActiveFilter(filterAll);
