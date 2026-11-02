/*
 * Microsoft Clarity – מדידת שימוש (מפות חום והקלטות סשן).
 * כדי להפעיל: להדביק כאן את מזהה הפרויקט מ-clarity.microsoft.com
 * (Settings → Overview → Project ID). כל עוד המזהה ריק, הקובץ לא עושה כלום.
 *
 * אירועים שנשלחים ל-Clarity (Filters → Custom events):
 *   whatsapp_click, phone_click, email_click, form_submit, parasha_calc
 * ותג page_type לכל עמוד (Filters → Custom tags).
 */
(function () {
  'use strict';
  var CLARITY_ID = '';
  if (!CLARITY_ID) return;

  (function (c, l, a, r, i, t, y) {
    c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
    t = l.createElement(r); t.async = 1; t.src = 'https://www.clarity.ms/tag/' + i;
    y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
  })(window, document, 'clarity', 'script', CLARITY_ID);

  var path = location.pathname.replace(/\/+$/, '') || '/';
  window.clarity('set', 'page_type', path === '/' ? 'home' : path.slice(1));

  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('a[href]') : null;
    if (!a) return;
    var href = a.getAttribute('href') || '';
    var where = a.closest('header') ? 'header'
      : a.closest('.site-footer') ? 'footer'
      : a.closest('.hero, .page-hero') ? 'hero'
      : 'body';
    var name = href.indexOf('wa.me') > -1 ? 'whatsapp_click'
      : href.indexOf('tel:') === 0 ? 'phone_click'
      : href.indexOf('mailto:') === 0 ? 'email_click'
      : '';
    if (!name) return;
    window.clarity('event', name);
    window.clarity('set', 'last_cta_place', where);
  }, true);

  document.addEventListener('submit', function (e) {
    var f = e.target;
    if (f && f.getAttribute('name') === 'contact') window.clarity('event', 'form_submit');
    if (f && f.closest && f.closest('#calc')) window.clarity('event', 'parasha_calc');
  }, true);
})();
