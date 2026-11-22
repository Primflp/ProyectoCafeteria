# Cafetería

Frontend React + Vite para desplegar como sitio estático en Netlify. Las API de usuarios, productos y boletas se despliegan por separado.

## Desarrollo local

1. Copia `.env.example` a `.env.local`.
2. Configura las URLs locales de las API y, si usas inicio de sesión con Google, `VITE_GOOGLE_CLIENT_ID`.
3. Ejecuta `npm install` y `npm run dev`.

Si una URL de API no está configurada en desarrollo, el frontend usa los puertos locales `8081`, `8082` y `8083`.

## Despliegue en Netlify

Configura el sitio con:

- **Base directory:** raíz del repositorio (o la carpeta del frontend si cambia).
- **Build command:** `npm run build`.
- **Publish directory:** `dist`.
- **Node.js:** `22.12.0`, fijado en `netlify.toml` y `.nvmrc`.

Agrega estas variables en **Site configuration → Environment variables** antes de desplegar; los valores se incorporan al bundle durante el build:

| Variable | Valor |
| --- | --- |
| `VITE_API_USUARIOS_URL` | URL HTTPS pública de la API de usuarios en Railway |
| `VITE_API_PRODUCTOS_URL` | URL HTTPS pública de la API de productos en Railway |
| `VITE_API_BOLETAS_URL` | URL HTTPS pública de la API de boletas en Railway |
| `VITE_GOOGLE_CLIENT_ID` | Client ID de Google (opcional si no se usa ese acceso) |

Las tres URLs de API son obligatorias en producción y se validan como HTTPS. No pongas secretos en variables `VITE_`: cualquier valor con ese prefijo queda visible para los usuarios del sitio. El frontend requiere que las API permitan el origen del dominio Netlify mediante CORS.

`netlify.toml` redirige las rutas de la SPA a `index.html`, por lo que las rutas internas se pueden abrir y recargar directamente.

Antes de publicar, ejecuta `npm run build`, `npm run lint` y `npm test -- --run`. Luego valida inicio de sesión, catálogo, carrito y recarga de rutas internas contra los dominios reales.
