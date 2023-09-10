const button = document.getElementById("toTop");
//  change navbar and toTopButton class on scroll
function useScroll() {
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      navbar.classList.replace("position-absolute", "navbar-sticy");
      navbar.classList.replace("bg-opacity-10", "bg-opacity-50");
      button.classList.add("show");
    } else {
      navbar.classList.replace("navbar-sticy", "position-absolute");
      button.classList.remove("show");
      navbar.classList.replace("bg-opacity-50", "bg-opacity-10");
    }
  });
}

// scroll to top

function useScrollToTop() {
  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

document.addEventListener("DOMContentLoaded", useScroll);
document.addEventListener("DOMContentLoaded", useScrollToTop);
