const navItems = document.querySelectorAll(".quick-nav__item");
const pages = document.querySelectorAll(".page");

navItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    const href = item.getAttribute("href");

    // Si es un enlace externo, dejamos que el navegador
    // haga su comportamiento normal.
    if (!href.startsWith("#")) {
      return;
    }

    event.preventDefault();

    const target = href.substring(1);
    const targetPage = document.getElementById(`page-${target}`);

    if (!targetPage) {
      return;
    }

    // Ocultar todas las páginas
    pages.forEach((page) => {
      page.classList.remove("page--active");
    });

    // Mostrar la página seleccionada
    targetPage.classList.add("page--active");

    // Quitar estado activo de la navegación
    navItems.forEach((navItem) => {
      navItem.classList.remove("quick-nav__item--active");
    });

    // Activar el elemento seleccionado
    item.classList.add("quick-nav__item--active");

    // Volver arriba
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
