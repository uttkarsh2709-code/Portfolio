// Typing effect for name
const typedName = document.getElementById("typed-name");
const nameText = "Uttkarsh Raj";
let index = 0;

function typeName() {
  if (index < nameText.length) {
    typedName.textContent += nameText.charAt(index);
    index++;
    setTimeout(typeName, 150);
  }
}

// Start typing effect on DOM load
document.addEventListener("DOMContentLoaded", () => {
  typeName();
});

// Dark mode toggle
const toggleBtn = document.getElementById("toggle-mode");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Change button text accordingly
  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "Light Mode";
  } else {
    toggleBtn.textContent = "Dark Mode";
  }
});

// server.js (Node.js Express example)

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Set up transporter with your email provider
  let transporter = nodemailer.createTransport({
    service: 'Gmail', // or your email provider
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password-or-app-password',
    },
  });

  let mailOptions = {
    from: email,
    to: 'your-email@gmail.com',
    subject: `New contact from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Message sent!' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to send message.' });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
