/* מושיק קליין – דף נחיתה. Vanilla JS, no dependencies. */
(function () {
  'use strict';

  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Footer year ---------- */
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  /* ---------- Mobile menu ---------- */
  var header = document.querySelector('.site-header');
  var menuBtn = document.querySelector('.menu-btn');
  var nav = document.getElementById('main-nav');
  function setMenu(open) {
    header.classList.toggle('menu-open', open);
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    menuBtn.setAttribute('aria-label', open ? 'סגירת תפריט' : 'פתיחת תפריט');
  }
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function () { setMenu(!header.classList.contains('menu-open')); });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && header.classList.contains('menu-open')) { setMenu(false); menuBtn.focus(); }
    });
    document.addEventListener('click', function (e) {
      if (header.classList.contains('menu-open') && !header.contains(e.target)) setMenu(false);
    });
  }

  /* ---------- Host badge (Netlify "Powered by") ----------
     The host injects a fixed badge at the bottom of the viewport after load. When it
     appears, reserve its height so the contact bar and footer sit above it. */
  var docEl = document.documentElement;
  function fitBadge() {
    var badge = document.getElementById('nl-badge-frame');
    var h = badge ? Math.ceil(badge.getBoundingClientRect().height) : 0;
    docEl.style.setProperty('--badge-h', h ? (h + 8) + 'px' : '0px');
    docEl.classList.toggle('has-badge', h > 0);
    if (badge && !badge._watched && 'ResizeObserver' in window) {
      badge._watched = true;
      new ResizeObserver(fitBadge).observe(badge);
    }
    return !!badge;
  }
  if (!fitBadge() && 'MutationObserver' in window) {
    var bmo = new MutationObserver(function () { if (fitBadge()) bmo.disconnect(); });
    bmo.observe(document.body, { childList: true, subtree: true });
    setTimeout(function () { bmo.disconnect(); }, 15000);
  }
  window.addEventListener('resize', fitBadge);

  /* ---------- Approach quote: words light up with scroll ---------- */
  var quote = document.getElementById('quote');
  var words = [];
  if (quote && !reduce) {
    quote.innerHTML = quote.textContent.trim().split(/\s+/).map(function (w) {
      return '<span class="w">' + w + '</span>';
    }).join(' ');
    words = Array.prototype.slice.call(quote.querySelectorAll('.w'));
  }

  /* ---------- Mobile contact bar: step aside once the contact section is on screen ---------- */
  var bar = document.querySelector('.mobile-bar');
  var contact = document.getElementById('contact');

  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      ticking = false;
      var vh = window.innerHeight;
      if (words.length) {
        var r = quote.getBoundingClientRect();
        var p = (vh * 0.85 - r.top) / (r.height + vh * 0.3);
        var n = Math.round(Math.min(1, Math.max(0, p)) * words.length);
        for (var i = 0; i < words.length; i++) words[i].classList.toggle('on', i < n);
      }
      if (bar && contact) {
        var c = contact.getBoundingClientRect();
        bar.classList.toggle('hide', c.top < vh * 0.6 && c.bottom > 0);
      }
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();

  /* ---------- Reveal on scroll (hidden state only exists when JS runs) ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if (!reduce && 'IntersectionObserver' in window) {
    // Stagger only what arrives together, so nothing waits on siblings still off screen.
    var io = new IntersectionObserver(function (entries) {
      entries.filter(function (en) { return en.isIntersecting; }).forEach(function (en, k) {
        en.target.style.setProperty('--i', k);
        en.target.classList.add('in');
        io.unobserve(en.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- Drifting light runs only while its panel is on screen ---------- */
  if ('IntersectionObserver' in window) {
    var lio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { en.target.querySelector('.light').classList.toggle('paused', !en.isIntersecting); });
    });
    document.querySelectorAll('.light').forEach(function (el) { lio.observe(el.parentElement); });
  }

  /* ---------- Contact form ---------- */
  var form = document.getElementById('contact-form');
  if (!form) return;
  var status = document.getElementById('form-status');
  var waLink = document.querySelector('a[data-wa]');
  var WA_URL = waLink ? waLink.href : 'https://wa.me/972544447068';
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
    var label = btn.querySelector('.btn-label');
    btn.disabled = true;
    label.textContent = 'שולחים…';
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body
    }).then(function (res) {
      if (!res.ok) throw new Error('bad status ' + res.status);
      form.reset();
      status.className = 'form-status ok';
      status.textContent = 'תודה! הפרטים התקבלו, ואחזור אליכם בהקדם.';
    }).catch(function () {
      // Never send the parent to an error page: keep them here with direct contact options.
      status.className = 'form-status bad';
      status.innerHTML = 'משהו השתבש בשליחה. אפשר לכתוב לי ישירות ' +
        '<a href="' + WA_URL + '" target="_blank" rel="noopener">בוואטסאפ</a> או להתקשר ' +
        '<a href="tel:0544447068">054-4447068</a>.';
    }).then(function () { btn.disabled = false; label.textContent = 'שלחו פרטים'; });
  });
})();
