# IFP Design Ltd — tools portal

One static landing page linking to the two web tools. No build step, no backend.

## Before publishing
Edit `index.html` and replace the two placeholder hrefs (marked with a comment)
with the real Railway URLs of the Filtering Tool and the Surface List Generator.

## Publish with GitHub Pages (recommended)
1. Create a repo under the organisation (e.g. `ifp-portal`), public or private*.
2. Push these files (`index.html`, `assets/logo.png`, this README).
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
