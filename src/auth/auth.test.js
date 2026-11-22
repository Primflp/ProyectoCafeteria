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
  ])('envía el rol %s a su ruta correspondiente', (rol, ruta) => {
    localStorage.setItem('token', crearToken({ rol }));
    expect(obtenerRutaPorRol()).toBe(ruta);
  });

  it('usa la ruta pública cuando no hay un token', () => {
    expect(obtenerRutaPorRol()).toBe('/');
  });
});
