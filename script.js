/* מושיק קליין – דף נחיתה. Vanilla JS, no dependencies. */
(function () {
  'use strict';

  var root = document.documentElement;

  /* ---------- Splash ---------- */
  var splash = document.getElementById('splash');
  function removeSplash() {
    if (!splash) return;
    splash.classList.add('out');
    setTimeout(function () {
      if (splash && splash.parentNode) splash.parentNode.removeChild(splash);
      splash = null;
      root.classList.remove('splash-on');
    }, 320);
  }
  if (splash) {
    if (root.classList.contains('splash-on')) {
      try { sessionStorage.setItem('splashSeen', '1'); } catch (e) {}
      var skip = document.getElementById('splash-skip');
      if (skip) skip.addEventListener('click', function (e) { e.stopPropagation(); removeSplash(); });
      splash.addEventListener('click', removeSplash);
      setTimeout(removeSplash, 1500);
    } else {
      splash.parentNode.removeChild(splash);
      splash = null;
    }
  }

  /* ---------- Footer year ---------- */
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  /* ---------- Reveal on scroll (classes only added by JS) ---------- */
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduce && 'IntersectionObserver' in window) {
    var unrollTargets = document.querySelectorAll('#approach .narrow, .parchment-sheet');
    for (var u = 0; u < unrollTargets.length; u++) {
      unrollTargets[u].classList.remove('reveal');
      unrollTargets[u].classList.add('unroll');
    }
    // Observe the parent for clip-path elements (a fully clipped element can't intersect).
    var targets = [];
    var els = document.querySelectorAll('.reveal, .unroll');
    for (var i = 0; i < els.length; i++) {
      var host = els[i].classList.contains('unroll') ? els[i].parentElement : els[i];
      host._reveal = els[i];
      targets.push(host);
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target._reveal.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.1 });
    targets.forEach(function (t) { io.observe(t); });
  } else {
    var all = document.querySelectorAll('.reveal');
    for (var j = 0; j < all.length; j++) all[j].classList.add('in');
  }

  /* ---------- Contact form ---------- */
  var form = document.getElementById('contact-form');
  if (!form) return;
  var status = document.getElementById('form-status');
  var nameEl = document.getElementById('f-name');
  var phoneEl = document.getElementById('f-phone');

  function setErr(input, id, msg) {
    var box = document.getElementById(id);
    box.textContent = msg;
    if (msg) input.setAttribute('aria-invalid', 'true'); else input.removeAttribute('aria-invalid');
  }
  function validPhone(v) {
    var digits = v.replace(/[\s\-()]/g, '');
    // Lenient Israeli numbers: 05X/0X local, or +972 / 972 prefix
    return /^(\+?972|0)[2-9]\d{7,8}$/.test(digits);
  }
  function validate() {
    var ok = true, first = null;
    if (!nameEl.value.trim()) { setErr(nameEl, 'e-name', 'נא למלא את שם ההורה.'); ok = false; first = first || nameEl; }
    else setErr(nameEl, 'e-name', '');
    var p = phoneEl.value.trim();
    if (!p) { setErr(phoneEl, 'e-phone', 'נא למלא מספר טלפון.'); ok = false; first = first || phoneEl; }
    else if (!validPhone(p)) { setErr(phoneEl, 'e-phone', 'מספר הטלפון לא נראה תקין. לדוגמה: 054-4447068'); ok = false; first = first || phoneEl; }
    else setErr(phoneEl, 'e-phone', '');
    if (first) first.focus();
    return ok;
  }
  nameEl.addEventListener('input', function () { if (nameEl.value.trim()) setErr(nameEl, 'e-name', ''); });
  phoneEl.addEventListener('input', function () { if (validPhone(phoneEl.value.trim())) setErr(phoneEl, 'e-phone', ''); });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    status.className = 'form-status';
    status.textContent = '';
    if (!validate()) return;

    var body = new URLSearchParams(new FormData(form)).toString();
    var btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body
    }).then(function (res) {
      if (!res.ok) throw new Error('bad status ' + res.status);
      form.reset();
      status.className = 'form-status ok';
      status.textContent = 'תודה! הפרטים התקבלו, ומושיק יחזור אליכם בהקדם.';
    }).catch(function () {
      // Fallback: regular form post (Netlify handles it)
      form.submit();
    }).then(function () { btn.disabled = false; });
  });
})();
