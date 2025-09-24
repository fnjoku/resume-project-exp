// ===============================
// Resume Page Script
// (Follows Lessons 1–3 from the handout)
// ===============================

// ----- Lesson 1: Variables & console log -----
let name = "Favour Njoku";
console.log(`Hello, my name is ${name}`);

// Extra variables for contact/title (nice to have)
let email = "njo250623@oru.edu";
let title = "Student";

// ----- Lesson 2: More variables & DOM updates -----
let education = "Oral Roberts University";
let experience = "Tutoring, Programming Projects, Volunteer";

// Update the HTML content via DOM (per instructions)
document.getElementById("name").textContent = `${name} — ${title}`;
const emailEl = document.getElementById("email");
emailEl.textContent = email;
emailEl.href = `mailto:${email}`;

document.getElementById("education").textContent = `Education: ${education}`;
document.getElementById("experience").textContent = `Experience: ${experience}`;

// ----- Lesson 3: Arrays, Loops, and Interactivity -----
// A skills array; feel free to adjust
let skills = ["HTML", "CSS", "JavaScript", "Git/GitHub", "Problem Solving"];

// Create a <ul> and populate it dynamically from the array
let skillsList = document.createElement("ul");
for (let i = 0; i < skills.length; i++) {
  let li = document.createElement("li");
  li.textContent = skills[i];
  skillsList.appendChild(li);
}

// Insert the skills list into a dedicated container
document.getElementById("skills-container").appendChild(skillsList);

// Interactivity: fun fact button
function showFunFact() {
  // Feel free to expand this with multiple facts:
  const facts = [
    "Fun Fact: I love playing instruments!",
    "Fun Fact: My favorite code editor theme is Night Owl.",
    "Fun Fact: I can eat a whole KFC bucket in my sleep.",
  ];
  // Pick a random fact to keep it interesting
  const random = facts[Math.floor(Math.random() * facts.length)];
  alert(random);
}

// Attach handler (improves on inline onclick)
document.getElementById("fun-btn").addEventListener("click", showFunFact);

// Optional polish: stamp a “last updated” time in the footer
document.getElementById("updated").innerHTML =
  `<em>Last updated:</em> ${new Date().toLocaleString()}`;
