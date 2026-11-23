import { beforeEach, describe, expect, it } from 'vitest';
import { obtenerRutaPorRol } from './auth';

const crearToken = (payload) => `${btoa('{}')}.${btoa(JSON.stringify(payload))}.`;

describe('obtenerRutaPorRol', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it.each([
    ['ROLE_ADMIN', '/admin/home'],
    ['ROLE_VENDEDOR', '/vendedor/home'],
    ['ROLE_CLIENTE', '/'],
    [['ROLE_USER', 'ROLE_ADMIN'], '/admin/home'],
    [[{ authority: 'ROLE_ADMIN' }], '/admin/home'],
    ['ADMIN', '/admin/home'],
  ])('envía el rol %s a su ruta correspondiente', (rol, ruta) => {
    const payload = Array.isArray(rol) ? { authorities: rol } : { rol };
    localStorage.setItem('token', crearToken(payload));
    expect(obtenerRutaPorRol()).toBe(ruta);
  });

  it('usa la ruta pública cuando no hay un token', () => {
    expect(obtenerRutaPorRol()).toBe('/');
  });
});
