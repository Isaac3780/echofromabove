/* Mobile hamburger menu */
(function () {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", function () {
      navLinks.classList.toggle("open");
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("open");
      });
    });
  }
})();

/* Slideshow helpers */
document.querySelectorAll(".slideshow").forEach(function (slideshow) {
  const images = Array.from(slideshow.querySelectorAll("img"));
  const prev = slideshow.querySelector(".prev");
  const next = slideshow.querySelector(".next");
  const dots = Array.from(slideshow.querySelectorAll(".dot"));
  let current = 0;

  function show(index) {
    if (!images.length) return;
    if (index < 0) index = images.length - 1;
    if (index > images.length - 1) index = 0;
    current = index;
    images.forEach(function (img, i) {
      img.style.display = i === current ? "block" : "none";
    });
    dots.forEach(function (dot, i) {
      dot.classList.toggle("active", i === current);
    });
  }

  if (prev) prev.addEventListener("click", function () { show(current - 1); });
  if (next) next.addEventListener("click", function () { show(current + 1); });
  dots.forEach(function (dot, i) {
    dot.addEventListener("click", function () { show(i); });
  });
  show(0);
});

/* Global carousel helper: elements with [data-carousel] expect prev/next inside */
document.querySelectorAll("[data-carousel]").forEach(function (carousel) {
  const images = Array.from(carousel.querySelectorAll("img"));
  const prev = carousel.querySelector(".prev");
  const next = carousel.querySelector(".next");
  const dots = Array.from(carousel.querySelectorAll(".dot"));
  let current = 0;

  function show(index) {
    if (!images.length) return;
    if (index < 0) index = images.length - 1;
    if (index > images.length - 1) index = 0;
    current = index;
    images.forEach(function (img, i) {
      img.style.display = i === current ? "block" : "none";
    });
    dots.forEach(function (dot, i) {
      dot.classList.toggle("active", i === current);
    });
  }

  if (prev) prev.addEventListener("click", function () { show(current - 1); });
  if (next) next.addEventListener("click", function () { show(current + 1); });
  dots.forEach(function (dot, i) {
    dot.addEventListener("click", function () { show(i); });
  });
  show(0);
});

/* Lightbox for galleries */
const lightbox = document.querySelector(".lightbox");
function openLightbox(src) {
  if (!lightbox) return;
  lightbox.querySelector("img").src = src;
  lightbox.classList.add("open");
}

document.querySelectorAll(".gallery img").forEach(function (img) {
  img.addEventListener("click", function () {
    openLightbox(img.src);
  });
});

if (lightbox) {
  lightbox.addEventListener("click", function () {
    lightbox.classList.remove("open");
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") lightbox.classList.remove("open");
  });
}

/* Active nav link */
(function () {
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(function (a) {
    const href = a.getAttribute("href");
    if (href === path || (path === "" && href === "index.html")) {
      a.classList.add("active");
    }
  });
})();