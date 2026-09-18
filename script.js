document.addEventListener("DOMContentLoaded", () => {
  // --- Theme Toggle Functionality ---
  const themeToggleBtn = document.getElementById("theme-toggle");
  const bodyElement = document.body;

  // Check for saved user preference in localStorage
  const savedTheme = localStorage.getItem("portfolio_theme");
  if (savedTheme === "dark") {
    bodyElement.classList.add("dark-theme");
    themeToggleBtn.textContent = "☀️";
  }

  themeToggleBtn.addEventListener("click", () => {
    bodyElement.classList.toggle("dark-theme");

    if (bodyElement.classList.contains("dark-theme")) {
      themeToggleBtn.textContent = "☀️";
      localStorage.setItem("portfolio_theme", "dark");
    } else {
      themeToggleBtn.textContent = "🌙";
      localStorage.setItem("portfolio_theme", "light");
    }
  });

  // --- Auto Typing Effect for Bio ---
  const typingElement = document.getElementById("typing-text");

  const phrases = [
    "A passionate Web Developer & MS Information Security student.",
    "A SOC/GRC-focused analyst and network defense researcher.",
    "A Flutter & UI/UX product developer building modern digital solutions.",
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 80;

  function typeEffect() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 40; // Faster deleting speed
    } else {
      typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 80; // Standard typing speed
    }

    // Pause when phrase is fully typed out
    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true;
      typingSpeed = 2000; // Wait 2 seconds before deleting
    }
    // Move to the next phrase after deletion is complete
    else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 500; // Wait half a second before typing next phrase
    }

    setTimeout(typeEffect, typingSpeed);
  }

  if (typingElement) {
    setTimeout(typeEffect, 500);
  }
});
