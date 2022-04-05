const navLinks = document.getElementById('navLinks');
const showMenu = document.getElementById('menuBar');
const hideMenu = document.getElementById('closeIcon');
const closeMenu = document.getElementById('navItems');

showMenu.onclick = function showMenu() {
  navLinks.style.left = '0';
};

hideMenu.onclick = function hideMenu() {
  navLinks.style.left = '420px';
};

closeMenu.onclick = function hideMenu() {
  navLinks.style.left = '420px';
};