---
name: מושיק קליין – הכנה לבר מצווה
description: Warm stone landing page for a private bar mitzvah teacher; light serif display, one gold action accent, hairline structure.
colors:
  ground: "#F3EEE8"
  ground-2: "#EAE3DB"
  panel: "#CBBFB5"
  ink: "#1E1A16"
  ink-2: "#5A5047"
  ink-on-panel: "#3A322B"
  night: "#1E1A16"
  on-night: "#F3EEE8"
  on-night-2: "#BDB2A6"
  gold: "#DDB04F"
  gold-hover: "#E7BE62"
  gold-ink: "#33250A"
  bronze: "#6B4E1E"
  field: "rgba(255, 252, 248, 0.82)"
  field-focus: "#FFFDFA"
  err: "#A3291F"
  ok: "#2E6B45"
  line: "rgba(30, 26, 22, 0.13)"
  line-night: "rgba(243, 238, 232, 0.14)"
typography:
  display:
    fontFamily: "Noto Serif Hebrew, David, serif"
    fontSize: "clamp(40px, 10.5vw, 92px)"
    fontWeight: 300
    lineHeight: 1.04
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Noto Serif Hebrew, David, serif"
    fontSize: "clamp(34px, 5vw, 60px)"
    fontWeight: 300
    lineHeight: 1.08
    letterSpacing: "-0.015em"
  quote:
    fontFamily: "Noto Serif Hebrew, David, serif"
    fontSize: "clamp(30px, 4.6vw, 64px)"
    fontWeight: 300
    lineHeight: 1.22
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Noto Sans Hebrew, Arial Hebrew, system-ui, sans-serif"
    fontSize: "22px"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "normal"
  body:
    fontFamily: "Noto Sans Hebrew, Arial Hebrew, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
rounded:
  pill: "999px"
  panel: "28px"
  card: "20px"
  field: "14px"
spacing:
  gutter: "20px"
  gutter-wide: "28px"
  section: "clamp(72px, 11vw, 150px)"
components:
  button-primary:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.gold-ink}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
    height: "50px"
  button-primary-hover:
    backgroundColor: "{colors.gold-hover}"
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-night}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
    height: "50px"
  button-dark-hover:
    backgroundColor: "{colors.ink-on-panel}"
  button-line:
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
    height: "50px"
  input-field:
    backgroundColor: "{colors.field}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "12px 16px"
    height: "52px"
  track-light:
    backgroundColor: "{colors.ground-2}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "32px 28px 30px"
  track-night:
    backgroundColor: "{colors.night}"
    textColor: "{colors.on-night}"
    rounded: "{rounded.card}"
    padding: "32px 28px 30px"
---

# Design System: מושיק קליין – הכנה לבר מצווה

## Overview

**Creative North Star: "The Quiet Conversation"**

The page should read like a calm talk with a teacher, not a sales page and not a religious brochure. Warm stone ground, a single large taupe panel for the hero, near-black warm ink, and light serif display set in generous space. Nothing is ornamented: no parchment, no borders-as-decoration, no stacked equal cards. The thesis is reassurance, and the visual system carries it through restraint, slow motion, and one gold accent that only appears where the parent is asked to act.

Structure comes from tone and hairlines rather than boxes. The page is built from four surfaces (stone ground, a slightly deeper ground-2, the taupe panel, and a night band for the footer and the second track), separated by 1px warm rules. Type does the heavy lifting: Noto Serif Hebrew Light at display sizes, Noto Sans Hebrew for reading text. The density is airy on mobile and opens into a two-column editorial rhythm from 900px.

Motion is slow and quiet. Entrances use an ease-out curve over roughly 0.7 to 0.9 seconds with a small stagger; the hero light drifts over 28 seconds; the approach quote lights up word by word on scroll. All of it is switched off under reduced motion.

**Key Characteristics:**
- Warm stone and taupe neutrals; one gold accent for primary actions and ticker dots.
- Light (300) Hebrew serif display, clamp-scaled, tight tracking.
- Pill buttons, 28px panels, 20px cards, 14px fields, hairline 1px rules.
- Two-column editorial rhythm from 900px; single column and a fixed bottom action bar below.
- Slow, soft motion (ease-out 0.5 to 0.9s, 28s light drift); fully disabled under reduced motion.

## Colors

A warm neutral system: stone ground and taupe panels carry the page, a near-black warm ink carries text, and gold appears only as the action color.

### Primary
- **Action Gold** (#DDB04F): The one accent. Fills the primary contact pills (WhatsApp in the hero, the track CTA, the mobile bar, the floating button). Hover lifts it to Lit Gold (#E7BE62) on hover-capable devices only. Ticker dots and the night-track timing word also use it.
- **Gold Ink** (#33250A): Text and icon color on Action Gold (7.4:1).

### Secondary
- **Ink Brown** (#3A322B, as `ink-on-panel`): Body and lead text sitting on the taupe panel (7.0:1 on Taupe Panel). Also the hover tone of the dark button.
- **Bronze Ink** (#6B4E1E): Warm text accent for the day-one track timing on stone and the location icons. Not for body copy.

### Tertiary
- **Night Band** (#1E1A16, as `night`): Footer and the second track card; text on it is On-Night (#F3EEE8) and muted On-Night 2 (#BDB2A6), 8.3:1 or better.

### Neutral
- **Stone Ground** (#F3EEE8): Page background and the text color on dark surfaces.
- **Deep Stone** (#EAE3DB, `ground-2`): The first track card and the about panel.
- **Taupe Panel** (#CBBFB5): The hero and contact panels. The only large tinted surface.
- **Warm Ink** (#1E1A16): Primary text (15:1 on stone).
- **Soft Ink** (#5A5047, `ink-2`): Secondary text on stone and deep stone (6.2 to 6.8:1). Do not use it on Taupe Panel.
- **Hairline** (rgba(30, 26, 22, 0.13)): Rules between rows, FAQ items, the ticker, and the mobile bar.
- **Field Cream** (rgba(255, 252, 248, 0.82)) with Field Focus (#FFFDFA): Form field fills.
- **Error Red** (#A3291F) and **Confirm Green** (#2E6B45): Validation and send status only.

### Named Rules
**The Gold-Is-Action Rule.** Gold fills only contact actions. The ticker's dots and the night track's timing word are the sole other gold. Gold text on stone is never used (1.75:1).

**The Taupe-Panel Rule.** Large tinted surfaces are reserved for the hero, the about block, and the contact block. Everything else sits on stone or deep stone.

## Typography

**Display Font:** Noto Serif Hebrew (with David, serif)
**Body Font:** Noto Sans Hebrew (with Arial Hebrew, system-ui, sans-serif)

**Character:** A light serif speaks in headlines and quotes, so the page sounds like a person reflecting; the sans is plain and warm for everything a parent has to read. The pairing is quiet on purpose: contrast comes from size and weight-300 air, not from heavy weights.

### Hierarchy
- **Display** (300, clamp(40px, 10.5vw, 92px), line-height 1.04, tracking -0.02em): The hero headline, set right-aligned with balanced wrapping. Appears once per page.
- **Headline** (300, clamp(34px, 5vw, 60px), 1.08, tracking -0.015em): Section titles (What You Learn, The Tracks, How It Works, About, FAQ, Contact). Space below is clamp(28px, 4vw, 52px).
- **Quote** (300, clamp(30px, 4.6vw, 64px), 1.22, tracking -0.015em, max 21ch): The approach statement, lit word by word on scroll.
- **Title** (500 sans, 22px, 1.3): Track names and step titles on sans. Track and where titles on serif use the Headline pattern at smaller clamp sizes (26 to 58px).
- **Body** (400 sans, 17px, line-height 1.65): Paragraphs. Lead text is 18px (20px from 900px). Long text is capped near 48 to 62ch.
- **Navigation and fine print** (400 sans, 15px at the desktop nav; 14 to 15px for footer and small notes).

### Named Rules
**The Serif-Speaks Rule.** Anything that is a headline, a quote, or a track timing is set in the serif at weight 300. Sans appears only for reading text, titles that are short, and the form.

## Layout

A single centered column with `max-width: 1320px` and horizontal gutters of 20px (28px from 640px). Mobile-first: everything stacks on one column first.

- **Header:** Sticky, 64px tall (72px from 900px), translucent stone with 14px background blur. Below 900px the nav collapses behind a menu button; a fixed bottom bar holds the WhatsApp and call actions.
- **Ticker:** A continuous 46s marquee strip under the header, bordered top and bottom by Hairlines.
- **Hero:** One taupe panel. Mobile: copy on top, photo bottom-anchored at 78vw. From 900px: a 1.12fr / 0.88fr grid, copy on the start side and the cutout photo on the other, height `min(calc(100svh - 140px), 760px)`.
- **Sections:** Vertical rhythm `clamp(72px, 11vw, 150px)` between sections. Sections are not boxed; they are separated by space.
- **Two-up from 640px:** Track cards and where-items become two columns with a 14px gap (40px for where-items).
- **Learn and approach:** Learn rows are stacked; from 900px each row becomes a two-column grid with generous 36px vertical padding.
- **Steps:** Three columns from 900px, 32px gap on mobile, 36px from 900px.
- **About and contact:** Taupe panels stack on mobile and split into two columns from 900px (about 56px gap; contact 0.9fr / 1.1fr with 64px gap).
- **Screenshot row:** A horizontal snap scroller on mobile; four equal columns from 900px.
- **Footer:** Night band, 40px vertical padding; a three-column row from 900px.

## Elevation & Depth

Depth comes from tone, not shadow. Surfaces are flat at rest: stone, deep stone, taupe, and night are the layers, and 1px warm hairlines carry structure. There are no shadows on cards, panels, or buttons. The only lifted element is the floating WhatsApp button on desktop, and form fields signal focus with a thin ring rather than a glow.

### Shadow Vocabulary
- **Floating Lift** (`box-shadow: 0 10px 28px -8px rgba(30, 26, 22, 0.45)`): The floating WhatsApp button only, shown from 900px. Used because it floats over content.
- **Field Focus Ring** (`box-shadow: 0 0 0 3px rgba(30, 26, 22, 0.12)`): Focus state on inputs and textarea; paired with a solid ink border.
- **Field Error Ring** (`box-shadow: 0 0 0 3px rgba(163, 41, 31, 0.12)`): Invalid state on inputs; paired with the error red border.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. Tone and hairlines create depth; a shadow appears only for a floating control or a field state.

## Shapes

Soft and round, with one recurring silhouette: the pill. Buttons are full pills (999px). Large containers use a 28px radius (hero, about, contact panels); track cards use 20px; form fields use 14px. Step numbers and the floating button are circles.

Structure uses 1px hairlines in warm ink at 13% opacity rather than outlined boxes. Panels clip their soft light layer (`overflow: hidden`), so the drifting light never escapes its surface. Focus outlines are 2px ink, offset 3px, with a 6px radius; on the night band and the second track they switch to Action Gold.

## Components

### Buttons
Pills with Noto Sans Hebrew at 500, 16px, line-height 1.2. Min height 50px, 12px by 24px padding. Pill is the only button shape.
- **Primary (gold):** Action Gold fill, Gold Ink text. Hover goes to Lit Gold on hover-capable devices. Pressed scale 0.97 over 0.12s. Background and color transition 0.25s; the press transform eases over 0.5s.
- **Dark:** Warm Ink fill, Stone Ground text, used for the form submit and the about-section action. Hover shifts to Ink Brown.
- **Line:** No fill; a 1px inset ring at 38% ink. Hover adds a 6% ink tint. Used as the secondary action next to the primary.
- **Sizing:** Small (40px min height) appears in the header call pill; large (56px) on the form submit.

### Tracks (cards)
- **Light track:** Deep Stone fill, 20px radius, 32px by 28px padding, minimum 300px tall (380px from 900px). Timing headline in Bronze Ink, serif.
- **Night track:** Night fill with On-Night text, same geometry. Timing headline in Action Gold, serif.
- Cards are paired and never stacked as equal boxes on desktop; the two tracks differ in tone, not in layout.

### Inputs / Fields
- **Style:** Field Cream fill at 82% alpha, 1px border at 16% ink, 14px radius, 52px min height, 12px by 16px padding, 17px text. Textarea min 120px and vertically resizable.
- **Focus:** Solid Warm Ink border, Field Focus fill, and the Field Focus Ring.
- **Error:** Error Red border and the Field Error Ring; error message in Error Red at 14px, weight 500.
- Phone numbers in fields are left-to-right inside the right-to-left page (`dir="ltr"`).

### Navigation
- **Mobile:** A 44px menu button whose two hairlines become an X on open; the menu drops as a stone panel with serif links at 28px weight 300, separated by hairlines.
- **Desktop (900px+):** Inline links at 15px sans in Soft Ink; an underline (1px, currentColor) draws in from the start on hover over 0.45s, and text moves to Warm Ink.
- **Current/active:** No active state is defined in the build.

### FAQ
- Items are separated by hairlines. Questions are serif at clamp(20px, 2.2vw, 26px), weight 400, with 22px vertical padding. The marker is a 14px hairline plus that rotates 135 degrees on open; the answer uses the body style in Soft Ink, capped at 62ch.

### Parents' Screenshots (placeholder)
- Pending real WhatsApp screenshots. The placeholder is a 9:16 dashed Hairline frame with a 20px radius; it is not a design component and should be replaced, not styled further.

## Do's and Don'ts

### Do:
- **Do** set every headline and quote in Noto Serif Hebrew at weight 300, using the clamp sizes listed in Typography.
- **Do** reserve Action Gold for contact actions, the ticker dots, and the night track's timing word.
- **Do** use Soft Ink (#5A5047) for secondary text on stone and deep stone; use Ink Brown (#3A322B) for text on Taupe Panel.
- **Do** separate sections and list items with 1px Hairlines, not boxes.
- **Do** keep the pill shape on every button and the 28px radius on every large panel.
- **Do** wrap phone numbers and email addresses in `dir="ltr"` inside right-to-left text.
- **Do** switch off the hero light drift, the quote word-by-word lighting, and entrance motion under `prefers-reduced-motion`.

### Don't:
- **Don't** set gold text on stone (1.75:1); gold is for fills and the night track.
- **Don't** use Soft Ink (#5A5047) on Taupe Panel (4.4:1, below AA for body text).
- **Don't** add a second accent hue. The page has one gold and one bronze text tone; no third hue.
- **Don't** add parchment textures, ornamental dividers, or stacked equal-weight cards; the direction rejects the busy religious-services template.
- **Don't** use a heavy display weight (above 300) for headlines and quotes; the light serif is the voice.
- **Don't** introduce a new tonal panel beyond hero, about, and contact.
- **Don't** make the gold fill a background for body copy or secondary actions.
