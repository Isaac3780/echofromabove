/* Mobile menu */
(function () {
  const hamburger = document.querySelector(".hamburger");
  const navbar = document.querySelector(".navbar");
  if (hamburger && navbar) {
    hamburger.addEventListener("click", function () {
      navbar.classList.toggle("menu-open");
    });
    navbar.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { navbar.classList.remove("menu-open"); });
    });
  }
})();

/* White nav on scroll */
(function () {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;
  function onScroll() {
    if (window.scrollY > 40) { navbar.classList.add("scrolled"); }
    else { navbar.classList.remove("scrolled"); }
  }
  window.addEventListener("scroll", onScroll);
  onScroll();
})();

/* Animated counters */
(function () {
  const statEls = document.querySelectorAll(".stat .number");
  if (!statEls.length) return;

  function animate(el) {
    const target = parseFloat(el.dataset.count || el.textContent) || 0;
    const duration = 1600;
    const start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased).toLocaleString();
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  let started = false;
  function onScroll() {
    if (started) return;
    const rect = statEls[0].getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
      started = true;
      statEls.forEach(animate);
    }
  }
  window.addEventListener("scroll", onScroll);
  onScroll();
})();