import { describe, expect, it } from 'vitest';
import { resolverApiUrl } from './api';

describe('resolverApiUrl', () => {
  it('uses the local fallback only in development when the variable is empty', () => {
    expect(resolverApiUrl('', 'VITE_API_USUARIOS_URL', 'http://localhost:8081', true))
      .toBe('http://localhost:8081');
  });

  it('requires an absolute URL when configured', () => {
    expect(() => resolverApiUrl('/api', 'VITE_API_USUARIOS_URL', '', false))
      .toThrow('VITE_API_USUARIOS_URL debe ser una URL absoluta.');
  });

  it.each(['http://api.example.com', 'https://localhost:8081', 'https://127.0.0.1:8081', 'https://[::1]:8081'])(
    'rejects non-public or insecure production URL %s',
    (url) => {
      expect(() => resolverApiUrl(url, 'VITE_API_USUARIOS_URL', '', false))
        .toThrow('VITE_API_USUARIOS_URL debe usar una URL HTTPS pública en producción.');
    },
  );

  it('accepts a public HTTPS URL in production', () => {
    expect(resolverApiUrl(' https://api.example.com ', 'VITE_API_USUARIOS_URL', '', false))
      .toBe('https://api.example.com');
  });
});
