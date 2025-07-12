document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.dropdown > a').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();

      const menu = el.nextElementSibling;

      // Close other menus
      document.querySelectorAll('.dropdown-menu.show').forEach(function (openMenu) {
        if (openMenu !== menu) {
          openMenu.classList.remove('show');
        }
      });

      // Toggle current menu
      menu.classList.toggle('show');
    });
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.navbar')) {
      document.querySelectorAll('.dropdown-menu.show').forEach(function (menu) {
        menu.classList.remove('show');
      });
    }
  });
});
