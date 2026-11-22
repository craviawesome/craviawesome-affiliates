const products = window.STUDIO_PRODUCTS || [];
const grid = document.getElementById('products');
const buttons = [...document.querySelectorAll('[data-filter]')];
function render(category = 'All') {
  grid.replaceChildren();
  const visible = products.filter(p => category === 'All' || p.category === category);
  if (!visible.length) { const msg = document.createElement('p'); msg.className = 'empty'; msg.textContent = 'New finds are coming soon. Check back for fresh discoveries!'; grid.append(msg); return; }
  for (const p of visible) {
    const card = document.createElement('article'); card.className = 'product';
    const picture = document.createElement('div'); picture.className = 'product-image';
    if (p.image) { const img = document.createElement('img'); img.src = p.image; img.alt = p.title; img.loading = 'lazy'; picture.append(img); }
    else { picture.textContent = p.emoji || '✦'; picture.setAttribute('aria-hidden', 'true'); }
    const body = document.createElement('div'); body.className = 'product-body';
    const categoryEl = document.createElement('div'); categoryEl.className = 'product-category'; categoryEl.textContent = p.category;
    const title = document.createElement('h3'); title.textContent = p.title;
    const desc = document.createElement('p'); desc.textContent = p.description;
    body.append(categoryEl, title, desc);
    if (p.url && /^https:\/\//i.test(p.url)) { const link = document.createElement('a'); link.href = p.url; link.target = '_blank'; link.rel = 'sponsored noopener noreferrer'; link.textContent = 'View this find ↗'; link.setAttribute('aria-label', 'View '+p.title+' (affiliate link, opens in a new tab)'); body.append(link); }
    else { const note = document.createElement('span'); note.className = 'product-category'; note.textContent = 'Coming soon'; body.append(note); }
    card.append(picture, body); grid.append(card);
  }
}
buttons.forEach(button => button.addEventListener('click', () => { buttons.forEach(b => b.classList.toggle('active', b === button)); render(button.dataset.filter); }));
document.querySelectorAll('[data-category]').forEach(link => link.addEventListener('click', () => { const category = link.dataset.category; const button = buttons.find(b => b.dataset.filter === category); if (button) button.click(); }));
document.getElementById('year').textContent = new Date().getFullYear();
// Replace placeholder email address before publishing.
render();
