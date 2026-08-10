/* SpeakUp Kids — funciona sin internet, que es justo lo que hace falta
   en un carro, en una sala de espera o donde no hay señal. */
const VERSION = 'kids-v1';
const ESENCIALES = ['./','./index.html','./styles.css','./art.js','./data.js','./app.js','./manifest.json','./icon.svg'];

self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const c = await caches.open(VERSION);
    await Promise.all(ESENCIALES.map(async r => {
      try { await c.add(new Request(r, { cache: 'reload' })); } catch (x) {}
    }));
  })());
});
self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    const ks = await caches.keys();
    await Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});
self.addEventListener('message', e => { if (e.data === 'saltar-espera') self.skipWaiting(); });
self.addEventListener('fetch', e => {
  const p = e.request;
  if (p.method !== 'GET') return;
  let u; try { u = new URL(p.url); } catch (x) { return; }
  if (u.origin !== self.location.origin) return;
  e.respondWith((async () => {
    const c = await caches.open(VERSION);
    const guardado = await c.match(p, { ignoreSearch: true });
    const red = fetch(p).then(r => {
      if (r && r.ok && r.type === 'basic') c.put(p, r.clone()).catch(() => {});
      return r;
    }).catch(() => null);
    if (guardado) { e.waitUntil(red); return guardado; }
    const fresco = await red;
    if (fresco) return fresco;
    if (p.mode === 'navigate') {
      const i = await c.match('./index.html') || await c.match('./');
      if (i) return i;
    }
    return new Response('Sin conexión.', { status: 503 });
  })());
});
