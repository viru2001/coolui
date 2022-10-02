const hamburgMenuBtn = document.querySelector("#btn-hamburger");
const hamburgMenu = document.querySelector("#nav-menu-hamburger");
const compNavLinks = document.querySelectorAll(".nav-link-item");

let viewportWidth = window.innerWidth;

if (viewportWidth <= 885) {
  // toggle display none class
  hamburgMenuBtn.addEventListener("click", () => {
    const classes = hamburgMenu.classList;
    classes.toggle("d-none");
  });

  // hide component navigation after selecting link from nav menu
  compNavLinks.forEach(link => {
    link.addEventListener("click", () => {
      const classes = hamburgMenu.classList;
      classes.toggle("d-none");
    });
  });
}
