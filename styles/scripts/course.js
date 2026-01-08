const courses = [
  { code: "WDD 130", name: "Web Fundamentals", credits: 2, completed: true },
  { code: "WDD 231", name: "Frontend Development I", credits: 3, completed: false },
  { code: "CSE 121", name: "Programming Concepts", credits: 3, completed: true },
  { code: "CSE 110", name: "Introduction to Programming", credits: 2, completed: true }
];

const coursesContainer = document.querySelector("#courses");
const totalCreditsEl = document.querySelector("#totalCredits");

function displayCourses(courseList) {
  coursesContainer.innerHTML = "";

  courseList.forEach(course => {
    const div = document.createElement("div");
    div.classList.add("course");

    if (course.completed) {
      div.classList.add("completed");
    }

    div.innerHTML = `<strong>${course.code}</strong>: ${course.name} (${course.credits} credits)`;
    coursesContainer.appendChild(div);
  });

  const totalCredits = courseList.reduce(
    (sum, course) => sum + course.credits,
    0
  );

  totalCreditsEl.textContent = totalCredits;
}

// Filter Buttons
document.querySelector("#all").addEventListener("click", () => {
  displayCourses(courses);
});

document.querySelector("#wdd").addEventListener("click", () => {
  displayCourses(courses.filter(course => course.code.startsWith("WDD")));
});

document.querySelector("#cse").addEventListener("click", () => {
  displayCourses(courses.filter(course => course.code.startsWith("CSE")));
});

// Footer dates
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// Initial load
displayCourses(courses);
