function renderHeader() {
  const el = document.getElementById("site-header");
  if (!el) return;
  el.innerHTML = `
    <header class="site-header">
      <div class="wrap nav">
        <a class="brand" href="index.html">
          <span class="brand-mark">SCU</span>
          <span>${SITE_DATA.clubName}</span>
        </a>
        <button class="menu-button" aria-label="Open navigation" aria-expanded="false">Menu</button>
        <nav class="nav-links">
          <a href="about.html">About</a>
          <a href="trips.html">Trips</a>
          <a href="leadership.html">Leadership</a>
          <a href="passes.html">Pass Discounts</a>
          <a href="contact.html">Contact</a>
        </nav>
      </div>
    </header>`;
  const btn = el.querySelector(".menu-button");
  const nav = el.querySelector(".nav-links");
  btn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", open);
  });
}

function renderFooter() {
  const el = document.getElementById("site-footer");
  if (!el) return;
  el.innerHTML = `
    <footer class="footer">
      <div class="wrap footer-inner">
        <div><strong>${SITE_DATA.clubName}</strong><br><span>${SITE_DATA.season}</span></div>
        <div><a href="${SITE_DATA.instagramUrl}" target="_blank" rel="noopener">${SITE_DATA.instagramLabel}</a><br><a href="mailto:${SITE_DATA.email}">${SITE_DATA.email}</a></div>
      </div>
    </footer>`;
}

function tripCard(t) {
  return `
    <article class="card trip-card">
      <div class="card-topline">${t.status}</div>
      <h3>${t.name}</h3>
      <p class="muted">${t.location}</p>
      <p>${t.dates}</p>
      <div class="card-bottom">
        <strong>${t.price}</strong>
        <a href="${t.signupUrl}" ${t.signupUrl !== "#" ? 'target="_blank" rel="noopener"' : ""}>Details →</a>
      </div>
    </article>`;
}

function renderTrips() {
  const all = document.getElementById("all-trips");
  const home = document.getElementById("home-trips");
  if (all) all.innerHTML = SITE_DATA.trips.map(tripCard).join("");
  if (home) home.innerHTML = SITE_DATA.trips.slice(0,3).map(tripCard).join("");
}

function renderExec() {
  const el = document.getElementById("exec-grid");
  if (!el) return;
  el.innerHTML = SITE_DATA.exec.map(p => `
    <article class="exec-card">
      <img src="${p.photo}" alt="${p.name}">
      <div class="exec-copy">
        <p class="eyebrow">${p.role}</p>
        <h3>${p.name}</h3>
        <p>${p.bio}</p>
      </div>
    </article>`).join("");
}

function renderDiscounts() {
  const el = document.getElementById("discount-grid");
  if (!el) return;
  el.innerHTML = SITE_DATA.discounts.map(d => `
    <article class="card">
      <h3>${d.name}</h3>
      <p>${d.description}</p>
      <a href="${d.url}" ${d.url !== "#" ? 'target="_blank" rel="noopener"' : ""}>${d.button} →</a>
    </article>`).join("");
}

function renderContact() {
  const email = document.getElementById("contact-email");
  const insta = document.getElementById("contact-instagram");
  const join = document.getElementById("contact-join");
  if (email) { email.textContent = SITE_DATA.email; email.href = `mailto:${SITE_DATA.email}`; }
  if (insta) { insta.textContent = SITE_DATA.instagramLabel; insta.href = SITE_DATA.instagramUrl; }
  if (join) join.href = SITE_DATA.joinUrl;
}

renderHeader();
renderFooter();
renderTrips();
renderExec();
renderDiscounts();
renderContact();
