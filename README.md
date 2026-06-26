# Gay-Fetischhof

Subsite von **[peitschenhandel.de](https://peitschenhandel.de/)** für die schwule Fetisch-Zielgruppe.
Eigener Shopware-6-Sales-Channel (Theme: *Themeware Modern*), individuelles Design **„Neon Cruise“**.

Das Theme wird **nicht** durch Code im Shopware-Backend verändert, sondern über die
Theme-Manager-Felder **„CSS-Datei laden“** und **„JavaScript-Datei laden“** als externe
Dateien eingebunden. Diese Dateien liegen hier im Repo und werden über das **jsDelivr-CDN**
ausgeliefert (korrekter MIME-Type, Caching, CORS).

## 🔗 Links für den Theme-Manager

> Theme-Manager → *Gay-Fetischhof* → Abschnitt **CSS-Datei** / **JavaScript-Datei**

| Feld | Wert |
|------|------|
| **CSS-Datei laden** | `ja` |
| **CSS-Datei** | `https://cdn.jsdelivr.net/gh/virusecho/Gay-Fetischhof@main/gay-fetischhof-theme.css` |
| **JavaScript-Datei laden** | `ja` |
| **JavaScript-Datei** | `https://cdn.jsdelivr.net/gh/virusecho/Gay-Fetischhof@main/gay-fetischhof-theme.js` |
| **Datei asynchron laden** | `nein` *(CSS synchron, sonst kurzes Aufblitzen des Default-Themes)* |

Nach dem Speichern **Theme kompilieren** und Storefront mit Hard-Reload (`Strg`+`F5`) prüfen.
Konsole zeigt zur Kontrolle: `Gay-Fetischhof theme JS · v1-neon-cruise`.

> **Cache-Hinweis:** jsDelivr cacht `@main` aggressiv (bis zu 24 h). Nach einem Update
> entweder einen festen Commit/Tag pinnen (`@<commit>`) oder den Purge nutzen:
> `https://purge.jsdelivr.net/gh/virusecho/Gay-Fetischhof@main/gay-fetischhof-theme.css`

## 📄 Dateien

| Datei | Zweck |
|-------|-------|
| `gay-fetischhof-theme.css` | Globales Theme (Header, Footer, Buttons, Produktboxen, CMS) im Neon-Cruise-Look. Namespace `gf-`, Root `html.gf-neon`. |
| `gay-fetischhof-theme.js` | Aktiviert das Theme (`html.gf-neon`), Scroll-State, Neon-Topbar, Scroll-Reveal-Animationen. Keine Eingriffe in Warenkorb/Checkout. |
| `preview.html` | Vorschau der **Startseiten-Bausteine**. Jeder `<section>` = ein CMS-„HTML“-Block für die Erlebniswelt. |

## 🏠 Startseite einrichten

Die Startseiten-Blöcke aus `preview.html` (Reihenfolge 1–5: Hero, Kategorien, USP, Editorial,
Newsletter) jeweils als **HTML-Element** in eine Shopware-**Erlebniswelt** einfügen und der
Startseite des Sales-Channels zuweisen. Platzhalter ersetzen:

- Kategorie-Kacheln: `.bg`-Hintergründe durch echte Medien-URLs / Kategorie-Links tauschen.
- Links (`/Kollektion/`, `/Leder/`, …) an die echten Kategorie-URLs anpassen.

## 🎨 Design-Tokens (Neon Cruise)

- Base: `#07070d` · Surface: `#12121f`
- Neon Magenta `#ff2d95` · Cyan `#00e5ff` · Violet `#8a5cff`
- Display: *Space Grotesk* · Body: *Sora*

---
*Hinweis: Theme-Manager-Einstellungen werden vom Shop-Inhaber selbst gespeichert — dieses Repo
liefert nur die Asset-Dateien und Vorlagen.*
