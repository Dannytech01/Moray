# MORAY — Romantic Birthday Website

A premium, interactive birthday website for **Motunrayo**, from **Daniel**.

## Structure
```
MORAY/
├── index.html
├── Css/styles.css
├── Js/main.js
└── Asset/        (images, videos, music)
```

## How to customize
Open `Js/main.js` and edit the `CONFIG` object at the top:
- `herName` / `myName` — names
- `gallery` — array of `{ src, caption, featured }`. Add/remove photos (at least 10–15 supported).
- `videos` — array of `{ src, label }`.
- `love` — "Things I Love About You" cards `{ icon, title, text }`.
- `wishes` — birthday wishes & prayers `{ icon, title, text }`.
- `letter` — the romantic letter (template literal). Also editable directly on the page.

The letter text is also `contenteditable` on the page for quick tweaks.

## Background music
Removed per request. (If you want to re-add, place a track at `Asset/music.mp3` and restore the toggle in `index.html`/`Css`/`Js`.)

## Run
Just open `index.html` in any modern browser. For best results (and to avoid local-file restrictions with some media), serve via a local server, e.g.:
```
npx serve .
```

## Notes
- Images referenced: pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic9, pic10–pic18, pic20.
- Videos: vic2, vic3, vic4, 15.
- Favorite photos (pic3, pic5, pic7) are featured prominently.
