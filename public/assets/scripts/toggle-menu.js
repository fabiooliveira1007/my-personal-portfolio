const menu = document.querySelector(".header__content");
const menuItems = document.querySelectorAll(".header__content__menu__link");
const hamburguer = document.querySelector(".header__menu__btn");
const closeIcon= document.querySelector(".header__menu__btn__close-icon");
const menuIcon = document.querySelector(".header__menu__btn__open-icon");


function toggleMenu () {
  if (menu.classList.contains("show-menu")) {
    menu.classList.remove("show-menu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
    
  } else {
      menu.classList.add("show-menu");
      closeIcon.style.display = "block";
      menuIcon.style.display = "none";
  }
}


hamburguer.addEventListener("click", toggleMenu);

menuItems.forEach(
  function(menuItem) {
    menuItem.addEventListener("click", toggleMenu);
  }
)