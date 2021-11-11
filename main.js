const menuItemSelected = document.querySelector(
  ".menu-bar-container .menu-item-selected"
);
const menuItems = document.querySelectorAll(".menu-bar-container .menu-item");

const setMenuItemSelectedPosition = () => {
  let menuItem = menuItems[0].getBoundingClientRect();
  let xCenter = (menuItem.left + menuItem.right) / 2;

  menuItemSelected.style.left = xCenter + "px";
};

menuItems.forEach((i) => {
  i.addEventListener("click", () => {
    menuItemSelected.innerHTML = i.innerHTML;

    let menuItem = i.getBoundingClientRect();
    let xCenter = (menuItem.left + menuItem.right) / 2;

    menuItemSelected.style.left = xCenter + "px";
  });
});

setMenuItemSelectedPosition();
