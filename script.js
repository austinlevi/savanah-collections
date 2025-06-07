document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('menu-toggle');
  const overlay = document.getElementById('mobileMenu');
  const closeBtn = document.getElementById('menuClose');

  toggle.addEventListener('click', function () {
    overlay.classList.add('active');
  });

  closeBtn.addEventListener('click', function () {
    overlay.classList.remove('active');
  });
});
