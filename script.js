// ==========================
// MOBILE NAVIGATION
// ==========================

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");
const navigationLinks = document.querySelectorAll(".nav-links a");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const isExpanded = navLinks.classList.contains("active");

    menuBtn.setAttribute("aria-expanded", isExpanded);

    menuBtn.textContent = isExpanded ? "✕" : "☰";

});


// Close mobile navigation after clicking a link

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuBtn.setAttribute("aria-expanded", "false");

        menuBtn.textContent = "☰";

    });

});


// ==========================
// CONTACT FORM
// ==========================

const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", function (event) {

    // Prevent the browser from reloading the page
    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    formMessage.textContent =
        `Thank you, ${name}! Your message was entered successfully.`;

    // Clear the form
    contactForm.reset();

});


// ==========================
// CURRENT YEAR
// ==========================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ==========================
// ACTIVE NAVIGATION LINK
// ==========================

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", function () {

    let currentSection = "home";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });

    navigationLinks.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }

    });

});