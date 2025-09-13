// temples

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const mainNav = document.getElementById("main-nav");
    const currentYear = document.getElementById("currentyear");
    const lastModifiedSpan = document.getElementById("last-modified-value");

  // set current year
if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

  // set last modified (use document.lastModified)
if (lastModifiedSpan) {
    lastModifiedSpan.textContent = document.lastModified || "Unknown";
}

  // hamburger toggle for mobile
if (hamburger && mainNav) {
    hamburger.addEventListener("click", () => {
        const isOpen = mainNav.classList.toggle("open");
      // toggle aria-expanded for accessibility
        hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");

      // change hamburger icon to X when open (simple transform)
    if (isOpen) {
        hamburger.classList.add("open");
        hamburger.setAttribute("aria-label", "Close menu");
    } else {
        hamburger.classList.remove("open");
        hamburger.setAttribute("aria-label", "Open menu");
            }
        });
    }
});
