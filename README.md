# מושיק קליין – דף נחיתה

דף נחיתה בעברית (RTL) למושיק קליין, מלמד לבר מצווה: קריאה בתורה, הפטרה והכנה להנחת תפילין.
אתר סטטי: HTML, CSS ו-JavaScript רגיל. בלי build, בלי frameworks ובלי תלויות.

## מבנה הקבצים

- `public/` – **האתר עצמו** (רק התיקייה הזאת מתפרסמת):
  - `index.html` – כל הדף (מסך טעינה, סקשנים, טופס)
  - `styles.css` – עיצוב, צבעים (משתני `:root`) ואנימציות
  - `script.js` – מסך טעינה, אנימציות גלילה, בדיקת טופס ושליחה
  - `favicon.svg` – אייקון האתר
  - `assets/img/` – תמונות
- `netlify.toml` – הגדרות Netlify (publish ו-headers)
- `PROJECT_NOTES.md` – החלטות, עובדות מאושרות וסטטוס

## תצוגה מקדימה מקומית

```
python3 -m http.server 8000 --directory public
```

ואז לפתוח http://localhost:8000. (שליחת הטופס עובדת רק ב-Netlify.)

## החלפת תמונות מקום-שמור

חפשו בקובץ `public/index.html` את `PLACEHOLDER`:

1. **מושיק לומד עם נער** (סקשן "על מושיק") – להחליף את `<div class="ph ph-photo">` בתג `<img>` עם `alt`, `width`, `height` ו-`loading="lazy"`.
2. **צילומי וואטסאפ** (סקשן "מה ההורים אומרים") – להחליף כל `<li class="ph ph-shot">` ב-`<li><img ...></li>` (יחס 9:16). אפשר להוסיף או להסיר פריטים (3–6 מומלץ).
   לפני פרסום: להסתיר שמות, מספרים ותמונות פרופיל, ולקבל הסכמה מההורים.

תמונות כדאי לשמור ב-`public/assets/img/` בפורמט webp, עם גרסת jpg כגיבוי.

## לפני עלייה לאוויר

- `og:image` ב-`public/index.html` הוא נתיב יחסי. אחרי שיש דומיין צריך להחליף לכתובת מלאה (`https://הדומיין/assets/img/moshik-hero-800.jpg`).
- לבדוק קבלה של טופס ומייל התראה ב-Netlify (Forms → Notifications) לפני שמכריזים שהוא עובד.

## פריסה (Netlify מ-GitHub)

1. לדחוף את הקוד למאגר ב-GitHub.
2. ב-Netlify: Add new site → Import from Git, לבחור את המאגר.
3. Build command: ריק. Publish directory: `public` (כבר מוגדר ב-`netlify.toml`).
4. אחרי הפריסה הראשונה: Forms → לוודא שהטופס `contact` מזוהה, ולהגדיר התראת מייל.
