# Schweden 2026 – so kommt die App auf eure Handys

Die App besteht aus 5 Dateien (index.html, sw.js, manifest.webmanifest, 2 Icons).
Einmal auf GitHub Pages gelegt, könnt ihr sie wie eine echte App installieren –
funktioniert auf deinem Android und Carinas iPhone gleichermaßen.

## 1. Repository anlegen (2 Minuten)

1. Auf github.com einloggen → rechts oben **+** → **New repository**
2. Name: etwas Unauffälliges mit Zufallsteil, z. B. `resa-x7k2m` (das wird Teil der URL)
3. Sichtbarkeit: **Public** lassen (GitHub Pages ist im Gratis-Tarif nur bei
   öffentlichen Repos möglich – siehe Hinweis unten) → **Create repository**

## 2. Dateien hochladen

1. Im neuen Repo: Link **"uploading an existing file"** anklicken
   (oder: Add file → Upload files)
2. Alle 5 Dateien aus dem ZIP hineinziehen → unten **Commit changes**

## 3. GitHub Pages aktivieren

1. Im Repo: **Settings** → links **Pages**
2. Bei "Source": **Deploy from a branch** → Branch **main**, Ordner **/ (root)** → **Save**
3. 1–2 Minuten warten, dann steht oben die URL:
   `https://DEINNAME.github.io/resa-x7k2m/`

## 4. Auf den Handys installieren

- **Android (Chrome):** URL öffnen → Menü ⋮ → **"App installieren"**
  (oder "Zum Startbildschirm hinzufügen")
- **iPhone (Safari):** URL öffnen → Teilen-Symbol → **"Zum Home-Bildschirm"**

Danach liegt die App mit Schweden-Icon am Homescreen, startet im Vollbild und
funktioniert dank Service Worker auch im Funkloch (Wetter braucht natürlich Netz,
zeigt offline die zuletzt geladenen Werte).

## 5. Updates während der Reise

Neue Version von mir bekommen? Einfach im Repo **Add file → Upload files**,
dieselben Dateien nochmal hineinziehen (überschreibt die alten), committen.
Beim nächsten Öffnen mit Netz holt sich die App automatisch die neue Version.

## Hinweise

- **Vorschau-Trick:** Unter "Mehr → Reisetag simulieren" könnt ihr jedes Datum
  einstellen (z. B. 2026-08-14) und sehen, was die App an dem Tag zeigt.
- **Privatsphäre:** Die App trägt jetzt ein eingebautes noindex – Suchmaschinen
  listen die Seite nicht. Im Repo liegen trotzdem eure Buchungsreferenzen und
  Adressen; nimm daher einen Repo-Namen mit Zufallsteil (z. B. resa-x7k2m).
  Die Referenzen allein sind harmlos (keine Zahlungsdaten). Wenn dich das
  öffentliche Repo stört: Alternativ lege ich euch die App in 5 Minuten auf
  Netlify (gratis, Zufalls-URL, kein öffentliches Repo nötig).
- Häkchen (Packliste), Bingo & Elch-Zähler werden pro Gerät gespeichert.
