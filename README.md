<div align="center">

<img src="./silver-ledger-brand-crest.webp" alt="Albion Warlord Hub Crest" width="140" />

# ⚔️ ALBION WARLORD HUB

**Black Zone Warlord Edition · Unified Battleboard, Killboard & Merchantry Ledger for GitHub Pages**

[![Theme](https://img.shields.io/badge/Theme-Black_Zone_Warlord-DC2626?style=for-the-badge&labelColor=0D0B0C)](https://github.com)
[![Servers](https://img.shields.io/badge/Servers-NA_%7C_EU_%7C_AS-F59E0B?style=for-the-badge&labelColor=0D0B0C)](https://github.com)
[![Auto Refresh](https://img.shields.io/badge/Live_Polling-15s_Auto_Sync-10B981?style=for-the-badge&labelColor=0D0B0C)](https://github.com)
[![Hosting](https://img.shields.io/badge/Deploy-GitHub_Pages_PWA-1A1517?style=for-the-badge&labelColor=0D0B0C)](https://github.com)
[![License](https://img.shields.io/badge/License-GPL--3.0-DC2626?style=for-the-badge&labelColor=0D0B0C)](./LICENSE)


## 🧭 System Architecture & Live Data Flow

```text
┌─────────────────────────────────────────────────────────────────────────┐
│                    ALBION WARLORD HUB (GitHub Pages PWA)                │
│  [NA] [EU] [AS] Server Switcher  ·  UTC Clock  ·  15s Auto-Refresh      │
└───────┬──────────────────────────┬──────────────────────────┬───────────┘
        │                          │                          │
        ▼                          ▼                          ▼
┌───────────────────┐    ┌───────────────────┐    ┌───────────────────────┐
│   COMBAT ENGINE   │    │  EXPLORE & TOOLS  │    │   ECONOMY & LEDGER    │
│ • Battleboard     │    │ • Players & Guilds│    │ • Crafting & Refining │
│ • Killboard (2×6) │    │ • Rankings        │    │ • Market Flip Scanner │
│ • API Meta Builds │    │ • Bandit (hh:mm)  │    │ • Island Planner      │
│   (Auto 15s Sync) │    │ • Loot Split+CSV  │    │ • Gold & 30d Premium  │
└─────────┬─────────┘    └─────────┬─────────┘    └───────────┬───────────┘
          │                        │                          │
          ▼                        ▼                          ▼
   AlbionBB (CORS) +        Local CSV / JSON +         Albion Online Data
  Gameinfo Proxy Chain     Avalon Zone Index          Project (AODP) API v2
```

---

### 1. 📊 Unified Dashboard & Global Ticker
* **Live Ticker Bar:** Displays real-time **UTC time**, server health (**NA / EU / AS**), **Bandit Assault** countdown (`hh:mm:ss`), **Gold** silver equivalent, and **30-Day Premium** silver price.
* **Synced Command Cards:** Tracks **Battleboard**, **Killboard**, **Builds**, **Rankings**, **Bandit Assault**, **Crafting & Refining** (highlighting today's **Daily Production Bonus**), **Market & Alerts** (highlighting the top **Market Flip**), **Gold (Silver Equiv.)**, and **Premium (Silver Price)**.
* **Combat Overview:** Displays **Recent Battles**, **Recent Kills**, and **Community & API Builds** side by side.

### 2. ⚔️ Combat Suite (15-Second Auto-Refresh)
* **Battleboard:** Pulls recent ZvZ and guild fights for the active server (`NA`, `EU`, or `AS`) with minimum-player filtering, guild/alliance search, alliance kill/fame pills, per-player damage/impact bars, and Battle JSON import.
* **Killboard (`Recent Kills`):** Mirrors RaidQuest-style kill cards with Killer vs. Victim **2×6 equipment grids** (MainHand, OffHand, Head, Armor, Shoes, Cape, Food, Potion, Bag, Mount), enchantment borders, Item Power (`IP`), `K`/`M` Kill Fame, **Opponent / Battle Size (`1v1`, `2v2`, `5v5`, `ZvZ`) / Weapon** filters, and a **View Full Event** participant modal.
* **Meta Builds:** Automatically extracts live PvP loadouts directly from Albion Online API kill events alongside `r/albiononline` community posts and custom locally saved builds.

### 3. 🧭 Explore & Raid Utilities
* **Players & Guilds:** Live cross-server player and guild profile lookup.
* **Rankings:** Server-specific **Most Kills** and **Highest Kill Fame** ladders across Players, Guilds, and ZvZ Alliances with search-and-pin.
* **Bandit Assault Tracker:** Real-time `hh:mm:ss` countdowns and 24-hour UTC + local timezone roll schedules across NA, EU, and AS.
* **Loot Split & CSV Logger:** Import Albion Loot Logger `.csv` files, audit player drops with item sprites, push the total into the party silver split calculator (taxes, 10k bags, repair bills), and export a PNG receipt.
* **Avalon Maps:** Filter Roads of Avalon zones by tier (`T4`/`T6`/`T8`), layout (`C/F/H/O/P/S/T/X`), Hideout eligibility, and Gold/Blue/Green chests.

### 4. 🔨 Economy & Merchantry Ledger
* **Crafting & Refining Ledger:** Searchable recipe bar for Gear, Refining, Food, and Enchanting (`.0 → .1/.2`), displaying the **Bonus Crafting City**, **Daily Production Bonus (+10%)** notification, Focus RRR, owned-material deductions, per-city profit comparison, and multi-craft batch queue.
* **Market & Alerts (Profit Scanner):** Blank item search bar with 14-day AODP price history charts, **Buy From / Sell In** Royal City–to–Black Market/Caerleon **Flip Scanner**, and browser-notified price threshold alerts.
* **Island Planner:** Calculates seeds needed, seed return, expected harvest yield, and daily silver profit across T1–T8 crops, Island Levels 1–6, Premium `2x` yield, and Focus.
* **Gold & Premium:** Live Gold-to-Silver exchange curves (`24H`/`7D`/`30D`) and 1-, 3-, 6-, and 12-month Premium silver breakdowns.

### 🚀 Deployment (GitHub Pages)
1. Extract `albion-warlord-hub-ghpages.zip` into your GitHub repository root.
2. Enable **Settings → Pages → GitHub Actions** (the included `.github/workflows/pages.yml` deploys automatically).
3. *(Optional)* Deploy `CLOUDFLARE_WORKER.md` for zero-throttle personal Gameinfo proxying.



<div align="center">
  <sub>Licensed under <strong>GPL-3.0</strong> · Built for GitHub Pages · Powered by Albion Online Data Project, AlbionBB &amp; Official Render API</sub>
</div>
