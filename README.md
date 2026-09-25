# SummitCraft — Website

A static, no-build website: plain HTML, CSS and vanilla JS. No framework, no npm install required to run it.

## Files

- `index.html` — Home
- `personal.html` — Personal & Gifts (B2C)
- `photographers.html` — For Photographers
- `builders.html` — For Real Estate & Builders
- `commercial.html` — Commercial Printing
- `quote.html` — Get a Quote (working form: FAQ accordion, dummy price preview, submit confirmation)
- `styles.css` — all styling, colors and fonts as CSS variables at the top
- `script.js` — FAQ accordion behavior + quote form logic (dummy pricing, role-based fields)

## Running it locally

No build step needed. Either:

```bash
# Option 1: just open it
open index.html          # macOS
# or double-click index.html in Finder/Explorer

# Option 2: serve it (recommended, avoids any local-file quirks)
npx serve .
# or
python3 -m http.server 8000
```

Then visit the printed local URL (e.g. http://localhost:8000).

## Setting this up with Claude Code

1. Put this folder under version control:
   ```bash
   git init
   git add .
   git commit -m "Initial site from Claude"
   ```
2. Open the folder in Claude Code (`claude` in this directory, or open it as a project).
3. Ask Claude Code to run a local dev server, wire up real content, or convert it to a framework (e.g. Next.js, Vite) if you outgrow static HTML.

## What's placeholder / needs real content

- **Pricing**: `script.js` has a `priceMap` object with dummy values — replace with real pricing once set, or wire the quote form to a backend/API instead of the current front-end-only preview.
- **Turnaround times**: shown inline on each product card (e.g. "Typical turnaround: 5–7 days") — confirm real numbers with production.
- **Contact details**: footer shows `[hello@summitcraft.in]` and `[+91 XXXXX XXXXX]` — replace with real values.
- **Social links**: Instagram/YouTube icons currently link to `#` — replace with real handles once available.
- **Gallery images**: the `.gtile` placeholder boxes (e.g. "Album photo", "Site brochure") are meant to be replaced with real photos — swap the `<div class="gtile">` elements for `<img>` tags once you have images.
- **Materials/finish chips** on the Photographers page are marked "[Final options to confirm with production]".
- **City/location** is intentionally not shown anywhere on the site (per earlier decision).

## Form behavior (currently front-end only)

The quote form on `quote.html` does not send data anywhere yet — it just shows a client-side confirmation message on submit (see `script.js`, the `form.addEventListener('submit', ...)` block). To actually receive submissions, wire it to:
- A form backend (Formspree, Netlify Forms, etc.), or
- Your own API endpoint / email service, or
- A spreadsheet/CRM integration

This is a natural next step for Claude Code to help with once you pick an approach.
