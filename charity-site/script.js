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

/* WhatsApp floating button — injected on every page */
(function () {
  if (document.querySelector(".wa-fab")) return;
  const fab = document.createElement("a");
  fab.className = "wa-fab";
  fab.href = "https://wa.me/6582683372";
  fab.target = "_blank";
  fab.rel = "noopener";
  fab.setAttribute("aria-label", "Chat on WhatsApp");
  fab.innerHTML =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.668-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';
  document.body.appendChild(fab);
})();

/* Social icons in footer bottom — injected on every page */
(function () {
  if (document.querySelector(".footer-bottom .footer-socials")) return;
  const bottom = document.querySelector(".footer-bottom");
  if (!bottom) return;
  const wrap = document.createElement("div");
  wrap.className = "footer-socials";
  wrap.innerHTML =
    '<a href="https://www.instagram.com/spiritualwalk333" target="_blank" rel="noopener" aria-label="Instagram"><svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="3.3"/><path fill="currentColor" d="M14.2,0H5.8C2.6,0,0,2.6,0,5.8v8.3C0,17.4,2.6,20,5.8,20h8.3c3.2,0,5.8-2.6,5.8-5.8V5.8C20,2.6,17.4,0,14.2,0zM10,15c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S12.8,15,10,15z M15.8,5C15.4,5,15,4.6,15,4.2s0.4-0.8,0.8-0.8s0.8,0.4,0.8,0.8S16.3,5,15.8,5z"/></svg></a>' +
    '<a href="https://www.facebook.com/share/17rr8SM1SV" target="_blank" rel="noopener" aria-label="Facebook"><svg viewBox="0 0 20 20" aria-hidden="true"><path fill="currentColor" d="M20,10.1c0-5.5-4.5-10-10-10S0,4.5,0,10.1c0,5,3.7,9.1,8.4,9.9v-7H5.9v-2.9h2.5V7.9C8.4,5.4,9.9,4,12.2,4c1.1,0,2.2,0.2,2.2,0.2v2.5h-1.3c-1.2,0-1.6,0.8-1.6,1.6v1.9h2.8L13.9,13h-2.3v7C16.3,19.2,20,15.1,20,10.1z"/></svg></a>' +
    '<a href="https://open.spotify.com/show/0a6FLmbbuEbCT5A371Neod?si=fbc7a15857954547" target="_blank" rel="noopener" aria-label="Spotify"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg></a>' +
    '<a href="https://www.youtube.com/@DailyDevotions-Chr1st" target="_blank" rel="noopener" aria-label="YouTube"><svg viewBox="0 0 20 20" aria-hidden="true"><path fill="currentColor" d="M19.6,5.2c-0.2-0.9-0.8-1.6-1.7-1.8C16.3,3,10,3,10,3S3.7,3,2.1,3.4C1.2,3.6,0.6,4.3,0.4,5.2C0,6.8,0,10,0,10s0,3.2,0.4,4.8c0.2,0.9,0.8,1.6,1.7,1.8C3.7,17,10,17,10,17s6.3,0,7.9-0.4c0.9-0.2,1.5-0.9,1.7-1.8C20,13.2,20,10,20,10S20,6.8,19.6,5.2z M8,13.2V6.8l5.4,3.2L8,13.2z"/></svg></a>';
  bottom.insertBefore(wrap, bottom.firstChild);
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