/* Dropdowns */

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const button = dropdown.querySelector(".dropdown-toggle");

  button.addEventListener("click", (event) => {
    event.stopPropagation();

    // Cierra los demás dropdowns
    dropdowns.forEach((otherDropdown) => {
      if (otherDropdown !== dropdown) {
        otherDropdown.classList.remove("active");
      }
    });

    // Abre o cierra el dropdown actual
    dropdown.classList.toggle("active");
  });
});

// Cierra los dropdowns al hacer clic fuera
document.addEventListener("click", () => {
  dropdowns.forEach((dropdown) => {
    dropdown.classList.remove("active");
  });
});

/* Menú móvil */

const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
const siteHeader = document.querySelector(".site-header");

mobileMenuToggle.addEventListener("click", () => {
  // Abre o cierra el menú móvil
  siteHeader.classList.toggle("mobile-menu-open");
});
