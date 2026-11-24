<div align="center">

<img src="./silver-ledger-brand-crest.webp" alt="Albion Warlord Hub Crest" width="140" />

# ⚔️ ALBION WARLORD HUB

**Black Zone Warlord Edition · Unified Battleboard, Killboard & Merchantry Ledger for GitHub Pages**

[![Theme](https://img.shields.io/badge/Theme-Black_Zone_Warlord-DC2626?style=for-the-badge&labelColor=0D0B0C)](https://github.com)
[![Servers](https://img.shields.io/badge/Servers-NA_%7C_EU_%7C_AS-F59E0B?style=for-the-badge&labelColor=0D0B0C)](https://github.com)
[![Auto Refresh](https://img.shields.io/badge/Live_Polling-15s_Auto_Sync-10B981?style=for-the-badge&labelColor=0D0B0C)](https://github.com)
[![Hosting](https://img.shields.io/badge/Deploy-GitHub_Pages_PWA-1A1517?style=for-the-badge&labelColor=0D0B0C)](https://github.com)
[![License](https://img.shields.io/badge/License-GPL--3.0-DC2626?style=for-the-badge&labelColor=0D0B0C)](./LICENSE)

**Languages / Mga Wika / 语言:** **English** · **Filipino (Tagalog)** · **简体中文**

<p>
  <img src="https://render.albiononline.com/v1/item/T8_2H_AXE_AVALON@4.png?quality=5&size=64" width="44" alt="Realmbreaker" />
  <img src="https://render.albiononline.com/v1/item/T8_MAIN_DAGGER_HELL@3.png?quality=4&size=64" width="44" alt="Bloodletter" />
  <img src="https://render.albiononline.com/v1/item/T8_ARMOR_LEATHER_HELL@2.png?quality=3&size=64" width="44" alt="Hellion Jacket" />
  <img src="https://render.albiononline.com/v1/item/T8_BAG@4.png?quality=5&size=64" width="44" alt="Elder's Bag" />
  <img src="https://render.albiononline.com/v1/item/T7_MEAL_OMELETTE.png?quality=1&size=64" width="44" alt="Pork Omelette" />
  <img src="https://render.albiononline.com/v1/item/T8_MOUNT_MAMMOTH_TRANSPORT.png?quality=1&size=64" width="44" alt="Transport Mammoth" />
</p>

</div>

---

## 🎨 Black Zone Warlord Visual System

| Role | Color Swatch | Hex Code | Usage in UI |
| :--- | :--- | :--- | :--- |
| **Charred Ash** | ⬛ Dark Obsidian | `#0D0B0C` | Primary page canvas & input wells |
| **Forged Iron** | 🟫 Warm Charcoal | `#1A1517` | Cards, sidebar & sticky header |
| **Killboard Crimson** | 🟥 Blood Red | `#DC2626` | Primary CTAs, active nav & ZvZ highlights |
| **Ember Amber** | 🟧 Gold Amber | `#F59E0B` | Silver figures, Bandit timers & `.4` badges |
| **Victory Jade** | 🟩 Emerald | `#10B981` | Positive profit margins, kills & online status |
| **Execution Rose** | 🟪 Crimson Rose | `#F43F5E` | Deaths, taxes & negative spreads |

---

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

## 🌐 English — Full Feature & Usage Guide

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

---

## 🇵🇭 Filipino (Tagalog) — Gabay sa Mga Tampok at Paggamit

### 1. 📊 Pinag-isang Dashboard at Live Ticker
* **Live Status Bar:** Ipinapakita ang eksaktong **UTC oras**, katayuan ng server (**NA / EU / AS**), countdown ng **Bandit Assault** (`hh:mm:ss`), halaga ng **Gold** sa Silver, at presyo ng **30-Day Premium**.
* **Mga Card sa Dashboard:** Sinusubaybayan ang **Battleboard**, **Killboard**, **Builds**, **Rankings**, **Bandit Assault**, **Crafting & Refining** (kasama ang **Daily Production Bonus**), **Market & Alerts** (pinakamagandang **Market Flip**), **Gold**, at **Premium (Silver Price)**.

### 2. ⚔️ Combat Suite (Auto-Refresh Bawat 15 Segundo)
* **Battleboard:** Ipinapakita ang mga bagong laban (ZvZ at guild fights) para sa napiling server, may alliance breakdown, player damage meters, at JSON import.
* **Killboard:** Nagpapakita ng Killer vs. Victim **2×6 gear grids**, Item Power (`IP`), Kill Fame, mga filter sa **Opponent / Battle Size / Weapon**, at **View Full Event** modal.
* **Builds:** Awtomatikong kumukuha ng mga aktwal na loadout mula sa Albion Online API kills at komunidad, at may custom build creator din.

### 3. 🧭 Explore, Loot at Economy Tools
* **Players, Guilds & Rankings:** Live na paghahanap ng manlalaro/guild at mga leaderboard na may pin-to-top search.
* **Bandit Assault & Avalon Maps:** `hh:mm:ss` Red Zone timer at searchable Roads of Avalon zone explorer.
* **Loot Split & CSV Logger:** Mag-import ng Albion Loot Logger `.csv`, awtomatikong kalkulahin ang hatian ng pilak (may guild tax, buyer fee, at repairs), at mag-download ng PNG receipt.
* **Crafting, Market Flips & Island Planner:** May recipe search bar na nagpapakita ng **Bonus Crafting City**, **Profit Scanner** (Royal Cities papuntang Caerleon / Black Market), **Island Farming** seed/yield calculator, at **Gold & Premium** tracker.

---

## 🇨🇳 简体中文 — 功能特色与使用指南

### 1. 📊 统一仪表盘与实时状态栏
* **全局实时状态栏：** 实时显示 **UTC 时间**、三大服务器状态（**NA / EU / AS**）、**强盗袭击（Bandit Assault）** `hh:mm:ss` 倒计时、**金币（Gold）** 银币汇率及 **30天高级会员（Premium）** 银币价格。
* **仪表盘总览：** 集中同步 **Battleboard**、**Killboard**、**Builds**、**Rankings**、**Bandit Assault**、**制造与精炼**（显示今日**每日制造加成**）、**市场套利与预警**（显示最佳**倒卖物品**）、**金币银币折算**及 **会员银币价格**。

### 2. ⚔️ 战斗分析套件（每 15 秒自动刷新）
* **战场面板（Battleboard）：** 按所选服务器实时拉取最新团战（ZvZ）报告，支持联盟筛选、公会成员伤害/战绩条与 JSON 导入。
* **击杀榜（Killboard）：** 采用 **2×6 装备栏对比视图**（主手、副手、头盔、胸甲、鞋子、披风、食物、药水、背包、坐骑），支持 **对手搜索 / 战斗规模（1v1、2v2、5v5、ZvZ）/ 武器** 筛选及 **完整事件详情弹窗**。
* **配装库（Builds）：** 自动从 Albion Online 实时 API 击杀数据中提取当前实战配装，并结合社区配装与本地自定义配装。

### 3. 🧭 探索、分赃与经济账本
* **玩家/公会搜索与排行榜：** 跨服实时查询角色与公会，支持排行榜置顶追踪。
* **强盗袭击与阿瓦隆地图：** 提供 `hh:mm:ss` 红区活动倒计时与阿瓦隆之路区域（等级、布局、藏身处、宝箱）筛选。
* **战利品分配与 CSV 解析：** 导入 Albion Loot Logger `.csv` 日志，一键推送至团队分赃计算器（含公会税、收购折扣、修装费）并导出 PNG 凭证。
* **制造精炼、市场倒卖与岛屿规划：** 支持配方搜索并高亮**制造加成城市**与**每日加成通知**；内置 **AODP 跨城倒卖扫描器**、浏览器价格提醒、**T1–T8 岛屿农田收益计算器**及 **金币/会员走势图**。

---

<div align="center">
  <sub>Licensed under <strong>GPL-3.0</strong> · Built for GitHub Pages · Powered by Albion Online Data Project, AlbionBB &amp; Official Render API</sub>
</div>
