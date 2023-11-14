document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
      navbar.classList.toggle("scrolled", window.scrollY >= 100);
    });
  });
  