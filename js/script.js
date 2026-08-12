const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const button = dropdown.querySelector(".dropdown-toggle");

  button.addEventListener("click", (event) => {
    event.stopPropagation();

    // Cerrar los demás
    dropdowns.forEach((otherDropdown) => {
      if (otherDropdown !== dropdown) {
        otherDropdown.classList.remove("active");
      }
    });

    // Abrir / cerrar actual
    dropdown.classList.toggle("active");
  });
});

// Click fuera de los menús
document.addEventListener("click", () => {
  dropdowns.forEach((dropdown) => {
    dropdown.classList.remove("active");
  });
});

/* =========================================
   MOBILE MENU
========================================= */

const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
const siteHeader = document.querySelector(".site-header");

mobileMenuToggle.addEventListener("click", () => {
  siteHeader.classList.toggle("mobile-menu-open");
});
