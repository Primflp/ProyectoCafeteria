import { jwtDecode } from 'jwt-decode';

const normalizarRol = (valor) => {
  const rol = typeof valor === 'string'
    ? valor
    : valor?.authority ?? valor?.role;

  if (typeof rol !== 'string') return null;

  const rolNormalizado = rol.trim().toUpperCase();
  if (['ADMIN', 'ROLE_ADMIN'].includes(rolNormalizado)) return 'ROLE_ADMIN';
  if (['VENDEDOR', 'ROLE_VENDEDOR'].includes(rolNormalizado)) return 'ROLE_VENDEDOR';
  if (['CLIENTE', 'ROLE_CLIENTE'].includes(rolNormalizado)) return 'ROLE_CLIENTE';
  return null;
};

export function obtenerRolUsuario() {
  const token = localStorage.getItem('token');
  if (!token) return null;

  try {
    const decoded = jwtDecode(token);
    const roles = [decoded.rol, decoded.role, decoded.authorities]
      .flatMap((valor) => Array.isArray(valor) ? valor : [valor]);

    return roles.map(normalizarRol).find(Boolean) ?? null;
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