import axios from 'axios';

const agregarToken = (config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}

export const apiUsuarios = axios.create({
  baseURL: import.meta.env.VITE_API_USUARIOS_URL ||'http://localhost:8081'
});
apiUsuarios.interceptors.request.use(agregarToken)

export const apiProductos = axios.create({
  baseURL: import.meta.env.VITE_API_PRODUCTOS_URL ||'http://localhost:8082'
})
apiProductos.interceptors.request.use(agregarToken)

export const apiBoletas = axios.create({
  baseURL: import.meta.env.VITE_API_BOLETAS_URL ||'http://localhost:8083'
})
apiBoletas.interceptors.request.use(agregarToken)



export default apiUsuarios;