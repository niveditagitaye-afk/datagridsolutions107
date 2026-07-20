/* ============================================
   HOME.JS — Homepage-specific interactions
   ============================================ */

// ── Hero Carousel ──
function initHeroCarousel() {
  const slides = document.querySelectorAll('[data-hero-slide]');
  const dots = document.querySelectorAll('[data-hero-dot]');
  const prevBtns = document.querySelectorAll('[data-hero-prev]');
  const nextBtns = document.querySelectorAll('[data-hero-next]');
  if (slides.length === 0) return;

  let currentIdx = 0;
  let paused = false;
  let touchStartX = null;
  const total = slides.length;

  function showSlide(idx) {
    const next = ((idx % total) + total) % total;
    slides.forEach((s, i) => {
      s.style.display = i === next ? 'block' : 'none';
      if (i === next) {
        s.classList.add('active');
        s.style.animation = 'hero-slide-in-right 0.65s cubic-bezier(0.22, 1, 0.36, 1) both';
      } else {
        s.classList.remove('active');
      }
    });
    dots.forEach((d, i) => {
      d.classList.toggle('active', i === next);
    });
    currentIdx = next;
  }

  function goNext() { showSlide(currentIdx + 1); }
  function goPrev() { showSlide(currentIdx - 1); }

  // Auto-advance
  let autoTimer;
  function startAuto() {
    clearInterval(autoTimer);
    if (!paused) {
      autoTimer = setInterval(goNext, 6000);
    }
  }

  // Pause on hover
  const heroSection = document.querySelector('.hero');
  if (heroSection) {
    heroSection.addEventListener('mouseenter', () => { paused = true; clearInterval(autoTimer); });
    heroSection.addEventListener('mouseleave', () => { paused = false; startAuto(); });
    // Touch swipe
    heroSection.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
    heroSection.addEventListener('touchend', (e) => {
      if (touchStartX == null) return;
      const dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 50) { dx < 0 ? goNext() : goPrev(); }
      touchStartX = null;
    }, { passive: true });
  }

  prevBtns.forEach((btn) => btn.addEventListener('click', goPrev));
  nextBtns.forEach((btn) => btn.addEventListener('click', goNext));
  dots.forEach((dot, i) => dot.addEventListener('click', () => showSlide(i)));

  showSlide(0);
  startAuto();
}

// ── Services Interactive Panel ──
function initServices() {
  const items = document.querySelectorAll('[data-service-index]');
  const detailPanel = document.querySelector('[data-service-detail]');
  const prevBtn = document.querySelector('[data-service-prev]');
  const nextBtn = document.querySelector('[data-service-next]');
  if (items.length === 0 || !detailPanel) return;

  const services = [
    { icon: 'code2', title: 'Custom Software Development', desc: 'Tailor-made software solutions designed around your unique business processes, goals, and long-term growth plans.', tags: ['Web Platforms', 'SaaS', 'Enterprise'], gradient: 'linear-gradient(135deg, var(--redorange), var(--orange-bright))' },
    { icon: 'brain', title: 'Generative AI / LLM', desc: 'Build intelligent AI-powered applications, copilots, and workflow automation systems using modern LLM technologies.', tags: ['LLMs', 'Copilots', 'RAG'], gradient: 'linear-gradient(135deg, var(--orange-bright), var(--orange))' },
    { icon: 'cpu', title: 'AI & ML Consultancy', desc: 'Identify, strategize, and implement practical AI and machine learning solutions for real business impact.', tags: ['Strategy', 'MLOps', 'Roadmaps'], gradient: 'linear-gradient(135deg, var(--orange), var(--orange-yellow))' },
    { icon: 'users', title: 'Resource Augmentation', desc: 'Quickly scale your engineering capabilities with dedicated developers, designers, QA engineers, and DevOps specialists.', tags: ['Dev Teams', 'QA', 'DevOps'], gradient: 'linear-gradient(135deg, var(--orange-yellow), var(--orange-light))' },
    { icon: 'workflow', title: 'ERP & Workflow Automation', desc: 'Streamline operations, improve visibility, and automate processes through scalable ERP and workflow systems.', tags: ['ERP', 'Automation', 'Ops'], gradient: 'linear-gradient(135deg, var(--orange), var(--redorange))' },
    { icon: 'smartphone', title: 'Mobile App Development', desc: 'Build fast, scalable, and user-friendly mobile applications for Android, iOS, and cross-platform environments.', tags: ['iOS', 'Android', 'Cross-platform'], gradient: 'linear-gradient(135deg, var(--orange-bright), var(--orange-yellow))' },
    { icon: 'cloud', title: 'Cloud Solutions', desc: 'Secure, scalable, and high-performance cloud infrastructure solutions for modern digital businesses.', tags: ['AWS', 'Azure', 'GCP'], gradient: 'linear-gradient(135deg, var(--redorange), var(--orange))' },
    { icon: 'megaphone', title: 'Digital Marketing', desc: 'Drive brand visibility, customer engagement, and lead generation through performance-focused digital marketing solutions.', tags: ['SEO', 'Performance', 'Content'], gradient: 'linear-gradient(135deg, var(--orange-yellow), var(--redorange))' },
  ];

  let active = 0;

  function renderDetail() {
    const s = services[active];
    const iconSvg = window.icon ? window.icon(s.icon, 32) : '';
    detailPanel.innerHTML = `
      <div class="services-detail-content" style="animation: fade-up 0.7s ease-out both;">
        <div class="service-detail-icon" style="background: ${s.gradient};">
          ${iconSvg}
        </div>
        <h3 class="service-detail-title">${s.title}</h3>
        <p class="service-detail-desc">${s.desc}</p>
        <div class="service-tags">
          ${s.tags.map(t => `<span class="service-tag">${t}</span>`).join('')}
        </div>
        <div class="service-nav-row">
          <div class="service-counter">
            <span class="current">${String(active + 1).padStart(2, '0')}</span>
            <span style="margin: 0 0.375rem;">/</span>
            <span>${String(services.length).padStart(2, '0')}</span>
          </div>
          <div style="display:flex;gap:0.5rem;">
            <button class="service-arrow-btn" data-service-prev aria-label="Previous service">
              <svg class="icon" width="16" height="16" viewBox="0 0 24 24" style="transform:rotate(180deg);"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
            <button class="service-arrow-btn" data-service-next aria-label="Next service">
              <svg class="icon" width="16" height="16" viewBox="0 0 24 24"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </div>
    `;
    // Re-bind nav buttons
    const newPrev = detailPanel.querySelector('[data-service-prev]');
    const newNext = detailPanel.querySelector('[data-service-next]');
    if (newPrev) newPrev.addEventListener('click', () => { active = (active - 1 + services.length) % services.length; updateList(); renderDetail(); });
    if (newNext) newNext.addEventListener('click', () => { active = (active + 1) % services.length; updateList(); renderDetail(); });
  }

  function updateList() {
    items.forEach((item, i) => {
      item.classList.toggle('active', i === active);
    });
  }

  items.forEach((item, i) => {
    item.addEventListener('mouseenter', () => { active = i; updateList(); renderDetail(); });
    item.addEventListener('click', () => { active = i; updateList(); renderDetail(); });
  });

  if (prevBtn) prevBtn.addEventListener('click', () => { active = (active - 1 + services.length) % services.length; updateList(); renderDetail(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { active = (active + 1) % services.length; updateList(); renderDetail(); });

  renderDetail();
}

// ── Tech Stack Tabs ──
function initTechStack() {
  const tabs = document.querySelectorAll('[data-tech-index]');
  const contentPanel = document.querySelector('[data-tech-content]');
  if (tabs.length === 0 || !contentPanel) return;

  const stack = [
    {
      cat: 'Backend Engineering', icon: 'server', gradient: 'linear-gradient(135deg, var(--redorange), var(--orange-bright))',
      items: [
        { name: 'Python', level: 'core' }, { name: 'Django' }, { name: 'Flask' },
        { name: 'FastAPI' }, { name: 'Laravel' }, { name: 'PHP' }, { name: 'Node.js', level: 'core' },
      ],
    },
    {
      cat: 'Frontend & Mobile', icon: 'palette', gradient: 'linear-gradient(135deg, var(--orange-bright), var(--orange))',
      items: [
        { name: 'React', level: 'core' }, { name: 'Next.js' }, { name: 'Vue.js' },
        { name: 'Flutter' }, { name: 'Android' }, { name: 'iOS' }, { name: 'React Native' },
      ],
    },
    {
      cat: 'AI & Data Engineering', icon: 'brain', gradient: 'linear-gradient(135deg, var(--orange), var(--orange-yellow))',
      items: [
        { name: 'OpenAI', level: 'ai' }, { name: 'LangChain', level: 'ai' }, { name: 'TensorFlow' },
        { name: 'PyTorch' }, { name: 'NLP' }, { name: 'Computer Vision' },
      ],
    },
    {
      cat: 'Cloud & DevOps', icon: 'cloud', gradient: 'linear-gradient(135deg, var(--orange-yellow), var(--redorange))',
      items: [
        { name: 'AWS', level: 'core' }, { name: 'Docker' }, { name: 'Kubernetes' },
        { name: 'CI/CD' }, { name: 'Redis' }, { name: 'MongoDB' }, { name: 'MySQL' },
      ],
    },
  ];

  let active = 0;

  function render() {
    const s = stack[active];
    const iconSvg = window.icon ? window.icon(s.icon, 28) : '';
    const chipsHtml = s.items.map(it => {
      const cls = it.level === 'core' ? 'tech-chip core' : it.level === 'ai' ? 'tech-chip ai' : 'tech-chip';
      const dot = it.level ? `<span class="chip-dot" style="background: ${it.level === 'core' ? 'var(--orange-bright)' : 'var(--orange-yellow)'};"></span>` : '';
      return `<span class="${cls}">${dot}${it.name}</span>`;
    }).join('');

    // Activity grid
    const palette = ['var(--orange-pale)', 'var(--orange-light)', 'var(--orange-yellow)', 'var(--orange-bright)'];
    const activityCells = Array.from({ length: 48 }, (_, k) => {
      const intensity = (k * 7 + 3) % palette.length;
      const isActive = (k * 5 + 2) % 9 > 2;
      return `<span style="background: ${isActive ? palette[intensity] : 'var(--muted)'};"></span>`;
    }).join('');

    contentPanel.innerHTML = `
      <div class="tech-content-left">
        <div class="tech-icon-box" style="background: ${s.gradient};">${iconSvg}</div>
        <h3 class="tech-cat-title">${s.cat}</h3>
        <p class="tech-cat-desc">${s.items.length} battle-tested technologies across our engineering practice.</p>
        <div class="tech-legend">
          <span class="legend-item"><span class="legend-dot" style="background: var(--orange-bright);"></span> core</span>
          <span class="legend-item"><span class="legend-dot" style="background: var(--orange-yellow);"></span> ai-native</span>
        </div>
      </div>
      <div class="tech-content-right">
        <div class="tech-chips">${chipsHtml}</div>
        <div class="tech-activity-grid">${activityCells}</div>
      </div>
    `;
  }

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
      active = i;
      tabs.forEach((t, j) => t.classList.toggle('active', j === i));
      render();
    });
  });

  render();
}

// ── Industries Pod Selector ──
function initIndustries() {
  const podBtns = document.querySelectorAll('[data-pod-id]');
  const spotlight = document.querySelector('[data-pod-spotlight]');
  if (podBtns.length === 0 || !spotlight) return;

  const clusters = [
    {
      id: 'biz', code: 'POD · 01', title: 'Business Platforms', blurb: 'Operating systems for organizations and teams.',
      items: [
        { l: 'Associations & Events', tagline: 'AMS + community OS', icon: 'calendar' },
        { l: 'Corporates', tagline: 'Internal platforms', icon: 'briefcase' },
        { l: 'Accounting', tagline: 'Books, audit, billing', icon: 'fileSpreadsheet' },
      ],
    },
    {
      id: 'commerce', code: 'POD · 02', title: 'Commerce & Lifestyle', blurb: 'Customer-facing retail, hospitality and brand tech.',
      items: [
        { l: 'Jewelry', tagline: 'Retail ERP & catalog', icon: 'gem' },
        { l: 'Retail & Ecommerce', tagline: 'Omnichannel commerce', icon: 'shoppingBag' },
        { l: 'Hospitality', tagline: 'Guest experience tech', icon: 'hotel' },
      ],
    },
    {
      id: 'ops', code: 'POD · 03', title: 'Operations & Supply', blurb: 'Workflows that move products, assets and land.',
      items: [
        { l: 'Manufacturing & Supply', tagline: 'Production + SCM', icon: 'factory' },
        { l: 'Agritech', tagline: 'Farm-to-supply intel', icon: 'leaf' },
        { l: 'Real Estate', tagline: 'CRM + property OS', icon: 'building2' },
      ],
    },
    {
      id: 'impact', code: 'POD · 04', title: 'Impact Sectors', blurb: 'Mission-driven platforms with real-world outcomes.',
      items: [
        { l: 'Education', tagline: 'LMS & campus ops', icon: 'graduationCap' },
        { l: 'Healthcare', tagline: 'EMR & care workflows', icon: 'stethoscope' },
        { l: 'Insurance', tagline: 'Claims & policy AI', icon: 'shieldCheck' },
      ],
    },
  ];

  let activeId = clusters[0].id;

  function renderSpotlight() {
    const active = clusters.find(c => c.id === activeId) || clusters[0];
    const tilesHtml = active.items.map((ind, idx) => {
      const iconSvg = window.icon ? window.icon(ind.icon, 20) : '';
      return `
        <div class="spotlight-tile" style="animation: fade-in 0.4s ease-out both; animation-delay: ${idx * 80}ms;">
          <div class="tile-top">
            <span class="tile-icon-box">${iconSvg}</span>
            <span class="tile-num">${String(idx + 1).padStart(2, '0')}</span>
          </div>
          <div class="tile-name">${ind.l}</div>
          <div class="tile-tag">${ind.tagline}</div>
        </div>
      `;
    }).join('');

    const dataTags = ['scalable', 'automation-ready', 'AI-augmented', 'long-term support']
      .map(t => `<span class="spotlight-data-tag"><span class="dot"></span>${t}</span>`).join('');

    spotlight.innerHTML = `
      <div class="spotlight-code-row">
        <span class="spotlight-code">${active.code}</span>
        <span class="spotlight-line"></span>
        <span class="spotlight-live">live</span>
      </div>
      <h3 class="spotlight-title">${active.title}</h3>
      <p class="spotlight-blurb">${active.blurb}</p>
      <div class="spotlight-tiles">${tilesHtml}</div>
      <div class="spotlight-tags-row">${dataTags}</div>
    `;
  }

  function updateActive() {
    podBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.podId === activeId);
    });
    renderSpotlight();
  }

  podBtns.forEach(btn => {
    btn.addEventListener('mouseenter', () => { activeId = btn.dataset.podId; updateActive(); });
    btn.addEventListener('click', () => { activeId = btn.dataset.podId; updateActive(); });
  });

  updateActive();
}

// ── Init all homepage interactions ──
function initHome() {
  initHeroCarousel();
  initServices();
  initTechStack();
  initIndustries();
}

// Run after global.js has set up header/footer
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => setTimeout(initHome, 100));
} else {
  setTimeout(initHome, 100);
}
