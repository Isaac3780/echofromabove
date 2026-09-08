/* Mobile menu */
(function () {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", function () {
      navLinks.classList.toggle("open");
    });
    navLinks.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { navLinks.classList.remove("open"); });
    });
  }
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