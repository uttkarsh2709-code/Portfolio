// ✅ Animated Typing Name
const typedName = document.getElementById("typed-name");
const nameText = "Uttkarsh Raj";
let index = 0;

function type() {
  if (index < nameText.length) {
    typedName.textContent += nameText.charAt(index);
    index++;
    setTimeout(type, 150);
  }
}
window.onload = type;

// ✅ Dark/Light Mode Toggle
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const icon = toggleBtn.querySelector("i");
  if (document.body.classList.contains("dark-mode")) {
    icon.classList.replace("fa-moon", "fa-sun");
  } else {
    icon.classList.replace("fa-sun", "fa-moon");
  }
});

// ✅ Animated Skill Bars on Scroll
const skillBars = document.querySelectorAll(".skill-bar");

function animateSkills() {
  skillBars.forEach((bar) => {
    const rect = bar.getBoundingClientRect();
    const fill = bar.querySelector(".progress-fill");
    if (rect.top < window.innerHeight - 100) {
      const width = bar.getAttribute("data-skill");
      fill.style.width = width + "%";
    }
  });
}

window.addEventListener("scroll", animateSkills);
animateSkills(); // initial check

// ✅ Smooth Scroll (already via CSS, but reinforce for Safari)
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// ✅ Contact Form Feedback
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const formMessage = document.getElementById("form-message");
  formMessage.textContent = "Thanks for your message! I’ll get back soon.";
  formMessage.style.color = "#00c6ff";
  this.reset();

  setTimeout(() => {
    formMessage.textContent = "";
  }, 4000);
});

