const RUTA_BASE_PRODUCTOS = '/productos/';
const IMAGEN_POR_DEFECTO = '/productos/default.png';

const MAPA_POR_ID = {
  1: `${RUTA_BASE_PRODUCTOS}cafe-arabe-01.png`,
  2: `${RUTA_BASE_PRODUCTOS}cafe-arabe-02.png`,
  3: `${RUTA_BASE_PRODUCTOS}cafe-arabe-03.png`,
  4: `${RUTA_BASE_PRODUCTOS}cafe-arabe-04.png`,
  5: `${RUTA_BASE_PRODUCTOS}cafe-arabe-05.png`,
  6: `${RUTA_BASE_PRODUCTOS}cafe-arabe-06.png`,
  7: `${RUTA_BASE_PRODUCTOS}cafe-arabe-07.png`,
  8: `${RUTA_BASE_PRODUCTOS}cafe-arabe-08.png`,
  9: `${RUTA_BASE_PRODUCTOS}cafe-arabe-09.png`,
  10: `${RUTA_BASE_PRODUCTOS}cafe-arabe-10.png`,
  11: `${RUTA_BASE_PRODUCTOS}cafe-arabe-11.png`,
  12: `${RUTA_BASE_PRODUCTOS}cafe-arabe-12.png`,
};

export function obtenerImagenProducto(producto) {
  const valor = producto?.imagen || producto?.imagenUrl || producto?.img;

  if (typeof valor === 'string' && valor.trim()) {
    const limpio = valor.trim();
    if (limpio.startsWith('http://') || limpio.startsWith('https://') || limpio.startsWith('/')) {
      return limpio;
    }
    return `${RUTA_BASE_PRODUCTOS}${limpio}`;
  }

  const id = producto?.idProducto ?? producto?.id;
  if (id != null && MAPA_POR_ID[id]) {
    return MAPA_POR_ID[id];
  }

  return IMAGEN_POR_DEFECTO;
}

export default obtenerImagenProducto;