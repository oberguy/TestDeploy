const CACHE_NAME = 'crc-community-kiosk-v1.0.39-testimonial-video';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-180.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './testimonial.mp4',
  './testimonial_poster.jpg'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache =>
      Promise.all(APP_SHELL.map(url =>
        fetch(url, { cache: 'reload' })
          .then(response => {
            if (!response.ok) throw new Error('Unable to cache ' + url);
            return cache.put(url, response);
          })
      ))
    )
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});

function rangeResponseFromCache(request) {
  const rangeHeader = request.headers.get('range');
  if (!rangeHeader) return null;
  return caches.open(CACHE_NAME).then(cache =>
    cache.match(request.url).then(response => {
      if (!response) return fetch(request);
      return response.arrayBuffer().then(buffer => {
        const size = buffer.byteLength;
        const match = /bytes=(\d*)-(\d*)/.exec(rangeHeader);
        if (!match) return new Response(null, { status: 416, headers: { 'Content-Range': `bytes */${size}` } });
        let start = match[1] ? parseInt(match[1], 10) : 0;
        let end = match[2] ? parseInt(match[2], 10) : size - 1;
        if (!match[1] && match[2]) {
          const suffixLength = parseInt(match[2], 10);
          start = Math.max(0, size - suffixLength);
          end = size - 1;
        }
        if (start >= size || start > end) return new Response(null, { status: 416, headers: { 'Content-Range': `bytes */${size}` } });
        end = Math.min(end, size - 1);
        const sliced = buffer.slice(start, end + 1);
        const headers = new Headers(response.headers);
        headers.set('Content-Range', `bytes ${start}-${end}/${size}`);
        headers.set('Content-Length', String(sliced.byteLength));
        headers.set('Accept-Ranges', 'bytes');
        return new Response(sliced, { status: 206, statusText: 'Partial Content', headers });
      });
    })
  );
}

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  if (event.request.headers.has('range')) {
    const ranged = rangeResponseFromCache(event.request);
    if (ranged) {
      event.respondWith(ranged);
      return;
    }
  }

  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request, { cache: 'no-store' })
        .then(response => {
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put('./index.html', copy));
          }
          return response;
        })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  event.respondWith(
    fetch(event.request, { cache: 'no-store' })
      .then(response => {
        if (response && response.ok && response.type !== 'opaque' && response.status !== 206) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        }
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
