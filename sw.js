/* ============================================================
   SpeakUp — Service Worker
   Hace que la app funcione sin conexión y se pueda instalar.

   Estrategia: "stale-while-revalidate" para todo lo propio.
   Sirve al instante lo que hay en caché y, en paralelo, descarga
   la versión nueva para la próxima vez. Así nunca te quedas
   colgado sin internet y nunca te quedas con una versión vieja.

   Lo que NUNCA se cachea: la API de Anthropic y cualquier
   petición que no sea a este mismo sitio.
   ============================================================ */

const VERSION = 'speakup-v4';

const ESENCIALES = [
  './',
  './index.html',
  './styles.css',
  './data.js',
  './app.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png',
  './apple-touch-icon.png'
];

self.addEventListener('install', evento => {
  evento.waitUntil((async () => {
    const cache = await caches.open(VERSION);
    // uno a uno: si falla un archivo suelto, la instalación no se cae entera
    await Promise.all(ESENCIALES.map(async ruta => {
      try { await cache.add(new Request(ruta, { cache: 'reload' })); }
      catch (e) { console.warn('[sw] no se pudo guardar', ruta, e); }
    }));
    self.skipWaiting();
  })());
});

self.addEventListener('activate', evento => {
  evento.waitUntil((async () => {
    const claves = await caches.keys();
    await Promise.all(claves.filter(k => k !== VERSION).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('message', evento => {
  if (evento.data === 'saltar-espera') self.skipWaiting();
});

self.addEventListener('fetch', evento => {
  const peticion = evento.request;
  if (peticion.method !== 'GET') return;

  let url;
  try { url = new URL(peticion.url); } catch (e) { return; }

  // Todo lo externo (la API de Anthropic incluida) va directo a la red, sin tocar la caché
  if (url.origin !== self.location.origin) return;

  evento.respondWith((async () => {
    const cache = await caches.open(VERSION);
    const guardado = await cache.match(peticion, { ignoreSearch: true });

    const desdeRed = fetch(peticion).then(respuesta => {
      if (respuesta && respuesta.ok && respuesta.type === 'basic') {
        cache.put(peticion, respuesta.clone()).catch(() => {});
      }
      return respuesta;
    }).catch(() => null);

    // sirve la caché al instante y refresca por detrás
    if (guardado) { evento.waitUntil(desdeRed); return guardado; }

    const fresco = await desdeRed;
    if (fresco) return fresco;

    // sin caché y sin red: si pedían una página, devuelve la app
    if (peticion.mode === 'navigate') {
      const inicio = await cache.match('./index.html') || await cache.match('./');
      if (inicio) return inicio;
    }
    return new Response('Sin conexión y sin copia guardada.', {
      status: 503,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' }
    });
  })());
});
