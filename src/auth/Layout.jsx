import { obtenerRolUsuario } from './auth';
import SidebarAdmin from './SidebarAdmin';
import SidebarVendedor from './SidebarVendedor';

export function Layout({ children }) {
  const rol = obtenerRolUsuario();

  return (
    <div className="d-flex">
      {rol === 'ROLE_ADMIN' && <SidebarAdmin />}
      {rol === 'ROLE_VENDEDOR' && <SidebarVendedor />}

      <main className="flex-grow-1 p-4">
        {children}
      </main>
    </div>
  );
}