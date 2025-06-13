document.addEventListener('DOMContentLoaded', function () {
  // Enable dropdown click for mobile
  if (window.innerWidth < 992) {
    document.querySelectorAll('.dropdown > a').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        const menu = el.nextElementSibling;
        if (menu) {
          const isVisible = menu.classList.contains('show');

          // Close all open menus
          document.querySelectorAll('.dropdown-menu.show').forEach(function (m) {
            m.classList.remove('show');
          });

          if (!isVisible) {
            menu.classList.add('show');
          }
        }
      });
    });

    // Handle submenu clicks if you have dropdown-submenu
    document.querySelectorAll('.dropdown-submenu > a').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        const submenu = el.nextElementSibling;
        if (submenu) {
          submenu.classList.toggle('show');
        }
      });
    });
  }

  // Global click: close dropdowns *only* when clicking outside navbar
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.navbar')) {
      document.querySelectorAll('.dropdown-menu.show').forEach(function (m) {
        m.classList.remove('show');
      });
    }
  });
});
