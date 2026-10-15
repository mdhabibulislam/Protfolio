/* ==========================================================================
   MD Habibul Islam — Portfolio
   All editable content lives in the DATA object below.
   ========================================================================== */

const DATA = {

  socialLinks: {
    linkedin: "https://www.linkedin.com/in/md-habibul-islam-350731287/",
    facebook: "https://www.facebook.com/share/1DbAa62d7p/?mibextid=wwXIfr",
    instagram: "https://www.instagram.com/peeeranto?stkn=ZjE5c2NiM29xbXJz&utm_source=qr"
  },

  work: [
    {
      role: "Business Analyst Intern",
      org: "Anwar Group of Industries",
      location: "Dhaka, Bangladesh",
      date: "2026 — Present",
      desc: "Applying quantitative research methods professionally — collecting, cleaning, and analyzing operational data to generate structured insights, KPI dashboards, and management reports.",
      tools: ["Power BI", "Excel", "SQL"]
    },
    {
      role: "Primary Researcher — Household Food Insecurity",
      org: "Independent Research · Published",
      location: "Bangladesh",
      date: "2025 — 2026",
      desc: "Designed research methodology and data collection instruments for a micro-level study of household food insecurity — applied regression-based econometric models to 500+ household observations and published findings in a peer-reviewed international journal.",
      tools: ["Econometric Modelling", "Regression Analysis", "Survey Design"]
    },
    {
      role: "Researcher — AI Employment Impact & Textile ESG",
      org: "Cross-sector Economic & Sustainability Research",
      location: "Bangladesh",
      date: "2024 — 2025",
      desc: "Conducted primary and secondary research on AI-driven employment transformation across 3 industries and ESG compliance challenges in Bangladesh's textile sector — both manuscripts in preparation for journal submission.",
      tools: ["Primary Research", "Secondary Research", "Sustainability Analysis"]
    }
  ],

  projects: [
    {
      client: "Anwar Group of Industries",
      title: "Demand Forecasting & BI System",
      summary: "Time-series forecasting and regression-based analytics on longitudinal business data, delivered as executive dashboards tracking KPIs for decision-makers.",
      image: "assets/images/work-anwar.jpg",
      modal: {
        problem: "Business stakeholders needed a clearer, faster read on performance trends than static spreadsheets could offer — both to forecast demand and to track KPI performance over time.",
        objective: "Build a forecasting and BI system that applies academic quantitative modelling methods in an applied data science context, translating raw longitudinal data into decision-ready dashboards.",
        data: "Longitudinal business datasets spanning 1,000+ observations.",
        methodology: "Time-series forecasting models combined with regression-based analytics, applying the same rigor used in academic quantitative modelling to a live business context.",
        analysis: "Forecasting models were developed and validated on the longitudinal dataset, with regression analysis used to explain performance drivers across the tracked KPIs.",
        visualization: "Findings were translated into 3 executive BI dashboards built in Power BI, supported by exploratory charting in Python (Pandas, Matplotlib).",
        insights: "Consolidating 8+ KPIs into a small set of executive dashboards made performance trends legible at a glance rather than buried across separate spreadsheets.",
        recommendations: "Use the forecasting outputs and dashboard views as a standing input to planning and performance reviews rather than a one-off report.",
        outcome: "3 executive BI dashboards tracking 8+ KPIs across 1,000+ observations, in ongoing use.",
        toolsFull: "Python (Pandas, Matplotlib), SQL, Excel, Power BI"
      },
      link: null
    },
    {
      client: "Independent Research · Published",
      title: "Household Food Insecurity in Bangladesh",
      summary: "A published, regression-based econometric study of economic vulnerability, income risk, and livelihood finance in Bangladeshi households.",
      image: "assets/images/campus-thesis.jpg",
      modal: {
        problem: "Household food insecurity in Bangladesh is shaped by overlapping factors — economic vulnerability, income risk, and access to livelihood finance — that are difficult to disentangle without formal modelling.",
        objective: "Design and execute an independent micro-level econometric study identifying the drivers of household food insecurity, and produce evidence that could inform food security and livelihood finance policy.",
        data: "Primary data collected from 500+ household observations, alongside an extensive secondary literature review.",
        methodology: "Research methodology, data collection instruments, and variable operationalization were designed from the ground up for a micro-level study of household food insecurity.",
        analysis: "Regression-based econometric models were applied to the household-level data to analyze economic vulnerability, income risk, and livelihood finance factors.",
        visualization: "Results were compiled into a policy-grade written report combining econometric output with supporting literature review.",
        insights: "The analysis connects household-level economic vulnerability and income risk directly to food insecurity outcomes, grounded in over 500 household observations.",
        recommendations: "The report sets out evidence-based recommendations for food security and livelihood finance interventions in Bangladesh.",
        outcome: "Published in the International Journal of Public Policy and Administration Research (Conscientia Beam), 2025–2026.",
        toolsFull: "Econometric modelling, regression analysis, survey design, primary & secondary data collection"
      },
      link: "https://archive.conscientiabeam.com/index.php/74/article/view/5169"
    }
  ],

  numbers: [
    { value: "500+", label: "Household observations analyzed" },
    { value: "3", label: "Executive BI dashboards built" },
    { value: "8+", label: "KPIs tracked" },
    { value: "1,000+", label: "Business observations modelled" }
  ],

  publications: [
    {
      title: "Household food insecurity in Bangladesh: a micro econometric analysis of economic vulnerability, income risk, and livelihood finance",
      journal: "International Journal of Public Policy and Administration Research, Conscientia Beam",
      year: "2025–2026",
      link: "https://archive.conscientiabeam.com/index.php/74/article/view/5169",
      preparation: false
    },
    {
      title: "Artificial Intelligence and Job Creation: Analyzing Employment Impact Across Retail, Education, and IT Industries in Bangladesh",
      journal: "Manuscript under preparation",
      year: "2025",
      link: null,
      preparation: true
    },
    {
      title: "Water Scarcity, Environmental Compliance, and ESG Challenges in Bangladesh's Textile Industry",
      journal: "Manuscript under preparation",
      year: "2025",
      link: null,
      preparation: true
    }
  ],

  education: [
    {
      when: "Graduated 2026",
      degree: "BBA — Business Analytics",
      org: "United International University, Dhaka, Bangladesh",
      detail: "Major GPA: 3.67 / 4.00",
      score: "3.08",
      scoreLabel: "CGPA / 4.00"
    },
    {
      when: "2020",
      degree: "Higher Secondary Certificate (HSC)",
      org: "Adamjee Cantonment College, Dhaka",
      detail: "",
      score: "4.50",
      scoreLabel: "GPA / 5.00"
    },
    {
      when: "2018",
      degree: "Secondary School Certificate (SSC)",
      org: "Tejgaon Adarsha School & College, Dhaka",
      detail: "",
      score: "4.67",
      scoreLabel: "GPA / 5.00"
    }
  ],

  skills: {
    "Business Analytics": ["Regression Analysis", "Hypothesis Testing", "Descriptive Statistics", "Time-Series Analysis"],
    "Business Intelligence": ["Power BI", "KPI Dashboards", "Management Reporting"],
    "Data & Programming": ["Python (Pandas, Matplotlib)", "SQL", "R (basic)", "Advanced Excel"],
    "Research Methods": ["Survey Design", "Literature Review", "Primary & Secondary Data Collection"],
    "Visualization": ["Power BI", "Matplotlib", "Excel Charts"],
    "Productivity": ["Microsoft Office 365", "Google Workspace", "LaTeX (basic)", "Notion"]
  },

  certifications: [
    { name: "Project Management For Entrepreneurs", issuer: "Project Management Institute (PMI)", date: "October 2026", credential: "Certificate of Course Completion", image: "assets/certifications/pmi-project-management.jpg" },
    { name: "Power BI for Beginners", issuer: "Simplilearn SkillUp", date: "June 2025", credential: "Certificate code: 8480212", image: "assets/certifications/simplilearn-powerbi.jpg" },
    { name: "SQL for Data Analysis", issuer: "Simplilearn SkillUp", date: "July 2025", credential: "Certificate code: 8657795", image: "assets/certifications/simplilearn-sql.jpg" },
    { name: "Crash Course on Python", issuer: "Interactive Cares", date: "", credential: "Certificate ID: 2d83a906-1632-48bd-a622-d2cecd1af228", image: "assets/certifications/interactive-cares-python.jpg" },
    { name: "Power of Mindset", issuer: "Anwar Learning Academy, Anwar Group of Industries", date: "June 2026", credential: "Certificate of Appreciation", image: "assets/certifications/anwar-power-of-mindset.jpg" }
  ]

};

/* ==========================================================================
   Render functions
   ========================================================================== */

function renderWork() {
  const el = document.getElementById("workRows");
  el.innerHTML = DATA.work.map((w, i) => `
    <div class="work-row reveal" data-work="${i}">
      <div>
        <div class="work-row-main">
          <h3>${w.role}</h3>
          <span class="work-org">${w.org} · ${w.location}</span>
        </div>
        <p class="work-desc">${w.desc}</p>
        <div class="work-tools">${w.tools.map(t => `<span>${t}</span>`).join("")}</div>
      </div>
      <div class="work-row-side">
        <span class="work-row-date">${w.date}</span>
      </div>
    </div>
  `).join("");
}

function renderProjects() {
  const el = document.getElementById("projectsGrid");
  el.innerHTML = DATA.projects.map((p, i) => `
    <article class="project-card reveal" data-project="${i}" tabindex="0" role="button" aria-label="View case study: ${p.title}">
      <div class="project-card-media">
        <img src="${p.image}" alt="" loading="lazy">
      </div>
      <div class="project-card-body">
        <div class="project-client">${p.client}</div>
        <h3>${p.title}</h3>
        <p>${p.summary}</p>
      </div>
    </article>
  `).join("");

  document.querySelectorAll("[data-project]").forEach(card => {
    card.addEventListener("click", () => openProjectModal(Number(card.dataset.project)));
    card.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openProjectModal(Number(card.dataset.project)); }
    });
  });
}

function renderNumbers() {
  const el = document.getElementById("numbersGrid");
  el.innerHTML = DATA.numbers.map(n => `
    <div class="number-item reveal">
      <span class="n-value">${n.value}</span>
      <span class="n-label">${n.label}</span>
    </div>
  `).join("");
}

function renderWriting() {
  const el = document.getElementById("writingList");
  el.innerHTML = DATA.publications.map(p => `
    <div class="writing-row reveal ${p.preparation ? "is-preparation" : ""}">
      <div>
        <h3>${p.title}</h3>
        <div class="writing-meta">${p.journal}</div>
      </div>
      <span class="writing-year">${p.year}</span>
      ${p.link ? `<a class="writing-link" href="${p.link}" target="_blank" rel="noopener">Read →</a>` : `<span class="writing-link" style="opacity:0.5; cursor:default;">In preparation</span>`}
    </div>
  `).join("");
}

function renderEducation() {
  const el = document.getElementById("eduList");
  el.innerHTML = DATA.education.map(e => `
    <div class="edu-item reveal">
      <div class="e-when">${e.when}</div>
      <div>
        <h3>${e.degree}</h3>
        <div class="e-org">${e.org}</div>
        ${e.detail ? `<div class="e-detail">${e.detail}</div>` : ""}
      </div>
      <div class="e-score">${e.score}<span>${e.scoreLabel}</span></div>
    </div>
  `).join("");
}

function renderSkills() {
  const el = document.getElementById("skillsGrid");
  el.innerHTML = Object.entries(DATA.skills).map(([category, tags]) => `
    <div class="skill-card reveal">
      <span class="label">${category}</span>
      <div class="tag-row">${tags.map(t => `<span>${t}</span>`).join("")}</div>
    </div>
  `).join("");
}

function renderCertifications() {
  const el = document.getElementById("certGrid");
  el.innerHTML = DATA.certifications.map((c, i) => `
    <div class="cert-card reveal" data-cert="${i}" tabindex="0" role="button" aria-label="View certificate: ${c.name}">
      <div class="cert-thumb-wrap"><img src="${c.image}" alt="" loading="lazy"></div>
      <div class="cert-card-body">
        <h3>${c.name}</h3>
        <div class="cert-issuer">${c.issuer}</div>
        ${c.date ? `<span class="cert-date">${c.date}</span>` : ""}
      </div>
    </div>
  `).join("");

  document.querySelectorAll("[data-cert]").forEach(card => {
    card.addEventListener("click", () => openCertLightbox(Number(card.dataset.cert)));
    card.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openCertLightbox(Number(card.dataset.cert)); }
    });
  });
}

function renderBooking() {
  const el = document.getElementById("bookingList");
  el.innerHTML = `
    <div class="booking-row">
      <span class="b-label">Email</span>
      <a class="b-value" href="mailto:mdhabibulislam.official@gmail.com" target="_blank">mdhabibulislam.official@gmail.com</a>
    </div>
    <div class="booking-row">
      <span class="b-label">Phone</span>
      <a class="b-value" href="tel:+8801791777359">+880 1791-777359</a>
    </div>
    <div class="booking-row">
      <span class="b-label">Location</span>
      <span class="b-value">Dhaka, Bangladesh</span>
    </div>
    <div class="booking-row">
      <span class="b-label">LinkedIn</span>
      <a class="b-value" href="${DATA.socialLinks.linkedin}" target="_blank" rel="noopener">md-habibul-islam</a>
    </div>
  `;
}

const SOCIAL_LABELS = { linkedin: "LinkedIn", facebook: "Facebook", instagram: "Instagram" };

function renderSocialLinks() {
  const entries = Object.entries(DATA.socialLinks).filter(([, url]) => !!url);
  const plain = entries.map(([key, url]) => `<a href="${url}" target="_blank" rel="noopener">${SOCIAL_LABELS[key]}</a>`).join("");

  const footerSocial = document.getElementById("footerSocial");
  if (footerSocial) footerSocial.innerHTML = plain;

  const mobileMenuSocial = document.getElementById("mobileMenuSocial");
  if (mobileMenuSocial) mobileMenuSocial.innerHTML = plain;
}

/* ==========================================================================
   Project modal
   ========================================================================== */

let currentProject = 0;

function openProjectModal(index) {
  currentProject = index;
  const p = DATA.projects[index];
  const m = p.modal;

  document.getElementById("modalKicker").textContent = p.client;
  document.getElementById("modalTitle").textContent = p.title;

  const blocks = [
    ["01", "Business Problem", m.problem],
    ["02", "Objective", m.objective],
    ["03", "Data", m.data],
    ["04", "Methodology", m.methodology],
    ["05", "Analysis", m.analysis],
    ["06", "Visualization", m.visualization],
    ["07", "Key Insights", m.insights],
    ["08", "Recommendations", m.recommendations],
    ["09", "Outcome", m.outcome],
    ["10", "Tools", m.toolsFull],
  ];

  document.getElementById("modalBody").innerHTML = blocks.map(([n, label, body]) => `
    <div class="modal-block">
      <div class="m-index">${n}</div>
      <div>
        <div class="m-label">${label}</div>
        <div class="m-body">${body}</div>
      </div>
    </div>
  `).join("") + (p.link ? `<div style="margin-top:1.5rem;"><a class="bio-link" href="${p.link}" target="_blank" rel="noopener">Read the published paper →</a></div>` : "");

  const overlay = document.getElementById("projectModal");
  overlay.classList.add("is-open");
  document.body.style.overflow = "hidden";
  document.getElementById("modalClose").focus();
}

function closeProjectModal() {
  document.getElementById("projectModal").classList.remove("is-open");
  document.body.style.overflow = "";
}

function initModal() {
  document.getElementById("modalClose").addEventListener("click", closeProjectModal);
  document.getElementById("projectModal").addEventListener("click", e => {
    if (e.target.id === "projectModal") closeProjectModal();
  });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeProjectModal(); });
  document.getElementById("modalNext").addEventListener("click", () => openProjectModal((currentProject + 1) % DATA.projects.length));
  document.getElementById("modalPrev").addEventListener("click", () => openProjectModal((currentProject - 1 + DATA.projects.length) % DATA.projects.length));
}

/* ==========================================================================
   Certificate lightbox
   ========================================================================== */

let currentCert = 0;

function openCertLightbox(index) {
  currentCert = index;
  const c = DATA.certifications[index];
  document.getElementById("certLightboxImg").src = c.image;
  document.getElementById("certLightboxImg").alt = `${c.name} — ${c.issuer}`;
  document.getElementById("certLightboxTitle").textContent = c.name;
  document.getElementById("certLightboxMeta").textContent = `${c.issuer}${c.date ? " · " + c.date : ""}${c.credential ? " · " + c.credential : ""}`;

  const overlay = document.getElementById("certLightbox");
  overlay.classList.add("is-open");
  document.body.style.overflow = "hidden";
  document.getElementById("certLightboxClose").focus();
}

function closeCertLightbox() {
  document.getElementById("certLightbox").classList.remove("is-open");
  document.body.style.overflow = "";
}

function initCertLightbox() {
  document.getElementById("certLightboxClose").addEventListener("click", closeCertLightbox);
  document.getElementById("certLightbox").addEventListener("click", e => { if (e.target.id === "certLightbox") closeCertLightbox(); });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeCertLightbox();
    if (!document.getElementById("certLightbox").classList.contains("is-open")) return;
    if (e.key === "ArrowRight") openCertLightbox((currentCert + 1) % DATA.certifications.length);
    if (e.key === "ArrowLeft") openCertLightbox((currentCert - 1 + DATA.certifications.length) % DATA.certifications.length);
  });
}

/* ==========================================================================
   Cursor dot
   ========================================================================== */

function initCursorDot() {
  if (!window.matchMedia("(pointer: fine)").matches) return;
  const dot = document.getElementById("cursorDot");
  dot.classList.add("is-active");
  let raf = null;
  document.addEventListener("mousemove", e => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      dot.style.left = e.clientX + "px";
      dot.style.top = e.clientY + "px";
      raf = null;
    });
  });
  document.querySelectorAll(".project-card, .cert-card").forEach(el => {
    el.addEventListener("mouseenter", () => { dot.classList.add("is-hover"); dot.textContent = "View"; });
    el.addEventListener("mouseleave", () => { dot.classList.remove("is-hover"); dot.textContent = ""; });
  });
}

/* ==========================================================================
   Navbar, mobile menu, theme toggle, reveal, pipeline, back-to-top
   ========================================================================== */

function initNav() {
  const navbar = document.getElementById("navbar");
  const navToggle = document.getElementById("navToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("is-scrolled", window.scrollY > 8);
  }, { passive: true });

  navToggle.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("is-open");
    navToggle.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  mobileMenu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      mobileMenu.classList.remove("is-open");
      navToggle.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    });
  });

  const sections = document.querySelectorAll("main section[id]");
  const navItems = document.querySelectorAll("[data-nav]");
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navItems.forEach(a => a.classList.remove("active"));
        document.querySelectorAll(`[data-nav][href="#${entry.target.id}"]`).forEach(a => a.classList.add("active"));
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
  sections.forEach(s => sectionObserver.observe(s));
}

function initTheme() {
  const toggle = document.getElementById("themeToggle");
  const root = document.documentElement;
  let saved = null;
  try { saved = localStorage.getItem("mhi-theme"); } catch (e) {}
  if (saved === "dark" || saved === "light") root.setAttribute("data-theme", saved);
  else root.setAttribute("data-theme", "dark");

  toggle.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("mhi-theme", next); } catch (e) {}
  });
}

function initReveal() {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealEls = document.querySelectorAll(".reveal");
  if (prefersReduced) { revealEls.forEach(el => el.classList.add("is-visible")); return; }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => observer.observe(el));
}

function initPipelineReveal() {
  const steps = document.querySelectorAll(".pipeline-step");
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("is-visible"), i * 80);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  steps.forEach(s => observer.observe(s));
}

function initBackToTop() {
  const btn = document.getElementById("backToTop");
  window.addEventListener("scroll", () => { btn.classList.toggle("is-visible", window.scrollY > 700); }, { passive: true });
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  });
}

/* ==========================================================================
   Init
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  renderSocialLinks();
  renderWork();
  renderProjects();
  renderNumbers();
  renderWriting();
  renderEducation();
  renderSkills();
  renderCertifications();
  renderBooking();

  initNav();
  initTheme();
  initModal();
  initCertLightbox();
  initReveal();
  initPipelineReveal();
  initBackToTop();
  initCursorDot();
  initCVDownload();

  document.getElementById("year").textContent = new Date().getFullYear();
});

/* ================= CV DOWNLOAD =================
   On the live site, the anchor's own `download` attribute just works.
   Inside a Claude artifact preview, plain download links are inert, so
   when the page is running inside Claude we intercept the click and
   hand the file to the viewer through the `downloads` capability instead. */
function initCVDownload() {
  const links = document.querySelectorAll(".cv-download");
  if (!links.length) return;

  // Only intercept when an artifact-hosting `window.claude` is present.
  if (typeof window.claude === "undefined" || typeof window.claude.use !== "function") {
    return;
  }

  links.forEach((link) => {
    link.addEventListener("click", async (e) => {
      e.preventDefault();
      try {
        const downloads = await window.claude.use("downloads");
        if (!downloads || typeof window.__CV_PDF_BASE64__ !== "string") {
          window.open(link.getAttribute("href"), "_blank");
          return;
        }
        const binary = atob(window.__CV_PDF_BASE64__);
        const bytes = new Uint8Array(binary.length);
        for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
        const blob = new Blob([bytes], { type: "application/pdf" });
        await downloads.save({
          filename: link.getAttribute("download") || "MD-Habibul-Islam-CV.pdf",
          data: blob,
        });
      } catch (err) {
        // Viewer declined, or the capability is unavailable — nothing more to do.
        console.warn("CV download unavailable:", err && err.code ? err.code : err);
      }
    });
  });
}


/* Auto-fit the hero name so it never clips or wraps, whatever font loads */
function fitHeroNames() {
  const stack = document.querySelector(".hero-stack");
  const names = document.querySelectorAll(".hero-name-top, .hero-name-bottom");
  if (!stack || !names.length) return;
  names.forEach((el) => { el.style.fontSize = ""; });
  const avail = stack.clientWidth;
  names.forEach((el) => {
    const range = document.createRange();
    range.selectNodeContents(el);
    const w = range.getBoundingClientRect().width;
    if (w > avail) {
      const cur = parseFloat(getComputedStyle(el).fontSize);
      el.style.fontSize = Math.floor(cur * (avail / w) * 0.98 * 10) / 10 + "px";
    }
  });
}
window.addEventListener("load", fitHeroNames);
window.addEventListener("resize", fitHeroNames);
if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitHeroNames);
