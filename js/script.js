function toggleNav() {
  var navMenu = document.querySelector('.navbar-menu');
  if (navMenu.style.left === '-100%') {
    navMenu.style.left = '0';
  } else {
    navMenu.style.left = '-100%';
  }
}
