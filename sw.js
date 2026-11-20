// 가족 여행 플랜 — 오프라인용 서비스 워커
// 전략: 같은 사이트 파일은 "네트워크 우선, 실패하면 캐시" → 온라인일 땐 늘 최신, 해외 데이터 없이도 열림.
// 구글 지도·OSM 타일 등 다른 사이트 자원은 건드리지 않는다(오프라인에선 지도 화면이 비는 게 정상).
const VERSION = 'v7-2026-11-21';
const CORE = [
  "./",
  "./index.html",
  "./trips.json",
  "./manifest.webmanifest",
  "./icons/icon-192-v2.png",
  "./icons/icon-512-v2.png",
  "./icons/apple-touch-icon-v2.png",
  "./fukuoka/fukuoka_family_trip.html",
  "./fukuoka/shopping.html",
  "./fukuoka/shopping.json",
  "./fukuoka/map/gmap.html",
  "./fukuoka/map/locations.js",
  "./fukuoka/map/map.html",
  "./fukuoka/shopping-photos/jonetz-chili-oil.jpg",
  "./fukuoka/shopping-photos/jonetz-tempura-snack.jpg",
  "./fukuoka/shopping-photos/jonetz-tkg-sauce.jpg",
  "./fukuoka/shopping-photos/mongol-tanmen-nakamoto.jpg",
  "./fukuoka/shopping-photos/ohayo-brulee.jpg",
  "./fukuoka/shopping-photos/rice-scoop.jpg",
  "./fukuoka/shopping-photos/shimitori-stain-remover.jpg",
  "./fukuoka/shopping-photos/shoshugen-toilet-deodorizer.jpg",
  "./sapporo/delpino_family_trip.html",
  "./sapporo/sapporo_family_trip.html",
  "./sapporo/map/locations.js",
  "./sapporo/map/map.html",
  "./high-one/high_one_family_trip.html",
  "./high-one/map/locations.js",
  "./high-one/map/map.html"
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => Promise.all(CORE.map((u) => c.add(u).catch(() => {})))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;
  e.respondWith((async () => {
    const cache = await caches.open(VERSION);
    try {
      const res = await fetch(req);
      if (res && res.ok) cache.put(req, res.clone());
      return res;
    } catch (err) {
      const hit = await cache.match(req, { ignoreSearch: true });
      if (hit) return hit;
      if (req.mode === 'navigate') { const home = await cache.match('./index.html'); if (home) return home; }
      throw err;
    }
  })());
});
