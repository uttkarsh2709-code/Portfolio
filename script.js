// =============================
// ✨ Typing Effect for Name
// =============================
const typedName = document.getElementById("typed-name");
const nameText = "Uttkarsh Raj";
let index = 0;

function typeName() {
  if (index < nameText.length) {
    typedName.textContent += nameText.charAt(index);
    index++;
    setTimeout(typeName, 120);
  } else {
    typedName.classList.add("glow");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeName();
  initTheme();
});

// =============================
// 🌙 Dark / Light Mode Toggle
// =============================
const toggleBtn = document.getElementById("toggle-mode");

function initTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    toggleBtn.textContent = "☀️ Light Mode";
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
  }
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️ Light Mode";
    localStorage.setItem("theme", "dark");
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
    localStorage.setItem("theme", "light");
  }
});

// =============================
// 🚀 Animate Skill Bars on Scroll
// =============================
const skills = document.querySelectorAll(".progress-fill");

function animateSkills() {
  skills.forEach(skill => {
    const level = skill.getAttribute("data-level");
    skill.style.width = level + "%";
  });
}

window.addEventListener("scroll", () => {
  const trigger = window.innerHeight / 1.3;
  skills.forEach(skill => {
    const top = skill.getBoundingClientRect().top;
    if (top < trigger) {
      animateSkills();
    }
  });
});

// =============================
// 💬 Contact Form Submission
// =============================
const contactForm = document.getElementById("contact-form");
const formMsg = document.getElementById("form-msg");

if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    formMsg.textContent = "Sending...";
    formMsg.style.color = "#60a5fa";

    try {
      const res = await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();
      if (data.success) {
        formMsg.textContent = "✅ Message sent successfully!";
        formMsg.style.color = "#4ade80";
        contactForm.reset();
      } else {
        throw new Error();
      }
    } catch (error) {
      formMsg.textContent = "❌ Failed to send message. Try again later.";
      formMsg.style.color = "#f87171";
    }
  });
}
