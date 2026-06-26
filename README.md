# Gay-Fetischhof

Subsite von **[peitschenhandel.de](https://peitschenhandel.de/)** für die schwule Fetisch-Zielgruppe.
Eigener Shopware-6-Sales-Channel (Theme: *Themeware Modern*), individuelles Design **„Neon Cruise“**.

Das Theme wird **nicht** durch Code im Shopware-Backend verändert, sondern über die
Theme-Manager-Felder **„CSS-Datei laden“** und **„JavaScript-Datei laden“** als externe
Dateien eingebunden. Diese Dateien liegen hier im Repo und werden über **GitHub Pages**
ausgeliefert (korrekter MIME-Type, CORS, Cache nur ~10 Min, Auto-Update bei jedem Push).

## 🔗 Links für den Theme-Manager (permanent)

> Theme-Manager → *Gay-Fetischhof* → Abschnitt **CSS-Datei** / **JavaScript-Datei**

| Feld | Wert |
|------|------|
| **CSS-Datei laden** | `ja` |
| **CSS-Datei** | `https://virusecho.github.io/Gay-Fetischhof/gay-fetischhof-theme.css` |
| **JavaScript-Datei laden** | `ja` |
| **JavaScript-Datei** | `https://virusecho.github.io/Gay-Fetischhof/gay-fetischhof-theme.js` |
| **Datei asynchron laden** | `nein` *(CSS synchron, sonst kurzes Aufblitzen des Default-Themes)* |

**Permanent — einmal eintragen, nie wieder ändern.** Bei jedem `git push` baut GitHub Pages
automatisch neu; Änderungen sind nach ~1 Min Build + max. 10 Min Cache live. Zum sofortigen
Sehen einfach Hard-Reload (`Strg`+`F5`). Konsole zeigt: `Gay-Fetischhof theme JS · v1.8-neon-cruise`.

> Pages setzt `cache-control: max-age=600` (10 Min) statt jsDelivrs 7 Tage → kein SHA-Pinning,
> kein Purge nötig. Das Startseiten-Fragment lädt das JS ebenfalls über Pages
> (`https://virusecho.github.io/Gay-Fetischhof/startseite.html`).

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
