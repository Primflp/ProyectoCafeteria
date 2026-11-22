import { jwtDecode } from 'jwt-decode';

export function obtenerRolUsuario() {
  const token = localStorage.getItem('token');
  if (!token) return null;

  try {
    const decoded = jwtDecode(token);
    return decoded.rol || decoded.role || decoded.authorities;
  } catch {
    return null;
  }
}

export function obtenerRutaPorRol() {
  const rol = obtenerRolUsuario();
  if (rol === 'ROLE_ADMIN') return '/admin/home';
  if (rol === 'ROLE_VENDEDOR') return '/vendedor/home';
  return '/';
}