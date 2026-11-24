# Optional Free Cloudflare Worker CORS Proxy (For Official Albion Gameinfo)

Albion Online's `gameinfo*.albiononline.com` endpoints do not send `Access-Control-Allow-Origin` headers, which blocks direct browser `fetch()` calls from GitHub Pages.

The app already routes through **AlbionBB (CORS-native)** and public CORS fallbacks automatically. For zero rate limits, deploy this free 20-line Cloudflare Worker and paste its URL into **API & Proxy Fix** inside the app:

```js
const ALLOWED = [
  'https://gameinfo.albiononline.com/api/gameinfo/',
  'https://gameinfo-ams.albiononline.com/api/gameinfo/',
  'https://gameinfo-sgp.albiononline.com/api/gameinfo/'
];

export default {
  async fetch(request) {
    const target = new URL(request.url).searchParams.get('url') || '';
    if (!ALLOWED.some(prefix => target.startsWith(prefix))) {
      return new Response('Forbidden target', { status: 403 });
    }
    const resp = await fetch(target, { headers: { 'Accept': 'application/json' } });
    const headers = new Headers(resp.headers);
    headers.set('Access-Control-Allow-Origin', '*');
    headers.set('Cache-Control', 'public, max-age=30');
    return new Response(resp.body, { status: resp.status, headers });
  }
};
```
