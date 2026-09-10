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

/* Salvation celebration (canvas-confetti) */
window.salvationCelebrate = function () {
  if (typeof confetti === "undefined") return;
  const colors = ["#ff5f6d", "#ffd93d", "#6bcb77", "#4d96ff", "#c56cf0", "#ff9f45", "#ffd700", "#ff8fab"];
  setTimeout(function () {
    /* Big screen-filling burst from center */
    confetti({
      particleCount: 260,
      spread: 100,
      startVelocity: 45,
      origin: { x: 0.5, y: 0.5 },
      colors: colors,
      scalar: 1.4,
      ticks: 220,
      zIndex: 9999
    });
    /* Cannon shots up from both bottom corners */
    confetti({
      particleCount: 120,
      spread: 70,
      startVelocity: 55,
      angle: 60,
      origin: { x: 0, y: 1 },
      colors: colors,
      scalar: 1.3,
      ticks: 200,
      zIndex: 9999
    });
    confetti({
      particleCount: 120,
      spread: 70,
      startVelocity: 55,
      angle: 120,
      origin: { x: 1, y: 1 },
      colors: colors,
      scalar: 1.3,
      ticks: 200,
      zIndex: 9999
    });
    /* Second big pop from the center */
    setTimeout(function () {
      confetti({
        particleCount: 180,
        spread: 140,
        startVelocity: 40,
        origin: { x: 0.5, y: 0.35 },
        colors: colors,
        scalar: 1.4,
        ticks: 200,
        zIndex: 9999
      });
    }, 350);
  }, 1000);
};