const navLinks = document.getElementById('navLinks');

function showMenu() {
  const showMenu = document.querySelector('.fa-bars');
  navLinks.style.right = '0';
}
function hideMenu() {
  const hideMenu = document.querySelector('.fa-times');
  navLinks.style.right = '-42rem';
}