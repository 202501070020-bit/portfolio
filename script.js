// Smooth scrolling for all links
document.querySelectorAll("a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// Scroll animation (fade-in effect)
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const position = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            section.classList.add("show");
        }
    });
});


// Dark mode toggle
const toggleBtn = document.createElement("button");
toggleBtn.innerText = "🌙 Dark Mode";
toggleBtn.classList.add("dark-btn");
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        toggleBtn.innerText = "☀ Light Mode";
    } else {
        toggleBtn.innerText = "🌙 Dark Mode";
    }
});


// Contact click alert
const contactSection = document.querySelector("section:last-of-type");

contactSection.addEventListener("click", () => {
    alert("Thanks for visiting my portfolio! 😊");
});
