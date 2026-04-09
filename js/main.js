// main.js — DoWin Site Application Logic
let currentFilter = 'all';
let currentProductId = null;
let currentImgIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  setupNavbar();
  setupScrollSpy();
  setupNavToggle();
  setupFilters();
  setupFeatureTabs();
  setupModal();
  setupForm();
  setupSearch();
  populateProductSelect();
  renderProducts('all');
});

// ── Navbar scroll shadow ──
function setupNavbar() {
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    nav.classList.toggle('scrolled', window.scrollY > 20);
  });
}

// ── Active nav link on scroll ──
function setupScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 100;
      if (window.scrollY >= top) current = sec.getAttribute('id');
    });
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
    });
  });
}

// ── Mobile nav ──
function setupNavToggle() {
  document.getElementById('mobile-toggle').addEventListener('click', () => {
    document.getElementById('nav-links').classList.toggle('active');
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => {
      document.getElementById('nav-links').classList.remove('active');
    });
  });
  document.getElementById('lang-select').addEventListener('change', e => {
    setLanguage(e.target.value);
  });
}

// ── Product filters ──
function setupFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderProducts(currentFilter);
    });
  });
}

// ── Product search ──
function setupSearch() {
  const input = document.getElementById('product-search');
  input.addEventListener('input', () => {
    const query = input.value.trim().toLowerCase();
    if (query.length === 0) {
      renderProducts(currentFilter);
      return;
    }
    const filtered = products.filter(p => {
      const inName = p.name.toLowerCase().includes(query);
      const inId = p.id.toLowerCase().includes(query);
      const inSpecs = Object.values(p.specs).some(v => v.toLowerCase().includes(query));
      const inDesc = p.desc.toLowerCase().includes(query);
      return inName || inId || inSpecs || inDesc;
    });
    document.getElementById('product-grid').innerHTML = filtered.length === 0
      ? '<p style="padding:2rem;text-align:center;color:#999;">未找到匹配的产品</p>'
      : filtered.map(p => `
        <div class="product-card" data-id="${p.id}">
          <div class="product-thumb">
            <img src="${ASSET_BASE}/${p.images[0]}" alt="${p.name}" onerror="this.style.display='none'; this.parentElement.style.fontSize='3rem'; this.parentElement.textContent='📷';">
          </div>
          <div class="product-info">
            <div class="product-cat">${getCategoryLabel(p.category, currentLang)}</div>
            <h3 class="product-name">${p.name}</h3>
            <p class="product-desc">${p.desc}</p>
          </div>
        </div>
      `).join('');
    document.querySelectorAll('.product-card').forEach(card => {
      card.addEventListener('click', () => openProductModal(card.dataset.id));
    });
  });
}

// ── Feature tabs ──
function setupFeatureTabs() {
  document.querySelectorAll('.feat-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.feat-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.feat-panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(`tab-${tab.dataset.tab}`).classList.add('active');
    });
  });
}

function updateFeatureTab() {
  const activeTab = document.querySelector('.feat-tab.active');
  if (activeTab) {
    document.querySelectorAll('.feat-panel').forEach(p => p.classList.remove('active'));
    document.getElementById(`tab-${activeTab.dataset.tab}`).classList.add('active');
  }
}

// ── Render products ──
function renderProducts(filter) {
  const grid = document.getElementById('product-grid');
  const filtered = filter === 'all'
    ? products
    : products.filter(p => p.category === filter);

  grid.innerHTML = filtered.map(p => `
    <div class="product-card" data-id="${p.id}">
      <div class="product-thumb">
        <img src="${ASSET_BASE}/${p.images[0]}" alt="${p.name}"
             onerror="this.style.display='none'; this.parentElement.style.fontSize='3rem'; this.parentElement.textContent='📷';">
      </div>
      <div class="product-info">
        <div class="product-cat">${getCategoryLabel(p.category, currentLang)}</div>
        <h3 class="product-name">${p.name}</h3>
        <p class="product-desc">${p.desc}</p>
        <div class="product-materials">
          ${p.materials.slice(0, 3).map(m => `<span class="mat-tag">${m}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => openProductModal(card.dataset.id));
  });
}

function getCategoryLabel(cat, lang) {
  const labels = {
    'leather-packaging': { en: 'Leather Packaging', zh: '皮革包装' },
    'gift-baskets': { en: 'Gift Baskets', zh: '礼品篮' },
    'wine-baskets': { en: 'Wine Baskets', zh: '红酒篮' },
    'accessories': { en: 'Accessories', zh: '配件' }
  };
  return labels[cat]?.[lang] || cat;
}

// ── Product Modal ──
function openProductModal(id) {
  currentProductId = id;
  currentImgIndex = 0;
  const p = products.find(x => x.id === id);
  if (!p) return;

  const lang = currentLang;
  const catLabel = getCategoryLabel(p.category, lang);
  const total = p.images.length;

  document.getElementById('modal-body').innerHTML = `
    <div class="detail-hero">
      <div class="detail-gallery">
        <div class="gallery-main" onclick="galleryNext()" style="cursor:pointer;" title="Click to next">
          <img id="gallery-img" src="${ASSET_BASE}/${p.images[0]}" alt="${p.name}"
               onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22><rect fill=%22%23f0f0f0%22 width=%22400%22 height=%22300%22/><text x=%2250%%22 y=%2250%%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22%23999%22 font-size=%2224%22>Image</text></svg>'">
          ${total > 1 ? `
          <button class="gallery-btn gallery-prev" onclick="event.stopPropagation(); galleryPrev()">‹</button>
          <button class="gallery-btn gallery-next" onclick="event.stopPropagation(); galleryNext()">›</button>
          <div class="gallery-counter">${currentImgIndex + 1} / ${total}</div>
          ` : ''}
        </div>
        ${total > 1 ? `
        <div class="gallery-thumbs">
          ${p.images.map((img, i) => `
            <div class="gallery-thumb ${i === 0 ? 'active' : ''}" onclick="galleryGoTo(${i})">
              <img src="${ASSET_BASE}/${img}" alt="View ${i+1}">
            </div>
          `).join('')}
        </div>
        ` : ''}
        <div class="gallery-stack">
          <div class="stack-label">All Product Views</div>
          <div class="gallery-stack-items">
            ${p.images.map((img, i) => `
              <div class="stack-item" onclick="openProductLightbox(${i})">
                <img src="${ASSET_BASE}/${img}" alt="View ${i+1}">
                <div class="stack-caption">View ${i+1} — ${total}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
      <div class="detail-info">
        <div class="detail-cat">${catLabel}</div>
        <h2 class="detail-title">${p.name}</h2>
        <p class="detail-desc">${p.desc}</p>
        <div class="detail-scenes">
          ${p.scenes.map(s => `<span class="scene-tag">${s}</span>`).join('')}
        </div>
        <div class="detail-materials">
          <span class="mat-label">Materials:</span>
          ${p.materials.map(m => `<span class="mat-tag">${m}</span>`).join('')}
        </div>
        <a href="#contact" class="btn-inquiry" onclick="closeModal()">Get Quote</a>
      </div>
    </div>
    <div class="detail-specs">
      <h4>Specifications</h4>
      <table class="spec-table">
        ${Object.entries(p.specs).map(([k, v]) => `
          <tr><td>${k}</td><td>${v}</td></tr>
        `).join('')}
      </table>
    </div>
  `;

  document.getElementById('product-modal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function galleryGoTo(index) {
  const p = products.find(x => x.id === currentProductId);
  if (!p) return;
  currentImgIndex = index;
  document.getElementById('gallery-img').src = ASSET_BASE + '/' + p.images[index];
  document.querySelectorAll('.gallery-thumb').forEach((th, i) => {
    th.classList.toggle('active', i === index);
  });
}

function galleryPrev() {
  const p = products.find(x => x.id === currentProductId);
  if (!p) return;
  galleryGoTo((currentImgIndex - 1 + p.images.length) % p.images.length);
}

function galleryNext() {
  const p = products.find(x => x.id === currentProductId);
  if (!p) return;
  galleryGoTo((currentImgIndex + 1) % p.images.length);
}

let lbImages = [];
let lbIdx = 0;

function openProductLightbox(index) {
  const p = products.find(x => x.id === currentProductId);
  if (!p) return;
  lbImages = p.images;
  lbIdx = index;
  updateLightbox();
  document.getElementById('product-lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function updateLightbox() {
  document.getElementById('lb-img').src = ASSET_BASE + '/' + lbImages[lbIdx];
  document.getElementById('lb-counter').textContent = (lbIdx + 1) + ' / ' + lbImages.length;
  document.getElementById('lb-caption').textContent = 'View ' + (lbIdx + 1);
}

function lbPrev() { lbIdx = (lbIdx - 1 + lbImages.length) % lbImages.length; updateLightbox(); }
function lbNext() { lbIdx = (lbIdx + 1) % lbImages.length; updateLightbox(); }

function closeProductLightbox() {
  document.getElementById('product-lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

function setupModal() {
  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('product-modal').addEventListener('click', e => {
    if (e.target.id === 'product-modal') closeModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeModal(); closeProductLightbox(); }
    if (e.key === 'ArrowLeft') galleryPrev();
    if (e.key === 'ArrowRight') galleryNext();
    const lb = document.getElementById('product-lightbox');
    if (lb.classList.contains('open')) {
      if (e.key === 'ArrowLeft') lbPrev();
      if (e.key === 'ArrowRight') lbNext();
    }
  });
}

function closeModal() {
  document.getElementById('product-modal').classList.remove('active');
  document.body.style.overflow = '';
  currentProductId = null;
}

// ── Form ──
function setupForm() {
  document.getElementById('inquiry-form').addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log('Inquiry:', Object.fromEntries(data));
    showToast(t[currentLang].toast.success);
    e.target.reset();
  });
}

// ── Product select dropdown ──
function populateProductSelect() {
  const select = document.getElementById('f-product');
  products.forEach(p => {
    const opt = document.createElement('option');
    opt.value = p.id;
    opt.textContent = p.name;
    select.appendChild(opt);
  });
}

// ── Scroll to product category ──
function scrollToProducts(category) {
  currentFilter = category;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  const btn = document.querySelector(`.filter-btn[data-filter="${category}"]`);
  if (btn) btn.classList.add('active');
  renderProducts(category);
  document.getElementById('products').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ── Toast ──
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}
