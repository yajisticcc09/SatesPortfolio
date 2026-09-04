// ================================
// CURSOR GLOW
// ================================

const glow = document.querySelector(".glow");

document.addEventListener("mousemove", (e) => {

  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";

});


// ================================
// SCROLL REVEAL
// ================================

const observer = new IntersectionObserver(

  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("show");

      }

    });

  },

  {
    threshold: 0.12
  }

);

document
  .querySelectorAll(".reveal")
  .forEach((element) => {

    observer.observe(element);

  });


// ================================
// COLOR PALETTE GENERATOR
// ================================

const preview = document.getElementById("preview");
const hex = document.getElementById("hex");
const generate = document.getElementById("generate");


generate.addEventListener("click", () => {

  const hue =
    Math.floor(Math.random() * 55) + 195;

  const saturation =
    Math.floor(Math.random() * 25) + 65;

  const lightness =
    Math.floor(Math.random() * 18) + 68;


  const color =
    `hsl(${hue}, ${saturation}%, ${lightness}%)`;


  preview.style.background = color;


  // Convert HSL to RGB so we can show HEX
  const temp = document.createElement("div");

  temp.style.color = color;

  document.body.appendChild(temp);


  const rgb =
    getComputedStyle(temp)
      .color
      .match(/\d+/g)
      .map(Number);


  temp.remove();


  const hexValue =
    "#" +
    rgb
      .map((value) =>
        value.toString(16).padStart(2, "0")
      )
      .join("")
      .toUpperCase();


  hex.textContent = hexValue;

});


// ================================
// SMOOTH ANCHOR LINKS
// ================================

document
  .querySelectorAll('a[href^="#"]')
  .forEach((link) => {

    link.addEventListener("click", (event) => {

      const target =
        document.querySelector(
          link.getAttribute("href")
        );


      if (target) {

        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth"
        });

      }

    });

  });

  /* =========================
   DARK MODE
========================= */

const themeToggle = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  themeToggle.textContent = "☀";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  const isDark = document.body.classList.contains("dark-mode");

  themeToggle.textContent = isDark ? "☀" : "☾";

  localStorage.setItem(
    "theme",
    isDark ? "dark" : "light"
  );
});