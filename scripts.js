// Insert year and last modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Wind Chill Calculation
function calculateWindChill(T, v) {
  return 13.12 + 0.6215 * T - 11.37 * Math.pow(v, 0.16) + 0.3965 * T * Math.pow(v, 0.16);
}

const temp = parseFloat(document.getElementById("temp").textContent);
const wind = parseFloat(document.getElementById("wind").textContent);

let windChill = "N/A";
if (temp <= 10 && wind > 4.8) {
    windChill = calculateWindChill(temp, wind).toFixed(1) + " °C";
}

document.addEventListener("DOMContentLoaded", () => {
    const lastModified = document.lastModified;
    const footerDate = document.getElementById("lastModified");
    if (footerDate) {
        footerDate.textContent = `Last modified: ${lastModified}`;
    }
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
        });
    });
});

// Automatically update "Last Modified" date
document.addEventListener("DOMContentLoaded", () => {
    const lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        lastModifiedElement.textContent = document.lastModified;
    }
});

document.getElementById("windchill").textContent = windChill;


