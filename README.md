# Albion Warlord Hub (GitHub Pages)

Unified **Black Zone Warlord** Albion Online web app combining RaidQuest-style combat/exploration tools with the fixed **Albion Silver Ledger** crafting, market, and loot tools.

## Key Fixes Applied from Previous Project
1. **CORS-Resilient Albion API Pipeline:** Replaced direct `gameinfo*.albiononline.com` calls (which fail CORS on GitHub Pages) with an automatic `AlbionBB -> Public CORS Proxy -> Optional Cloudflare Worker -> Offline Cache` chain.
2. **Fixed Service Worker (`sw.js`):** Switched app shell to Network-First, removed `./sw.js` from precache, and stopped intercepting cross-origin API calls so GitHub Pages updates immediately without stale cache traps.
3. **Timeout & `.4` Icon Fixes:** Added `AbortController` timeouts to every network request, hoisted API host constants, and fixed the `.4` Pristine enchantment icon regex (`/@[0-4]$/`).

## Deploying to GitHub Pages
1. Push the contents of this folder to your GitHub repository root.
2. Enable **Settings → Pages → GitHub Actions** (the included `.github/workflows/pages.yml` deploys automatically on push).
