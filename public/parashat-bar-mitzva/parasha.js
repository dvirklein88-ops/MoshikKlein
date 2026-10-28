/* פרשת בר מצווה לפי תאריך לידה – מחשבון. Uses the vendored @hebcal/core bundle (global `hebcal`). */
(function () {
  'use strict';

  var form = document.getElementById('calc');
  var out = document.getElementById('result');
  var errBox = document.getElementById('calc-err');
  if (!form || !out) return;

  if (typeof window.hebcal === 'undefined') {
    errBox.textContent = 'המחשבון לא נטען. אפשר לשלוח לי את תאריך הלידה בוואטסאפ, ואבדוק בשמחה.';
    return;
  }

  var H = window.hebcal;
  var HDate = H.HDate, HebrewCalendar = H.HebrewCalendar, Locale = H.Locale, flags = H.flags;
  var LOC = 'he-x-NoNikud';
  var WA = 'https://wa.me/972544447068';
  var ADAR_I = 12, ADAR_II = 13;

  var gFields = document.getElementById('greg-fields');
  var hFields = document.getElementById('heb-fields');
  var gDate = document.getElementById('c-gdate');
  var sunset = document.getElementById('c-sunset');
  var hDay = document.getElementById('c-hday');
  var hMonth = document.getElementById('c-hmonth');
  var hYear = document.getElementById('c-hyear');

  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- helpers ---------- */
  function t(s) { return Locale.gettext(s, LOC); }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function isoLocal(d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }

  var fmtLong = new Intl.DateTimeFormat('he-IL', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  var fmtShort = new Intl.DateTimeFormat('he-IL', { day: 'numeric', month: 'long', year: 'numeric' });

  function monthName(m, y) { return t(HDate.getMonthName(m, y)); }
  /** e.g. "י׳ אדר ב׳ תשפ״ז" */
  function hebStr(hd) { return hd.renderGematriya(true); }
  function parashaName(names) { return names.map(t).join('־'); }

  /* ---------- Hebrew-date inputs ---------- */
  var today = new HDate();
  var maxY = today.getFullYear();
  var minY = maxY - 25;

  (function buildYears() {
    var frag = document.createDocumentFragment();
    for (var y = maxY; y >= minY; y--) {
      var o = document.createElement('option');
      o.value = y;
      var g = y - 3761;
      o.textContent = H.gematriya(y) + ' (' + g + '–' + (g + 1) + ')';
      frag.appendChild(o);
    }
    hYear.appendChild(frag);
    var frag2 = document.createDocumentFragment();
    for (var d = 1; d <= 30; d++) {
      var od = document.createElement('option');
      od.value = d;
      od.textContent = H.gematriya(d) + ' (' + d + ')';
      frag2.appendChild(od);
    }
    hDay.appendChild(frag2);
  })();

  function buildMonths() {
    var y = parseInt(hYear.value, 10);
    var prev = parseInt(hMonth.value, 10);
    var leap = y ? HDate.isLeapYear(y) : true;
    var order = [7, 8, 9, 10, 11, ADAR_I].concat(leap ? [ADAR_II] : []).concat([1, 2, 3, 4, 5, 6]);
    hMonth.innerHTML = '<option value="">חודש</option>';
    order.forEach(function (m) {
      var o = document.createElement('option');
      o.value = m;
      if (!y) o.textContent = m === ADAR_I ? 'אדר / אדר א׳' : m === ADAR_II ? 'אדר ב׳' : monthName(m, 5785);
      else o.textContent = monthName(m, y);
      hMonth.appendChild(o);
    });
    if (prev) hMonth.value = (!leap && prev === ADAR_II) ? ADAR_I : prev;
  }
  hYear.addEventListener('change', buildMonths);
  buildMonths();

  /* ---------- mode toggle ---------- */
  function mode() { return form.querySelector('input[name="mode"]:checked').value; }
  function syncMode() {
    var heb = mode() === 'heb';
    gFields.hidden = heb;
    hFields.hidden = !heb;
    errBox.textContent = '';
  }
  form.querySelectorAll('input[name="mode"]').forEach(function (r) { r.addEventListener('change', syncMode); });
  syncMode();

  gDate.max = isoLocal(new Date());

  /* ---------- core calculation ---------- */
  function shabbatInfo(hd, il) {
    var sat = hd.onOrAfter(6);
    var res = HebrewCalendar.getSedra(sat.getFullYear(), il).lookup(sat);
    var label = parashaName(res.parsha);
    if (res.chag) {
      // Prefer the exact yom tov name (e.g. "שבועות ב׳") over the generic sedra label.
      var yt = (HebrewCalendar.getHolidaysOnDate(sat, il) || []).filter(function (e) {
        return (e.getFlags() & flags.CHAG) && !(e.getFlags() & flags.EREV);
      });
      if (yt.length === 1) label = yt[0].render(LOC);
    }
    return { sat: sat, chag: res.chag, names: res.parsha, label: label };
  }
  function nextRegular(sat, il) {
    var d = sat;
    for (var i = 0; i < 6; i++) {
      d = d.add(7, 'd');
      var r = shabbatInfo(d, il);
      if (!r.chag) return r;
    }
    return null;
  }
  function specials(sat, il, isChag) {
    var evs = HebrewCalendar.getHolidaysOnDate(sat, il) || [];
    var list = [];
    evs.forEach(function (e) {
      var f = e.getFlags(), desc = e.getDesc();
      var label = null;
      if (f & flags.SPECIAL_SHABBAT) label = e.render(LOC);
      else if (f & flags.ROSH_CHODESH) label = 'שבת ' + e.render(LOC);
      else if (/^Chanukah/.test(desc)) label = 'שבת חנוכה';
      if (label && !isChag && list.indexOf(label) < 0) {
        list.push(label);
        // Rosh Chodesh, Chanukah and the four parshiyot add a reading from a second Torah scroll
        if ((f & flags.ROSH_CHODESH) || /^Chanukah|^Shabbat (Shekalim|Zachor|Parah|HaChodesh)/.test(desc)) list.adds = true;
      }
    });
    return list;
  }

  function compute(birth, il, afterSunset) {
    var by = birth.getFullYear();
    var bm = HebrewCalendar.getBirthdayOrAnniversary(by + 13, birth);
    var sh = shabbatInfo(bm, il);
    var other = shabbatInfo(bm, !il);
    var notes = [];
    var bmM = bm.getMonth(), bMo = birth.getMonth();

    if (afterSunset) {
      notes.push('הילד נולד אחרי השקיעה, ולכן התאריך העברי הוא של היום שאחרי (היום העברי מתחלף בשקיעה).');
    }
    var leapAdarBirth = HDate.isLeapYear(by) && (bMo === ADAR_I || bMo === ADAR_II);
    // Adar handling
    if (bMo === ADAR_I && !HDate.isLeapYear(by) && HDate.isLeapYear(bm.getFullYear()) && bmM === ADAR_II) {
      notes.push('הילד נולד באדר בשנה רגילה, ושנת הבר מצווה מעוברת (יש בה אדר א׳ ואדר ב׳). חישבתי לפי המנהג האשכנזי המקובל: הבר מצווה באדר ב׳. כדאי לאשר את זה עם רב בית הכנסת.');
    } else if (leapAdarBirth) {
      if (HDate.isLeapYear(bm.getFullYear())) {
        notes.push('הילד נולד ב' + monthName(bMo, by) + ' בשנה מעוברת, וגם שנת הבר מצווה מעוברת, ולכן הבר מצווה ב' + monthName(bmM, bm.getFullYear()) + '.');
      } else {
        notes.push('הילד נולד ב' + monthName(bMo, by) + ' בשנה מעוברת, ובשנת הבר מצווה יש רק חודש אדר אחד, ולכן התאריך הוא ב' + monthName(bmM, bm.getFullYear()) +
          (birth.getDate() === 30 ? ' (ל׳ באדר א׳ הוא יום שאין לו מקבילה בשנה רגילה, ולכן החישוב עובר ליום שאחרי כ״ט באדר)' : '') + '. כדאי לאשר את זה עם רב בית הכנסת.');
      }
    }
    // 30th of a month that has only 29 days in the bar mitzvah year
    if (!leapAdarBirth && birth.getDate() === 30 && bm.getDate() === 1) {
      notes.push('הילד נולד ב־ל׳ ב' + monthName(bMo, by) + ', אבל בשנת הבר מצווה יש בחודש הזה רק 29 ימים. לכן חישבתי את הבר מצווה ליום שאחרי כ״ט, כלומר א׳ ב' + monthName(bmM, bm.getFullYear()) + '. כדאי לאשר את זה עם רב בית הכנסת.');
    }

    return { birth: birth, bm: bm, sh: sh, other: other, il: il, notes: notes,
      next: sh.chag ? nextRegular(sh.sat, il) : null,
      special: specials(sh.sat, il, sh.chag) };
  }

  /* ---------- render ---------- */
  function render(r) {
    var bmG = r.bm.greg();
    var satG = r.sh.sat.greg();
    var place = r.il ? 'בישראל' : 'בחו״ל';
    var same = r.sh.sat.isSameDate(r.bm);
    var pName = r.sh.label;
    var mainLine, waReading;

    if (r.sh.chag) {
      mainLine = '<p class="r-parasha"><span class="r-kicker">בשבת הזו קוראים קריאת חג</span>' + esc(pName) + '</p>' +
        '<p class="r-note">בשבת הזו אין קריאה של פרשת השבוע הרגילה: ' + place + ' קוראים בה את קריאת החג (' + esc(pName) + ').' +
        (r.next ? ' הפרשה הרגילה הבאה היא <strong>פרשת ' + esc(parashaName(r.next.names)) + '</strong>, בשבת ' + esc(fmtShort.format(r.next.sat.greg())) + ' (' + esc(hebStr(r.next.sat)) + ').' : '') +
        ' כדאי לדבר עם רב בית הכנסת על מה שהילד יקרא.</p>';
      waReading = 'קריאת חג (' + pName + ')';
    } else {
      mainLine = '<p class="r-parasha"><span class="r-kicker">הפרשה</span>פרשת ' + esc(pName) + '</p>';
      waReading = 'פרשת ' + pName;
    }

    var html = '<h2 class="r-title" id="result-title" tabindex="-1">התוצאה</h2>' + mainLine +
      '<dl class="r-list">' +
      '<div><dt>תאריך הלידה העברי</dt><dd>' + esc(hebStr(r.birth)) + '</dd></div>' +
      '<div><dt>תאריך הבר מצווה (יום הולדת 13 העברי)</dt><dd>' + esc(hebStr(r.bm)) + '<span class="r-sub">' + esc(fmtLong.format(bmG)) + '</span></dd></div>' +
      '<div><dt>' + (same ? 'השבת של הבר מצווה (באותו היום)' : 'השבת הראשונה מהתאריך הזה') + '</dt><dd>' + esc(hebStr(r.sh.sat)) + '<span class="r-sub">' + esc(fmtLong.format(satG)) + ' · ' + place + '</span></dd></div>' +
      '</dl>';

    var notes = r.notes.slice();
    if (r.special.length) {
      notes.push('באותה שבת חלה גם ' + esc(r.special.join(' ו')) + '. ' + (r.special.adds
        ? 'קוראים את הפרשה כרגיל, ומוסיפים לה קריאה נוספת מספר תורה שני (המפטיר). גם ההפטרה מתחלפת.'
        : 'קוראים את הפרשה כרגיל, וההפטרה מתחלפת בהפטרה מיוחדת לשבת הזו.'));
    }
    var oName = r.other.label;
    if (oName !== pName && !(r.sh.chag && r.other.chag)) {
      notes.push((r.il ? 'בחו״ל' : 'בישראל') + ' קוראים בשבת הזו ' + (r.other.chag ? 'קריאת חג (' + esc(oName) + ')' : 'את <strong>פרשת ' + esc(oName) + '</strong>') + '. אחרי חג שחל בשבת יש לפעמים כמה שבועות של פער בין ישראל לחו״ל.');
    }
    if (notes.length) {
      html += '<ul class="r-notes">' + notes.map(function (n) { return '<li>' + n + '</li>'; }).join('') + '</ul>';
    }

    var msg = 'היי מושיק, הגעתי מהאתר ובדקתי את פרשת הבר מצווה. תאריך הבר מצווה: ' + hebStr(r.bm) + ' (' + fmtShort.format(bmG) + '). ' +
      'השבת: ' + fmtShort.format(satG) + ' (' + place + ') – ' + waReading + '. אשמח לשמוע על הכנה לבר מצווה.';
    html += '<div class="r-cta">' +
      '<p>רוצים להתחיל להתכונן לפרשה הזו? הכי טוב שנדבר על זה.</p>' +
      '<div class="r-btns">' +
      '<a class="pill pill-gold" href="' + WA + '?text=' + encodeURIComponent(msg) + '" target="_blank" rel="noopener">' +
      '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-wa"/></svg><span>שלחו לי את הפרשה בוואטסאפ</span></a>' +
      '<a class="pill pill-line" href="/#contact">להשאיר פרטים</a>' +
      '</div></div>';

    out.innerHTML = html;
    out.hidden = false;
    out.classList.remove('r-in');
    void out.offsetWidth;
    out.classList.add('r-in');
    var title = document.getElementById('result-title');
    title.focus({ preventScroll: true });
    out.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  }

  function fail(msg, field) {
    errBox.textContent = msg;
    if (field) { field.setAttribute('aria-invalid', 'true'); field.focus(); }
  }
  function clearErr() {
    errBox.textContent = '';
    [gDate, hDay, hMonth, hYear].forEach(function (el) { el.removeAttribute('aria-invalid'); });
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    clearErr();
    var il = form.querySelector('input[name="place"]:checked').value === 'il';
    var birth, after = false;

    if (mode() === 'greg') {
      var v = gDate.value;
      var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(v);
      if (!m) return fail('נא לבחור את תאריך הלידה.', gDate);
      var d = new Date(+m[1], +m[2] - 1, +m[3]);
      if (d.getFullYear() < 1950 || d > new Date()) return fail('נא לבדוק את תאריך הלידה.', gDate);
      after = sunset.checked;
      birth = new HDate(d);
      if (after) birth = birth.next();
    } else {
      var y = parseInt(hYear.value, 10), mo = parseInt(hMonth.value, 10), dd = parseInt(hDay.value, 10);
      if (!dd) return fail('נא לבחור יום בחודש.', hDay);
      if (!mo) return fail('נא לבחור חודש.', hMonth);
      if (!y) return fail('נא לבחור שנה.', hYear);
      if (mo === ADAR_II && !HDate.isLeapYear(y)) mo = ADAR_I;
      var dim = HDate.daysInMonth(mo, y);
      if (dd > dim) return fail('בחודש ' + monthName(mo, y) + ' בשנת ' + H.gematriya(y) + ' היו רק ' + dim + ' ימים. נא לבדוק את התאריך.', hDay);
      birth = new HDate(dd, mo, y);
      if (birth.abs() > new HDate().abs()) return fail('התאריך שבחרתם עוד לא הגיע. נא לבדוק את התאריך.', hDay);
    }

    try {
      render(compute(birth, il, after));
    } catch (err) {
      fail('משהו השתבש בחישוב. אפשר לשלוח לי את התאריך בוואטסאפ, ואבדוק בשמחה.');
    }
  });

  [gDate, hDay, hMonth, hYear].forEach(function (el) {
    el.addEventListener('change', function () { el.removeAttribute('aria-invalid'); });
  });
})();
