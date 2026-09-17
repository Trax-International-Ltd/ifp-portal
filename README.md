# IFP Design Ltd — tools portal

One static landing page ("IFP Portal") linking to the team's tools and utilities.
No build step, no backend. The look follows the IFP Portal Dashboard Design handoff.

## Files
- `index.html` — page markup (tool/utility cards, in-development row, announcements column)
- `styles.css` — Nocturne design-system base stylesheet (reused as-is from the handoff)
- `portal.css` — IFP brand token overrides and page layout
- `portal.js` — layout flags and the announcements feed
- `assets/logo.png` — company logo (used on the light hero band only)

## Editing
- **Tool links:** edit the `href` on each `.card` in `index.html` (marked with a comment).
- **Add a tool or utility:** copy an existing `<a class="card">` block into the
  relevant grid. Icons are Phosphor (fill style) inline SVGs at 22px.
- **Announcements:** edit the `ANNOUNCEMENTS` array in `portal.js` (newest first;
  set `isLatest: true` on one item to give it the orange rule).
- **Hide sections:** set `showAnnouncements` or `showDev` to `false` in `PORTAL_CONFIG`
  in `portal.js`.

## Publish with GitHub Pages (recommended)
1. Create a repo under the organisation (e.g. `ifp-portal`), public or private*.
2. Push these files (`index.html`, `styles.css`, `portal.css`, `portal.js`, `assets/logo.png`, this README).
3. Repo → Settings → Pages → "Deploy from a branch" → branch `main`, folder `/ (root)` → Save.
4. After a minute the page is live at `https://<org>.github.io/ifp-portal/`
   (shown on that same Settings → Pages screen). Bookmark that URL team-wide.

*Private repos need GitHub Pages on a paid org plan; a public repo is fine here —
the page contains only links and branding, nothing sensitive.

Custom domain later: add it on the Pages settings screen and create the CNAME
record it asks for.

## Or: Railway static service
Add a third service in the existing Railway project from this repo. Since there is
no server, either use a static-site buildpack or wrap it with any one-line static
server; GitHub Pages is simpler for a pure static page.

## Updating
Edit, commit, push — Pages redeploys automatically.
