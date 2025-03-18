const openMenu = document.querySelector(".openMenu");
const closeMenu = document.querySelector(".closeMenu");
const menulist = document.querySelector(".mobileNav");

const showMenu = () => {
  menulist.classList.add("showList");
  openMenu.classList.add("showmenu");
  closeMenu.classList.add("showmenu");
};

const hideMenu = () => {
  menulist.classList.remove("showList");
  openMenu.classList.remove("showmenu");
  closeMenu.classList.remove("showmenu");
};

// Add event listeners
openMenu.addEventListener("click", showMenu);
closeMenu.addEventListener("click", hideMenu);
