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

> **⚠️ Cache-Wichtig (aktive Entwicklung):** jsDelivr setzt `@main`-Dateien
> `cache-control: max-age=604800` → **Browser der Besucher cachen das CSS 7 Tage**, und
> `purge` propagiert nur langsam. Während aktiv gestylt wird, **statt `@main` den Commit-SHA
> pinnen** — das ist eine *neue, unveränderliche* URL und lädt sofort frisch:
>
> `https://cdn.jsdelivr.net/gh/virusecho/Gay-Fetischhof@<SHA>/gay-fetischhof-theme.css`
> `https://cdn.jsdelivr.net/gh/virusecho/Gay-Fetischhof@<SHA>/gay-fetischhof-theme.js`
>
> Nach jedem Push neuen SHA eintragen + Theme neu kompilieren. Wenn das Design final ist,
> zurück auf `@main` (set-and-forget). Den aktuellen SHA: `git rev-parse HEAD`.
>
> Das **Startseiten-Fragment** lädt das JS bewusst über `raw.githubusercontent.com`
> (Cache nur 5 Min) → Content-Auto-Sync ohne 7-Tage-Falle.

## 📄 Dateien

| Datei | Zweck |
|-------|-------|
| `gay-fetischhof-theme.css` | Globales Theme (Header, Footer, Buttons, Produktboxen, CMS) im Neon-Cruise-Look. Namespace `gf-`, Root `html.gf-neon`. |
| `gay-fetischhof-theme.js` | Aktiviert das Theme (`html.gf-neon`), Scroll-State, Neon-Topbar, Scroll-Reveal-Animationen. Keine Eingriffe in Warenkorb/Checkout. |
| `preview.html` | Vorschau der **Startseiten-Bausteine**. Jeder `<section>` = ein CMS-„HTML“-Block für die Erlebniswelt. |

## 🏠 Startseite einrichten — Auto-Sync aus GitHub

Die Startseite lädt ihren Inhalt **live aus `startseite.html`** (dieses Repo, via jsDelivr).
In der Shopware-**Erlebniswelt** der Startseite genügt **ein** CMS-„HTML“-Element mit nur
diesem Platzhalter:

```html
<div data-gf-home>Lädt …</div>
```

Das Theme-JS (`gay-fetischhof-theme.js`) erkennt den Platzhalter, holt `startseite.html` und
rendert die 5 Sektionen (Hero, Kategorien, USP, Editorial, Newsletter) hinein. **Edit auf
GitHub → Startseite aktualisiert sich** (jsDelivr-Cache ggf. purgen, s. o.).

> Den kompletten `preview.html` **nicht** ins HTML-Element einfügen — das ist nur die
> Design-Vorschau. In Shopware kommt ausschließlich der Platzhalter-`<div>` rein.

**Hinweis SEO:** Der Inhalt wird clientseitig injiziert (nicht im initialen HTML). Für die
Startseite meist unkritisch; wer maximale SEO will, fügt die Sektionen aus `preview.html`
stattdessen statisch ein (dann aber kein Auto-Sync).

Platzhalter im Inhalt ersetzen (direkt in `startseite.html`):
- Kategorie-Kacheln: `.bg`-Hintergründe durch echte Medien-URLs / Kategorie-Links tauschen.
- Links (`/Kollektion/`, `/Leder/`, …) an die echten Kategorie-URLs anpassen.

## 🎨 Design-Tokens (Neon Cruise)

- Base: `#07070d` · Surface: `#12121f`
- Neon Magenta `#ff2d95` · Cyan `#00e5ff` · Violet `#8a5cff`
- Display: *Space Grotesk* · Body: *Sora*

---
*Hinweis: Theme-Manager-Einstellungen werden vom Shop-Inhaber selbst gespeichert — dieses Repo
liefert nur die Asset-Dateien und Vorlagen.*
