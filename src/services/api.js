import axios from 'axios';

export const resolverApiUrl = (configuredUrl, environmentVariable, localUrl, isDevelopment = import.meta.env.DEV) => {
  const url = configuredUrl?.trim();
  if (!url) {
    if (isDevelopment) return localUrl;

    throw new Error(`Falta configurar ${environmentVariable} para este entorno.`);
  }

  let parsedUrl;
  try {
    parsedUrl = new URL(url);
  } catch {
    throw new Error(`${environmentVariable} debe ser una URL absoluta.`);
  }

  if (!isDevelopment && (parsedUrl.protocol !== 'https:' || ['localhost', '127.0.0.1', '[::1]'].includes(parsedUrl.hostname))) {
    throw new Error(`${environmentVariable} debe usar una URL HTTPS pública en producción.`);
  }

  return url;
};

export const extraerLista = (response) => {
  if (response.status === 204) return [];
  if (Array.isArray(response.data)) return response.data;

  throw new Error('La API no devolvió una lista válida.');
};

const agregarToken = (config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};

export const apiUsuarios = axios.create({
  baseURL: resolverApiUrl(
    import.meta.env.VITE_API_USUARIOS_URL,
    'VITE_API_USUARIOS_URL',
    import.meta.env.DEV ? 'http://localhost:8081' : undefined,
  ),
});
apiUsuarios.interceptors.request.use(agregarToken);

export const apiProductos = axios.create({
  baseURL: resolverApiUrl(
    import.meta.env.VITE_API_PRODUCTOS_URL,
    'VITE_API_PRODUCTOS_URL',
    import.meta.env.DEV ? 'http://localhost:8082' : undefined,
  ),
});
apiProductos.interceptors.request.use(agregarToken);

export const apiBoletas = axios.create({
  baseURL: resolverApiUrl(
    import.meta.env.VITE_API_BOLETAS_URL,
    'VITE_API_BOLETAS_URL',
    import.meta.env.DEV ? 'http://localhost:8083' : undefined,
  ),
});
apiBoletas.interceptors.request.use(agregarToken);

export default apiUsuarios;