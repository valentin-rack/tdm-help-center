// -------------- Lógica nav-menu desplegable -------------- 

const btn = document.getElementById("menuToggle");
const content = document.getElementById("menuContent");
const icon = document.getElementById("menuIcon");

btn.addEventListener("click", () => {
  content.classList.toggle("hidden");
  // Cambiar flecha ▼ ▲
  icon.textContent = content.classList.contains("hidden") ? "▼" : "▲";
});

// Marcar link activo con rojo
const path = window.location.pathname.split("/").pop(); // ejemplo: "index.html"
const links = document.querySelectorAll(".menu-link");

links.forEach(link => {
  // obtener archivo del href
  const linkFile = link.getAttribute("href").split("/").pop();
  // Si coinciden, aplicar estilo activo
  if (linkFile === path) {
    link.classList.add("text-red-500");
  }
});

// Padding-top del Main
function updateMainPadding() {
    const header = document.querySelector("header");
    const main = document.querySelector("main");

    const headerHeight = header.offsetHeight;
    main.style.paddingTop = headerHeight + "px";
}

// ejecutar al cargar
window.addEventListener("load", updateMainPadding);

// ejecutar cuando se redimensiona
window.addEventListener("resize", updateMainPadding);