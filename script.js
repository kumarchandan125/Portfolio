// 🌙 Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Check saved theme in localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.classList.add(savedTheme);
  themeToggle.textContent = savedTheme === "dark" ? "☀️" : "🌙";
}

// Toggle theme on click
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");

  let theme = "light";
  if (body.classList.contains("dark")) {
    theme = "dark";
    themeToggle.textContent = "☀️";
  } else {
    themeToggle.textContent = "🌙";
  }
  localStorage.setItem("theme", theme);
});



// 📅 Footer Year Auto Update
document.getElementById("year").textContent = new Date().getFullYear();

// 🎬 Scroll Reveal Animation
const sections = document.querySelectorAll(".section");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach((sec) => {
    const sectionTop = sec.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      sec.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// 🎨 Add reveal styles dynamically
const style = document.createElement("style");
style.innerHTML = `
  .section {
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.8s ease-out;
  }
  .section.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);


// Auto update year in footer
document.getElementById("year").textContent = new Date().getFullYear();
