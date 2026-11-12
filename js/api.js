/**
 * Russo Joyería - Cliente HTTP de la API.
 *
 * Todas las llamadas al backend pasan por aquí, así el resto del
 * frontend no sabe nada de fetch, headers ni tokens.
 */
const RussoAPI = (() => {
  const baseUrl = () =>
    (window.RUSSO_API && window.RUSSO_API.baseUrl) || 'http://localhost:4000/api';

  function toQuery(params) {
    const clean = Object.entries(params)
      .filter(([, v]) => v !== undefined && v !== null && v !== '')
      .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
      .join('&');
    return clean ? `?${clean}` : '';
  }

  async function request(path, { method = 'GET', body, token } = {}) {
    const headers = { 'Content-Type': 'application/json' };
    if (token) headers.Authorization = `Bearer ${token}`;

    const res = await fetch(baseUrl() + path, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined
    });

    const data = await res.json().catch(() => null);
    if (!res.ok) {
      const mensaje = (data && (data.error || data.message)) || `Error HTTP ${res.status}`;
      throw new Error(mensaje);
    }
    return data;
  }

  return {
    baseUrl,

    // --- Catálogo público ---
    listProducts: (params = {}) => request('/products' + toQuery(params)),
    getProduct: (id) => request('/products/' + encodeURIComponent(id)),
    listCategories: () => request('/categories'),

    // --- Administración (requiere token) ---
    login: (username, password) =>
      request('/auth/login', { method: 'POST', body: { username, password } }),
    createProduct: (product, token) =>
      request('/products', { method: 'POST', body: product, token }),
    updateProduct: (id, product, token) =>
      request('/products/' + encodeURIComponent(id), { method: 'PUT', body: product, token }),
    deleteProduct: (id, token) =>
      request('/products/' + encodeURIComponent(id), { method: 'DELETE', token })
  };
})();
