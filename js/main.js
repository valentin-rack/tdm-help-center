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