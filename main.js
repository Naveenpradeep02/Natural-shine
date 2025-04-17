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

//
const floatEl = document.getElementById("float");
const header = document.getElementById("header");
const headerHeight = header.offsetHeight;

window.addEventListener("scroll", () => {
  if (window.scrollY > headerHeight) {
    floatEl.style.opacity = 1;
  } else {
    floatEl.style.opacity = 0;
  }
});
