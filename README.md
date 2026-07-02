# Yingying Han — Personal Homepage

Single-page English personal homepage. Static HTML/CSS/JS, no build tooling.

## Preview locally

Open `index.html` directly in a browser, or serve the folder with any static server:

```bash
# Python 3
python -m http.server 8000
# then visit http://localhost:8000

# Node (if installed)
npx serve .
```

## Deploy to GitHub Pages

1. Create a new repository on GitHub (e.g. `yingying2022.github.io` for a user-site, or any name for a project page).
2. From this folder:

   ```bash
   git remote add origin https://github.com/Yingying2022/<repo>.git
   git push -u origin main
   ```

3. In the GitHub repo settings → **Pages** → set **Source** to `main` branch / root.
4. Wait ~1 minute. The site will be live at `https://yingying2022.github.io/<repo>/` (or `https://yingying2022.github.io/` for a user-site).

## Edit content

All copy lives in `index.html` — no templating, no CMS. To add a new publication, duplicate the `<blockquote class="pub">…</blockquote>` block in the Publications section and edit the text.

## Replace the avatar

The sidebar currently pulls the GitHub avatar by URL. To use a local photo, drop a square image at `assets/images/profile.jpg` and change the `src` attribute of the avatar `<img>` in `index.html` to `assets/images/profile.jpg`.

## Files

| Path | Purpose |
|------|---------|
| `index.html` | Page content and structure |
| `assets/css/main.css` | All styling (theme tokens, layout, components, responsive) |
| `assets/js/main.js` | Hamburger toggle, sticky masthead shadow, scroll-reveal |
| `docs/superpowers/specs/` | Design spec |
| `docs/superpowers/plans/` | Implementation plan |
