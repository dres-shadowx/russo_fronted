/**
 * Russo Joyería — catálogo, filtros, bolsa y pedido por WhatsApp.
 * La interfaz vive en index.html y el sistema visual en css/custom.css.
 */

// Estado global de la aplicación
const AppState = {
  products: PRODUCTS_DATA,
  filteredProducts: [],
  cart: [],
  activeCategory: 'all',
  searchQuery: '',
  sortBy: 'featured',
  selectedProduct: null,
  selectedVariant: null
};

// Formateador de moneda en pesos colombianos
const formatCOP = (amount) => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0
  }).format(amount) + ' COP';
};

// Escape para todo texto que venga del catálogo o del panel admin
const esc = (value) => String(value ?? '').replace(/[&<>"']/g, (character) => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
}[character]));

// Imagen de respaldo cuando una foto no carga
const getFallbackImage = () => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="900" viewBox="0 0 900 900"><rect width="900" height="900" fill="#efefef"/><circle cx="450" cy="400" r="150" fill="none" stroke="#9a7b3f" stroke-width="3" stroke-dasharray="8,8"/><path d="M390 400 L450 320 L510 400 L450 480 Z" fill="#0f5b45" opacity="0.85"/><text x="450" y="650" font-family="Georgia,serif" font-size="38" fill="#1c2622" text-anchor="middle" letter-spacing="10">RUSSO</text><text x="450" y="700" font-family="Arial,sans-serif" font-size="22" fill="#59635d" text-anchor="middle" letter-spacing="4">ORO LAMINADO 18K</text></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

// Los iconos viven en un sprite SVG dentro de index.html.
function renderIcons() {
  /* Sin dependencia de Lucide: el sprite ya está en el documento. */
}

// =========================================================================
// Inicialización
// =========================================================================
document.addEventListener('DOMContentLoaded', async () => {
  initCart();
  await loadProductsFromAPI();   // API primero; si falla, queda el catálogo local
  renderCategoryPills();
  applyFiltersAndRender();
  setupEventListeners();
  updateCartUI();
});

/**
 * Carga el catálogo desde el backend.
 * Si la API está apagada, se conserva el catálogo local de `data/products.js`,
 * así la tienda nunca se queda en blanco.
 */
async function loadProductsFromAPI() {
  if (!window.RussoAPI) return;

  try {
    const data = await RussoAPI.listProducts({ limit: 500 });
    const products = Array.isArray(data) ? data : data.products;

    if (products && products.length > 0) {
      AppState.products = products;
      console.info(`[Russo] Catálogo cargado desde la API: ${products.length} productos.`);
    }

    // Mantenemos los contadores de las pestañas sincronizados con la API.
    const categorias = await RussoAPI.listCategories();
    if (Array.isArray(categorias) && categorias.length > 0) {
      const total = categorias.reduce((suma, c) => suma + Number(c.count || 0), 0);
      RUSSO_CONFIG.categories = [
        {
          id: 'all',
          name: 'Todos',
          count: total,
          icon: 'sparkles',
          description: 'Todas las piezas disponibles'
        },
        ...categorias.map(c => ({
          id: c.id,
          name: c.name,
          count: Number(c.count || 0),
          icon: c.icon || 'sparkles',
          description: c.description || ''
        }))
      ];
    }
  } catch (error) {
    console.warn('[Russo] API no disponible. Usando catálogo local.', error.message);
  }
}

// =========================================================================
// Bolsa: persistencia y operaciones
// =========================================================================
function initCart() {
  try {
    const savedCart = localStorage.getItem('russo_cart');
    if (savedCart) {
      AppState.cart = JSON.parse(savedCart);
    }
  } catch (e) {
    console.error('Error cargando la bolsa desde localStorage', e);
    AppState.cart = [];
  }
}

function saveCart() {
  try {
    localStorage.setItem('russo_cart', JSON.stringify(AppState.cart));
  } catch (e) {
    console.error('Error guardando en localStorage', e);
  }
  updateCartUI();
}

function addToCart(productId, variantCode = null, quantity = 1) {
  const product = AppState.products.find(p => p.id === productId);
  if (!product) return;

  // Si no se especificó variante, toma la primera disponible
  let chosenVariant = null;
  if (product.variants && product.variants.length > 0) {
    chosenVariant = variantCode
      ? product.variants.find(v => v.code === variantCode) || product.variants[0]
      : product.variants[0];
  }

  const cartItemId = `${product.id}-${chosenVariant ? chosenVariant.code : 'std'}`;
  const existingItemIndex = AppState.cart.findIndex(item => item.cartItemId === cartItemId);

  if (existingItemIndex > -1) {
    AppState.cart[existingItemIndex].quantity += quantity;
  } else {
    AppState.cart.push({
      cartItemId: cartItemId,
      id: product.id,
      name: product.name,
      ref: product.ref,
      price: product.price,
      image: product.image,
      category: product.categoryName,
      variant: chosenVariant ? chosenVariant.name : 'Estándar',
      quantity: quantity
    });
  }

  saveCart();
  showToast(`Se agregó “${product.name}” a la bolsa.`);
  openCartDrawer();
}

function updateCartQuantity(cartItemId, delta) {
  const itemIndex = AppState.cart.findIndex(item => item.cartItemId === cartItemId);
  if (itemIndex === -1) return;

  AppState.cart[itemIndex].quantity += delta;

  if (AppState.cart[itemIndex].quantity <= 0) {
    AppState.cart.splice(itemIndex, 1);
    showToast('Se quitó la pieza de la bolsa.');
  }

  saveCart();
}

function removeFromCart(cartItemId) {
  AppState.cart = AppState.cart.filter(item => item.cartItemId !== cartItemId);
  saveCart();
  showToast('Se quitó la pieza de la bolsa.');
}

function clearCart() {
  if (AppState.cart.length === 0) return;
  if (confirm('¿Quieres vaciar la bolsa?')) {
    AppState.cart = [];
    saveCart();
    showToast('La bolsa quedó vacía.');
  }
}

// =========================================================================
// Catálogo y filtros
// =========================================================================
function renderCategoryPills() {
  const container = document.getElementById('category-pills-container');
  if (!container) return;

  container.innerHTML = RUSSO_CONFIG.categories.map(cat => {
    const isActive = AppState.activeCategory === cat.id;
    return `
      <button
        type="button"
        class="category-tab"
        aria-pressed="${isActive}"
        onclick="setCategory('${esc(cat.id)}')"
      >
        <span>${esc(cat.name)}</span>
        <span class="category-count">${Number(cat.count || 0)}</span>
      </button>
    `;
  }).join('');
}

function setCategory(categoryId) {
  AppState.activeCategory = categoryId;
  renderCategoryPills();
  applyFiltersAndRender();

  const catalogSection = document.getElementById('catalogo');
  if (catalogSection) {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    catalogSection.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  }
}

function applyFiltersAndRender() {
  let list = [...AppState.products];

  // 1. Filtro de categoría
  if (AppState.activeCategory !== 'all') {
    list = list.filter(p => p.category === AppState.activeCategory);
  }

  // 2. Búsqueda por nombre, referencia, descripción o categoría
  if (AppState.searchQuery.trim() !== '') {
    const query = AppState.searchQuery.toLowerCase().trim();
    list = list.filter(p =>
      p.name.toLowerCase().includes(query) ||
      p.ref.toLowerCase().includes(query) ||
      (p.description || '').toLowerCase().includes(query) ||
      p.categoryName.toLowerCase().includes(query)
    );
  }

  // 3. Orden
  if (AppState.sortBy === 'price-asc') {
    list.sort((a, b) => a.price - b.price);
  } else if (AppState.sortBy === 'price-desc') {
    list.sort((a, b) => b.price - a.price);
  } else if (AppState.sortBy === 'name') {
    list.sort((a, b) => a.name.localeCompare(b.name, 'es'));
  } else {
    list.sort((a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0));
  }

  AppState.filteredProducts = list;
  renderProductsGrid();
  updateResultsCount();
}

function updateResultsCount() {
  const countEl = document.getElementById('results-count');
  if (!countEl) return;

  const total = AppState.filteredProducts.length;
  countEl.textContent = total === 1
    ? '1 pieza disponible'
    : `${new Intl.NumberFormat('es-CO').format(total)} piezas disponibles`;
}

function renderProductsGrid() {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  if (AppState.filteredProducts.length === 0) {
    grid.innerHTML = `
      <div class="catalog-empty">
        <h3>No encontramos esa pieza</h3>
        <p>Prueba con otra palabra, una referencia o cambia la categoría.</p>
        <button type="button" class="btn btn-outline" onclick="resetFilters()">
          Limpiar búsqueda y filtros
        </button>
      </div>
    `;
    return;
  }

  grid.innerHTML = AppState.filteredProducts.map(product => {
    const hasDiscount = product.originalPrice && product.originalPrice > product.price;
    const discountPercent = hasDiscount
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : 0;
    const variants = Array.isArray(product.variants) ? product.variants : [];
    const showVariants = variants.length > 1;

    return `
      <article class="product-card">
        <button
          type="button"
          class="product-media"
          data-action="quick-view"
          data-product-id="${esc(product.id)}"
        >
          <img
            src="${esc(product.image)}"
            alt="${esc(product.name)}"
            width="900"
            height="900"
            loading="lazy"
            decoding="async"
            onerror="this.onerror=null;this.src='${getFallbackImage()}';"
          >

          <span class="product-badges">
            ${product.isBestSeller ? '<span class="product-badge">Más vendido</span>' : ''}
            ${product.isNew ? '<span class="product-badge product-badge--new">Nuevo</span>' : ''}
          </span>

          ${hasDiscount ? `<span class="product-discount">-${discountPercent}%</span>` : ''}

          <span class="product-quick">
            <svg class="icon" aria-hidden="true"><use href="#i-eye"/></svg>
            Ver pieza
          </span>
        </button>

        <div class="product-body">
          <div class="product-meta">
            <span>${esc(product.categoryName)}</span>
            <span class="product-ref">${esc(product.ref)}</span>
          </div>

          <h3 class="product-name">
            <button
              type="button"
              data-action="quick-view"
              data-product-id="${esc(product.id)}"
            >
              ${esc(product.name)}
            </button>
          </h3>

          ${showVariants ? `
            <div class="product-variants" data-product-id="${esc(product.id)}" role="group" aria-label="Variante de ${esc(product.name)}">
              ${variants.map((v, index) => `
                <button
                  type="button"
                  class="variant-btn"
                  data-action="variant"
                  data-product-id="${esc(product.id)}"
                  data-variant-code="${esc(v.code)}"
                  aria-pressed="${index === 0}"
                >
                  ${esc(v.name)}
                </button>
              `).join('')}
            </div>
          ` : ''}

          <div class="product-price-row">
            <span class="price">${formatCOP(product.price)}</span>
            ${hasDiscount ? `<span class="price-old">${formatCOP(product.originalPrice)}</span>` : ''}
          </div>

          <div class="product-actions">
            <button
              type="button"
              class="btn btn-outline btn-sm"
              data-action="add"
              data-product-id="${esc(product.id)}"
              aria-label="Añadir ${esc(product.name)} a la bolsa"
            >
              <svg class="icon" aria-hidden="true"><use href="#i-bag"/></svg>
              Añadir
            </button>

            <button
              type="button"
              class="btn btn-emerald btn-sm"
              data-action="whatsapp"
              data-product-id="${esc(product.id)}"
              aria-label="Pedir ${esc(product.name)} por WhatsApp"
            >
              <svg class="icon" aria-hidden="true"><use href="#i-whatsapp"/></svg>
              Pedir
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function setCardVariant(buttonEl) {
  const group = buttonEl.closest('.product-variants');
  if (!group) return;

  group.querySelectorAll('.variant-btn').forEach(btn => {
    btn.setAttribute('aria-pressed', String(btn === buttonEl));
  });
}

function getSelectedCardVariant(productId) {
  const group = [...document.querySelectorAll('.product-variants')]
    .find(el => el.dataset.productId === productId);
  if (!group) return null;

  const activeBtn = group.querySelector('.variant-btn[aria-pressed="true"]');
  return activeBtn ? activeBtn.getAttribute('data-variant-code') : null;
}

function resetFilters() {
  AppState.searchQuery = '';
  AppState.activeCategory = 'all';
  AppState.sortBy = 'featured';

  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';

  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) sortSelect.value = 'featured';

  renderCategoryPills();
  applyFiltersAndRender();
}

// =========================================================================
// Interfaz de la bolsa
// =========================================================================
function updateCartUI() {
  const totalItems = AppState.cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = AppState.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  document.querySelectorAll('.cart-counter-badge').forEach(badge => {
    badge.textContent = totalItems;
    badge.classList.toggle('hidden', totalItems === 0);
  });

  renderCartDrawerItems(subtotal);
}

function renderCartDrawerItems(subtotal) {
  const container = document.getElementById('cart-items-container');
  const emptyState = document.getElementById('cart-empty-state');
  const footerEl = document.getElementById('cart-drawer-footer');
  const subtotalEl = document.getElementById('cart-subtotal-val');
  const shippingEl = document.getElementById('cart-shipping-val');
  const totalEl = document.getElementById('cart-total-val');
  const shippingProgressText = document.getElementById('shipping-progress-text');
  const shippingProgressBar = document.getElementById('shipping-progress-bar');
  const shippingProgress = document.getElementById('shipping-progress');

  if (!container || !emptyState || !footerEl) return;

  if (AppState.cart.length === 0) {
    emptyState.classList.remove('hidden');
    container.classList.add('hidden');
    footerEl.classList.add('hidden');
    return;
  }

  emptyState.classList.add('hidden');
  container.classList.remove('hidden');
  footerEl.classList.remove('hidden');

  // Cálculo del envío gratis
  const freeThreshold = RUSSO_CONFIG.freeShippingThreshold;
  const isFreeShipping = subtotal >= freeThreshold;
  const diff = freeThreshold - subtotal;
  const percent = Math.min(100, Math.round((subtotal / freeThreshold) * 100));

  if (shippingProgressBar && shippingProgressText) {
    shippingProgressBar.style.width = `${percent}%`;
    shippingProgressBar.classList.toggle('is-complete', isFreeShipping);
    shippingProgressText.innerHTML = isFreeShipping
      ? '<strong>Tu pedido tiene envío gratis.</strong>'
      : `Te faltan <strong>${formatCOP(diff)}</strong> para el envío gratis.`;
  }

  if (shippingProgress) {
    shippingProgress.setAttribute('aria-valuenow', String(percent));
  }

  // Precios
  const shippingCost = isFreeShipping ? 0 : RUSSO_CONFIG.standardShippingCost;
  const total = subtotal + shippingCost;

  if (subtotalEl) subtotalEl.textContent = formatCOP(subtotal);
  if (shippingEl) shippingEl.textContent = isFreeShipping ? 'Gratis' : formatCOP(shippingCost);
  if (totalEl) totalEl.textContent = formatCOP(total);

  // Filas de productos
  container.innerHTML = AppState.cart.map(item => `
    <div class="cart-item">
      <img
        src="${esc(item.image)}"
        alt="${esc(item.name)}"
        width="64"
        height="64"
        loading="lazy"
        onerror="this.onerror=null;this.src='${getFallbackImage()}';"
      >

      <div>
        <p class="cart-item-name">${esc(item.name)}</p>
        <p class="cart-item-meta">${esc(item.ref)}<br>${esc(item.variant)}</p>
        <p class="cart-item-price">${formatCOP(item.price)}</p>
      </div>

      <div class="cart-item-side">
        <button
          type="button"
          class="remove-btn"
          data-cart-action="remove"
          data-cart-id="${esc(item.cartItemId)}"
          aria-label="Quitar ${esc(item.name)} de la bolsa"
        >
          <svg class="icon" aria-hidden="true"><use href="#i-trash"/></svg>
        </button>

        <div class="qty">
          <button
            type="button"
            data-cart-action="decrease"
            data-cart-id="${esc(item.cartItemId)}"
            aria-label="Quitar una unidad de ${esc(item.name)}"
          >−</button>
          <span aria-live="polite">${item.quantity}</span>
          <button
            type="button"
            data-cart-action="increase"
            data-cart-id="${esc(item.cartItemId)}"
            aria-label="Añadir una unidad de ${esc(item.name)}"
          >+</button>
        </div>
      </div>
    </div>
  `).join('');
}

function syncScrollLock() {
  const anyDialogOpen = document.querySelector('dialog[open]');
  document.documentElement.style.overflow = anyDialogOpen ? 'hidden' : '';
}

function openCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  if (!drawer) return;
  if (!drawer.open) drawer.showModal();
  syncScrollLock();
}

function closeCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  if (drawer && drawer.open) drawer.close();
  syncScrollLock();
}

// =========================================================================
// Pedido por WhatsApp (+57 333 237 8784)
// =========================================================================
function sendToWhatsApp(message) {
  const phone = (window.RUSSO_CONFIG && RUSSO_CONFIG.whatsappNumber)
    ? RUSSO_CONFIG.whatsappNumber
    : '573332378784';
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(message);
  const waUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodedText}`;

  try {
    const link = document.createElement('a');
    link.href = waUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    setTimeout(() => link.remove(), 150);
  } catch (e) {
    window.location.href = waUrl;
  }
}

function checkoutViaWhatsApp() {
  if (!AppState.cart || AppState.cart.length === 0) {
    showToast('Tu bolsa está vacía. Añade una pieza primero.');
    return;
  }

  const subtotal = AppState.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const isFreeShipping = subtotal >= RUSSO_CONFIG.freeShippingThreshold;
  const shippingCost = isFreeShipping ? 0 : RUSSO_CONFIG.standardShippingCost;
  const total = subtotal + shippingCost;

  let message = 'Hola Russo Joyería. Quiero pedir estas piezas del catálogo:\n\n';

  AppState.cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    message += `${index + 1}. ${item.name}\n`;
    message += `Referencia: ${item.ref}\n`;
    message += `Variante: ${item.variant}\n`;
    message += `Cantidad: ${item.quantity}\n`;
    message += `Precio: ${formatCOP(item.price)}\n`;
    message += `Subtotal: ${formatCOP(itemTotal)}\n\n`;
  });

  message += `Subtotal del pedido: ${formatCOP(subtotal)}\n`;
  message += `Envío: ${isFreeShipping ? 'Gratis' : formatCOP(shippingCost)}\n`;
  message += `Total: ${formatCOP(total)}\n\n`;
  message += '¿Me confirman disponibilidad y los medios de pago para coordinar el envío?';

  sendToWhatsApp(message);
}

function directWhatsAppBuy(productId) {
  const product = AppState.products.find(p => p.id === productId);
  if (!product) return;

  const selectedVariantCode = getSelectedCardVariant(productId);
  let variantName = 'Oro laminado 18K';
  if (product.variants && product.variants.length > 0) {
    const v = selectedVariantCode
      ? product.variants.find(x => x.code === selectedVariantCode)
      : product.variants[0];
    if (v) variantName = v.name;
  }

  let message = 'Hola Russo Joyería. Me interesa esta pieza del catálogo:\n\n';
  message += `${product.name}\n`;
  message += `Referencia: ${product.ref}\n`;
  message += `Variante: ${variantName}\n`;
  message += `Precio: ${formatCOP(product.price)}\n\n`;
  message += '¿Está disponible para envío inmediato?';

  sendToWhatsApp(message);
}

// =========================================================================
// Vista rápida
// =========================================================================
function openQuickView(productId) {
  const product = AppState.products.find(p => p.id === productId);
  if (!product) return;

  AppState.selectedProduct = product;
  AppState.selectedVariant = product.variants && product.variants.length > 0
    ? product.variants[0].code
    : null;

  const modal = document.getElementById('quick-view-modal');
  const modalBody = document.getElementById('quick-view-body');
  if (!modal || !modalBody) return;

  const modalTitle = document.getElementById('quick-view-title');
  if (modalTitle) modalTitle.textContent = product.name;

  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const variants = Array.isArray(product.variants) ? product.variants : [];

  modalBody.innerHTML = `
    <div class="quick-grid">
      <div class="quick-media">
        <img
          src="${esc(product.image)}"
          alt="${esc(product.name)}"
          width="900"
          height="900"
          decoding="async"
          onerror="this.onerror=null;this.src='${getFallbackImage()}';"
        >
        <span class="quick-ref">${esc(product.ref)}</span>
      </div>

      <div class="quick-body">
        <p class="quick-category">${esc(product.categoryName)}</p>
        <h2 class="quick-title">${esc(product.name)}</h2>

        <div class="quick-price-row">
          <span class="quick-price">${formatCOP(product.price)}</span>
          ${hasDiscount ? `<span class="price-old">${formatCOP(product.originalPrice)}</span>` : ''}
        </div>

        <p class="quick-desc">${esc(product.description)}</p>

        <dl class="quick-specs">
          <div>
            <dt>Material</dt>
            <dd>${esc(product.material || 'Oro laminado 18K')}</dd>
          </div>
          <div>
            <dt>Medida</dt>
            <dd>${esc(product.dimension || 'Medida de catálogo')}</dd>
          </div>
          <div>
            <dt>Garantía</dt>
            <dd>1 año por cambio de color</dd>
          </div>
          <div>
            <dt>Envío</dt>
            <dd>Gratis desde $150.000</dd>
          </div>
        </dl>

        ${variants.length > 0 ? `
          <div class="quick-variants">
            <span class="quick-label">Variante o medida</span>
            <div class="quick-variant-list">
              ${variants.map((v, index) => `
                <button
                  type="button"
                  class="quick-variant-btn"
                  data-code="${esc(v.code)}"
                  aria-pressed="${index === 0}"
                >
                  ${esc(v.name)}
                </button>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <div class="quick-actions">
          <button type="button" class="btn btn-emerald" onclick="addModalProductToCart()">
            <svg class="icon" aria-hidden="true"><use href="#i-bag"/></svg>
            Añadir a la bolsa
          </button>
          <button type="button" class="btn btn-outline" onclick="buyModalProductViaWhatsApp()">
            <svg class="icon" aria-hidden="true"><use href="#i-whatsapp"/></svg>
            Pedir por WhatsApp
          </button>
        </div>
      </div>
    </div>
  `;

  modalBody.querySelectorAll('.quick-variant-btn').forEach(btn => {
    btn.addEventListener('click', () => selectModalVariant(btn.dataset.code));
  });

  if (!modal.open) modal.showModal();
  syncScrollLock();
}

function selectModalVariant(variantCode) {
  AppState.selectedVariant = variantCode;

  document.querySelectorAll('.quick-variant-btn').forEach(btn => {
    btn.setAttribute('aria-pressed', String(btn.dataset.code === variantCode));
  });
}

function addModalProductToCart() {
  if (!AppState.selectedProduct) return;
  addToCart(AppState.selectedProduct.id, AppState.selectedVariant, 1);
  closeQuickView();
}

function buyModalProductViaWhatsApp() {
  if (!AppState.selectedProduct) return;
  const product = AppState.selectedProduct;

  let variantName = 'Oro laminado 18K';
  if (product.variants && product.variants.length > 0) {
    const v = AppState.selectedVariant
      ? product.variants.find(x => x.code === AppState.selectedVariant)
      : product.variants[0];
    if (v) variantName = v.name;
  }

  let message = 'Hola Russo Joyería. Me interesa esta pieza del catálogo:\n\n';
  message += `${product.name}\n`;
  message += `Referencia: ${product.ref}\n`;
  message += `Variante: ${variantName}\n`;
  message += `Precio: ${formatCOP(product.price)}\n\n`;
  message += '¿Está disponible para envío inmediato?';

  sendToWhatsApp(message);
  closeQuickView();
}

function closeQuickView() {
  const modal = document.getElementById('quick-view-modal');
  if (modal && modal.open) modal.close();
  syncScrollLock();
}

// =========================================================================
// Avisos
// =========================================================================
function showToast(text) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = '<svg class="icon" aria-hidden="true"><use href="#i-check"/></svg><span></span>';
  toast.querySelector('span').textContent = text;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('is-leaving');
    setTimeout(() => toast.remove(), 220);
  }, 2800);
}

// =========================================================================
// Eventos
// =========================================================================
function setupEventListeners() {
  // Búsqueda en tiempo real
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      AppState.searchQuery = e.target.value;
      applyFiltersAndRender();
    });
  }

  // Orden
  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      AppState.sortBy = e.target.value;
      applyFiltersAndRender();
    });
  }

  // Acciones de las tarjetas (delegación: el grid se vuelve a pintar)
  const grid = document.getElementById('products-grid');
  if (grid) {
    grid.addEventListener('click', (event) => {
      const actionEl = event.target.closest('[data-action]');
      if (!actionEl) return;

      const { action, productId } = actionEl.dataset;

      if (action === 'quick-view') {
        openQuickView(productId);
      } else if (action === 'add') {
        addToCart(productId, getSelectedCardVariant(productId), 1);
      } else if (action === 'whatsapp') {
        directWhatsAppBuy(productId);
      } else if (action === 'variant') {
        setCardVariant(actionEl);
      }
    });
  }

  // Acciones de la bolsa (delegación: las filas se vuelven a pintar)
  const cartItems = document.getElementById('cart-items-container');
  if (cartItems) {
    cartItems.addEventListener('click', (event) => {
      const actionEl = event.target.closest('[data-cart-action]');
      if (!actionEl) return;

      const { cartAction, cartId } = actionEl.dataset;

      if (cartAction === 'remove') {
        removeFromCart(cartId);
      } else if (cartAction === 'increase') {
        updateCartQuantity(cartId, 1);
      } else if (cartAction === 'decrease') {
        updateCartQuantity(cartId, -1);
      }
    });
  }

  // Menú móvil
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.toggle('hidden');
      mobileMenuBtn.setAttribute('aria-expanded', String(!isHidden));
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Escape cierra el menú móvil; los diálogos lo manejan de forma nativa.
  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape' || !mobileMenu || !mobileMenuBtn) return;
    if (!mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }
  });

  // Diálogos: clic en el fondo y bloqueo de scroll
  document.querySelectorAll('dialog').forEach(dialog => {
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) dialog.close();
    });
    dialog.addEventListener('close', syncScrollLock);
  });
}
