const products = window.STUDIO_PRODUCTS || [];
const grid = document.getElementById('products');
const search = document.getElementById('product-search');
const status = document.getElementById('product-status');
const filters = document.querySelector('.filters');
const buttons = [...filters.querySelectorAll('[data-filter]')];
const catalogBase = document.currentScript.src;
const pinterestPinPattern = /^https:\/\/www\.pinterest\.com\/pin\/(\d+)\/?$/i;
let activeCategory = 'All';

for (const category of new Set(products.map(product => product.category))) {
  if (buttons.some(button => button.dataset.filter === category)) continue;
  const button = document.createElement('button');
  button.type = 'button';
  button.dataset.filter = category;
  button.textContent = category;
  filters.append(button);
  buttons.push(button);
}

function searchText(value) {
  return value.toLowerCase().normalize('NFD').replace(/\p{M}/gu, '').replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
}

function productCard(product) {
  const pin = pinterestPinPattern.exec(product.pinUrl);
  const card = document.createElement('article');
  card.className = 'product';
  const productId = product.id || pin?.[1];
  if (productId) card.id = `product-${productId}`;
  const picture = document.createElement('div');
  picture.className = 'product-image';
  if (product.image) {
    const image = document.createElement('img');
    image.src = new URL(product.image, catalogBase).href;
    image.alt = product.imageAlt || product.title;
    image.loading = 'lazy';
    image.addEventListener('error', () => image.remove());
    picture.append(image);
  }

  const title = document.createElement('h4');
  title.className = 'product-title';
  title.textContent = product.title;

  const base = document.createElement('div');
  base.className = 'product-case-base';
  let disclosure;
  if (product.available === false) {
    const note = document.createElement('span');
    note.className = 'product-availability';
    note.textContent = 'Currently unavailable';
    base.append(note);
    const alternative = products.find(item => item.id && item.id === product.alternativeId && item !== product && item.available !== false);
    if (alternative) {
      const link = document.createElement('a');
      link.className = 'product-store-label';
      link.href = `?product=${encodeURIComponent(alternative.id)}`;
      link.textContent = `See alternative: ${alternative.title}`;
      base.append(link);
    }
  } else if (/^https:\/\//i.test(product.url)) {
    const isAmazon = /^https:\/\/(?:www\.amazon\.com|link\.amazon|amzn\.to)(?:[/?#]|$)/i.test(product.url);
    const label = isAmazon ? 'View on Amazon' : 'View this find';
    const link = document.createElement('a');
    link.className = 'product-store-label';
    link.href = product.url;
    link.target = '_blank';
    link.rel = 'sponsored noopener';
    link.textContent = `${label} ↗`;
    link.setAttribute('aria-label', `${label} — ${product.title} (paid link, opens in a new tab)`);
    disclosure = document.createElement('span');
    disclosure.className = 'product-link-disclosure';
    disclosure.textContent = '(paid link)';
    base.append(link);
  } else {
    const note = document.createElement('span');
    note.className = 'product-availability';
    note.textContent = 'Coming soon';
    base.append(note);
  }

  const niche = document.createElement('div');
  niche.className = 'product-niche';
  niche.append(picture, base);
  if (disclosure) niche.append(disclosure);
  card.append(title, niche);
  return card;
}

function render() {
  const query = searchText(search.value);
  const terms = query ? query.split(' ') : [];
  const visible = products.filter(product => {
    if (activeCategory !== 'All' && activeCategory !== product.category) return false;
    const text = searchText(`${product.title} ${product.category} ${product.description}`);
    return terms.every(term => text.includes(term));
  });

  const shelves = new Map();
  for (const product of visible) {
    if (!shelves.has(product.category)) shelves.set(product.category, []);
    shelves.get(product.category).push(productCard(product));
  }
  grid.replaceChildren(...Array.from(shelves, ([category, cards]) => {
    const shelf = document.createElement('section');
    shelf.className = 'product-shelf';
    const heading = document.createElement('h3');
    heading.textContent = category;
    const items = document.createElement('div');
    items.className = 'product-shelf-items';
    items.append(...cards);
    shelf.append(heading, items);
    return shelf;
  }));
  status.textContent = visible.length
    ? `${visible.length} ${visible.length === 1 ? 'find' : 'finds'}`
    : products.length
      ? 'No finds match these filters. Try another search or category.'
      : 'New finds are coming soon. Check back for fresh discoveries!';
}

function selectCategory(category) {
  activeCategory = category;
  for (const button of buttons) {
    const selected = button.dataset.filter === category;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-pressed', selected);
  }
  render();
}

for (const button of buttons) {
  button.addEventListener('click', () => selectCategory(button.dataset.filter));
}
for (const link of document.querySelectorAll('[data-category]')) {
  link.addEventListener('click', () => {
    search.value = '';
    selectCategory(link.dataset.category);
  });
}
search.addEventListener('input', render);
document.getElementById('year').textContent = new Date().getFullYear();
selectCategory('All');

const requestedProduct = new URLSearchParams(window.location.search).get('product');
const linkedItem = requestedProduct && products.find(product =>
  product.id === requestedProduct ||
  product.legacyPinId === requestedProduct ||
  pinterestPinPattern.exec(product.pinUrl)?.[1] === requestedProduct
);
const linkedProduct = linkedItem && document.getElementById(`product-${linkedItem.id || requestedProduct}`);
if (linkedProduct) {
  linkedProduct.tabIndex = -1;
  linkedProduct.focus({ preventScroll: true });
  linkedProduct.scrollIntoView({ behavior: 'instant' });
}
