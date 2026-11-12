/**
 * Russo Joyería — Panel de administración.
 * Login con JWT + alta y borrado de productos contra la API.
 */

const TOKEN_KEY = 'russo_admin_token';
const $ = (id) => document.getElementById(id);

const formatCOP = (valor) =>
  new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0
  }).format(valor) + ' COP';

const escapeHtml = (texto) =>
  String(texto ?? '').replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));

const token = () => sessionStorage.getItem(TOKEN_KEY);

// ---------------------------------------------------------------------------
// Arranque
// ---------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  $('api-url').textContent = RussoAPI.baseUrl();

  $('login-form').addEventListener('submit', iniciarSesion);
  $('product-form').addEventListener('submit', guardarProducto);
  $('logout-btn').addEventListener('click', cerrarSesion);
  $('refresh-btn').addEventListener('click', cargarProductos);

  // Delegación: la lista se vuelve a pintar después de cada cambio.
  $('product-list').addEventListener('click', (evento) => {
    const boton = evento.target.closest('.admin-delete');
    if (boton) eliminarProducto(boton.dataset.id);
  });

  if (token()) abrirPanel();
});

// ---------------------------------------------------------------------------
// Sesión
// ---------------------------------------------------------------------------
async function iniciarSesion(evento) {
  evento.preventDefault();
  ocultarErrorLogin();

  try {
    const sesion = await RussoAPI.login(
      $('login-user').value.trim(),
      $('login-pass').value
    );
    sessionStorage.setItem(TOKEN_KEY, sesion.token);
    $('login-pass').value = '';
    abrirPanel();
  } catch (error) {
    mostrarErrorLogin(error.message);
  }
}

function cerrarSesion() {
  sessionStorage.removeItem(TOKEN_KEY);
  $('panel-view').classList.add('hidden');
  $('login-view').classList.remove('hidden');
  $('logout-btn').classList.add('hidden');
}

async function abrirPanel() {
  $('login-view').classList.add('hidden');
  $('panel-view').classList.remove('hidden');
  $('logout-btn').classList.remove('hidden');

  await cargarCategorias();
  await cargarProductos();
}

function mostrarErrorLogin(mensaje) {
  const caja = $('login-error');
  caja.textContent = mensaje;
  caja.classList.remove('hidden');
}

function ocultarErrorLogin() {
  $('login-error').classList.add('hidden');
}

// ---------------------------------------------------------------------------
// Datos
// ---------------------------------------------------------------------------
async function cargarCategorias() {
  const select = $('p-category');

  try {
    const categorias = await RussoAPI.listCategories();
    select.innerHTML = categorias
      .map((c) => `<option value="${escapeHtml(c.id)}">${escapeHtml(c.name)} (${c.count})</option>`)
      .join('');
  } catch (error) {
    select.innerHTML = '<option value="">Error al cargar categorías</option>';
    mostrarToast(error.message, 'error');
  }
}

async function cargarProductos() {
  const contenedor = $('product-list');
  contenedor.setAttribute('aria-busy', 'true');
  contenedor.innerHTML = '<p class="admin-list-status">Cargando…</p>';

  try {
    const data = await RussoAPI.listProducts({ limit: 500 });
    const productos = data.products || [];

    $('product-count').textContent = productos.length;

    if (productos.length === 0) {
      contenedor.innerHTML = '<p class="admin-list-status">Aún no hay productos.</p>';
      return;
    }

    contenedor.innerHTML = productos.map((p) => `
      <div class="admin-product">
        <img src="${escapeHtml(p.image)}" alt="" width="48" height="48"
             onerror="this.style.visibility='hidden'">
        <div class="admin-product-info">
          <p class="admin-product-name">${escapeHtml(p.name)}</p>
          <p class="admin-product-meta">${escapeHtml(p.ref)} · ${escapeHtml(p.categoryName)}</p>
          <p class="admin-product-price">${formatCOP(p.price)}</p>
        </div>
        <button type="button" data-id="${escapeHtml(p.id)}" class="admin-delete">
          Eliminar
        </button>
      </div>
    `).join('');
  } catch (error) {
    contenedor.innerHTML = `<p class="admin-list-status admin-list-status--error">${escapeHtml(error.message)}</p>`;
  } finally {
    contenedor.removeAttribute('aria-busy');
  }
}

// ---------------------------------------------------------------------------
// Crear / eliminar
// ---------------------------------------------------------------------------
function parsearVariantes(texto) {
  return String(texto || '')
    .split('\n')
    .map((linea) => linea.trim())
    .filter(Boolean)
    .map((linea) => {
      const [nombre, codigo] = linea.split('|').map((parte) => (parte || '').trim());
      return {
        name: nombre,
        code: (codigo || nombre).toUpperCase().replace(/\s+/g, '_'),
        available: true
      };
    })
    .filter((v) => v.name && v.code);
}

async function guardarProducto(evento) {
  evento.preventDefault();

  const boton = $('save-btn');
  boton.disabled = true;
  boton.textContent = 'Guardando…';

  const producto = {
    name: $('p-name').value.trim(),
    ref: $('p-ref').value.trim(),
    category: $('p-category').value,
    price: Number($('p-price').value),
    originalPrice: $('p-original').value === '' ? null : Number($('p-original').value),
    image: $('p-image').value.trim(),
    description: $('p-description').value.trim(),
    material: $('p-material').value.trim(),
    dimension: $('p-dimension').value.trim(),
    isNew: $('p-new').checked,
    isBestSeller: $('p-best').checked,
    variants: parsearVariantes($('p-variants').value)
  };

  try {
    await RussoAPI.createProduct(producto, token());
    mostrarToast('Producto creado correctamente.', 'ok');
    $('product-form').reset();
    await cargarCategorias();
    await cargarProductos();
  } catch (error) {
    if (/token/i.test(error.message)) cerrarSesion();
    mostrarToast(error.message, 'error');
  } finally {
    boton.disabled = false;
    boton.textContent = 'Guardar producto';
  }
}

async function eliminarProducto(id) {
  if (!id) return;
  if (!confirm('¿Eliminar este producto del catálogo?')) return;

  try {
    await RussoAPI.deleteProduct(id, token());
    mostrarToast('Producto eliminado.', 'ok');
    await cargarCategorias();
    await cargarProductos();
  } catch (error) {
    if (/token/i.test(error.message)) cerrarSesion();
    mostrarToast(error.message, 'error');
  }
}

// ---------------------------------------------------------------------------
// Avisos
// ---------------------------------------------------------------------------
function mostrarToast(mensaje, tipo = 'ok') {
  const contenedor = $('toast-container');
  const toast = document.createElement('div');

  toast.className = tipo === 'error' ? 'toast toast--error' : 'toast';
  toast.innerHTML = '<svg class="icon" aria-hidden="true"><use href="#i-check"/></svg><span></span>';
  toast.querySelector('span').textContent = mensaje;
  contenedor.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('is-leaving');
    setTimeout(() => toast.remove(), 220);
  }, 3200);
}
