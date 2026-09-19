// ==================== DARK/LIGHT THEME ====================

// Get the theme toggle button from the HTML.
const themeToggle = document.getElementById("theme-toggle");

// Check whether the user previously selected dark mode.
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
}

// Change the theme when the button is clicked.
themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    // Save the selected theme so it remains after refreshing the page.
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "🌙";
    }
});


// ==================== CONTACT FORM ====================

// Get the contact form and the paragraph used for feedback.
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

// The assignment does not require a backend, so prevent actual submission
// and display a confirmation message instead.
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameInput = document.getElementById("name");

    formMessage.textContent =
        `Thank you, ${nameInput.value}! Your message has been received.`;

    contactForm.reset();
});


// ==================== CURRENT YEAR ====================

// Automatically display the current year in the footer.
const currentYear = document.getElementById("current-year");
currentYear.textContent = new Date().getFullYear();