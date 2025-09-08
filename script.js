// ========= Smooth Scroll for Navigation =========
document.querySelectorAll("nav a").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// ========= Scroll to Top Button =========
const scrollBtn = document.createElement("button");
scrollBtn.innerText = "⬆";
scrollBtn.id = "scrollTopBtn";
document.body.appendChild(scrollBtn);

scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.padding = "10px 15px";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.background = "#e94560";
scrollBtn.style.color = "white";
scrollBtn.style.fontSize = "18px";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ========= Dark/Light Theme Toggle =========
const themeBtn = document.createElement("button");
themeBtn.innerText = "🌙 Dark Mode";
themeBtn.id = "themeBtn";
document.querySelector("header").appendChild(themeBtn);

themeBtn.style.marginTop = "15px";
themeBtn.style.padding = "8px 14px";
themeBtn.style.background = "#fff";
themeBtn.style.color = "#333";
themeBtn.style.border = "1px solid #ccc";
themeBtn.style.borderRadius = "6px";
themeBtn.style.cursor = "pointer";
themeBtn.style.fontWeight = "bold";

let darkMode = false;
themeBtn.addEventListener("click", () => {
  darkMode = !darkMode;
  if (darkMode) {
    document.body.style.background = "#121212";
    document.body.style.color = "#f0f0f0";
    themeBtn.innerText = "☀️ Light Mode";
  } else {
    document.body.style.background = "#f4f6f9";
    document.body.style.color = "#333";
    themeBtn.innerText = "🌙 Dark Mode";
  }
});

// ========= Typing Effect in Header =========
const typingText = ["Web Developer", "Python Programmer", "Database Enthusiast"];
let i = 0, j = 0, currentText = "", isDeleting = false;

function typeEffect() {
  const headerSub = document.querySelector("header p");
  if (!headerSub) return;

  if (isDeleting) {
    currentText = typingText[i].substring(0, j--);
  } else {
    currentText = typingText[i].substring(0, j++);
  }
  headerSub.innerHTML = currentText;

  if (!isDeleting && j === typingText[i].length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % typingText.length;
    setTimeout(typeEffect, 300);
  } else {
    setTimeout(typeEffect, isDeleting ? 80 : 120);
  }
}
typeEffect();

// ========= Project Filter =========
const filterBtns = document.createElement("div");
filterBtns.id = "projectFilters";
filterBtns.innerHTML = `
  <button data-filter="all">All</button>
  <button data-filter="web">Web</button>
  <button data-filter="python">Python</button>
  <button data-filter="other">Other</button>
`;
document.querySelector("#projects").prepend(filterBtns);

document.querySelectorAll("#projectFilters button").forEach(btn => {
  btn.style.margin = "5px";
  btn.style.padding = "8px 14px";
  btn.style.border = "none";
  btn.style.background = "#e94560";
  btn.style.color = "white";
  btn.style.borderRadius = "5px";
  btn.style.cursor = "pointer";
});

document.querySelectorAll("#projectFilters button").forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter");
    document.querySelectorAll(".project-card").forEach(card => {
      if (filter === "all" || card.classList.contains(filter)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
