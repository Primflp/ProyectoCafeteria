import { describe, expect, it } from 'vitest';
import { extraerLista } from './api';

describe('extraerLista', () => {
  it('returns an empty list for a 204 response', () => {
    expect(extraerLista({ status: 204, data: '' })).toEqual([]);
  });

  it('returns the array from a successful response', () => {
    const products = [{ idProducto: 1 }];
    expect(extraerLista({ status: 200, data: products })).toBe(products);
  });

  it('rejects unexpected response shapes', () => {
    expect(() => extraerLista({ status: 200, data: { content: [] } }))
      .toThrow('La API no devolvió una lista válida.');
  });
});
