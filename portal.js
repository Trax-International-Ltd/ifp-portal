/* IFP Portal — configuration and announcements feed.
   Edit this file to toggle sections or post an announcement; no build step. */

const PORTAL_CONFIG = {
  showAnnouncements: true, // hide the right-hand announcements column
  showDev: true,           // hide the "In development" row
};

// Newest first. `date` is shown as written. Mark at most one item `isLatest`
// to give it the orange rule; the rest use the neutral rule.
const ANNOUNCEMENTS = [
  {
    date: "21 Sep 2026",
    title: "Terrain Points",
    body: "Generate circular terrain obstacles from OS Terrain 50 or ALOS AW3D30 (served from the shared tile library) and export PDToolkit import CSVs.",
    isLatest: true,
  },
  {
    date: "18 Sep 2026",
    title: "UK AIP to Map 3D",
    body: "Load the NATS AIP KML package, narrow it down by group, level band or radius, and export shapefiles, DXF, CSV or GeoJSON.",
    
  },
  {
    date: "17 Sep 2026",
    title: "Five new utilities",
    body: "IFP Design Calculator, CRM Obs File Generator, Chart Diff, XVOD Record Search and the Version History & MRI Update tool now live in the portal.",
  },
  {
    date: "7 Sep 2026",
    title: "IFP Portal is live",
    body: "The portal now hosts the Surface Filtering Tool, Surface List Generator and Aircraft Modelling utility.",
  },
  {
    date: "Earlier",
    title: "More tools on the way",
    body: "Up to six tools and six utilities are planned. Watch this space for release notes.",
  },
];

(function () {
  const layout = document.querySelector(".layout");
  const aside = document.getElementById("announcements");
  const dev = document.getElementById("in-development");
  const navAnnouncements = document.querySelector('.nav a[href="#announcements"]');

  if (PORTAL_CONFIG.showDev === false && dev) dev.remove();

  if (PORTAL_CONFIG.showAnnouncements === false) {
    if (aside) aside.remove();
    if (navAnnouncements) navAnnouncements.remove();
    if (layout) layout.classList.add("no-aside");
  } else if (aside) {
    const list = aside.querySelector(".announcement-list");
    ANNOUNCEMENTS.forEach((a) => {
      const el = document.createElement("article");
      el.className = "announcement" + (a.isLatest ? " is-latest" : "");
      const time = document.createElement("time");
      time.textContent = a.date;
      const h3 = document.createElement("h3");
      h3.textContent = a.title;
      const p = document.createElement("p");
      p.textContent = a.body;
      el.append(time, h3, p);
      list.appendChild(el);
    });
  }

  // Highlight the nav link for the section currently in view.
  // The announcements column is always in view, so only main sections are tracked.
  const links = Array.from(document.querySelectorAll(".nav a[href^='#']"));
  const targets = ["#tools", "#utilities"].map((id) => document.querySelector(id)).filter(Boolean);
  if ("IntersectionObserver" in window && targets.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        links.forEach((l) => {
          if (l.getAttribute("href") === "#" + e.target.id) l.setAttribute("aria-current", "page");
          else l.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    targets.forEach((t) => io.observe(t));
  }
})();
