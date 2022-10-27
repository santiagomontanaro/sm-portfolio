let barsMenu = document.getElementById("btn");
let menu = document.getElementById("navs__menu");
let showOverlay = document.getElementById("show-overlay");
if (menu.classList == "hide-menu" && showOverlay.id == "show-overlay") {
  barsMenu.addEventListener("click", () => {
    menu.classList.toggle("hide-menu");
    showOverlay.classList.toggle("show-overlay");
  });
  showOverlay.addEventListener("click", () => {
    menu.classList.toggle("hide-menu");
    showOverlay.classList.toggle("show-overlay");
  });
  for (let i = 0; i < menu.children.length; i++) {
    menu.children[i].addEventListener("click", () => {
      menu.classList.toggle("hide-menu");
      showOverlay.classList.toggle("show-overlay");
    });
  }
}