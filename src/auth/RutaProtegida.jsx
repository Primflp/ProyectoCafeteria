import { Navigate } from 'react-router-dom';
import { obtenerRolUsuario } from './auth';

export function RutaProtegida({ rolRequerido, children }) {
  const rolActual = obtenerRolUsuario();

  if (!rolActual) {
    return <Navigate to="/login" replace />;
  }

  if (rolActual !== rolRequerido) {
    return <Navigate to="/" replace />;
  }

  return children;
}