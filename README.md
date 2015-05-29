# Výchozí stav příkladu ke školení [Pokročilý responzivní design](http://www.vzhurudolu.cz/kurzy/pokrocily-responzivni-design)

**Autor:** Martin Michálek, martin@vzhurudolu.cz

## Struktura stylů

* `src/less/index.less` – hlavní LESS soubor
* `src/less/base/` – komponenty pro textový, vertikální design
* `src/less/components/` – pokročilejší komponenty uživatelského rozhraní
* `src/less/core/` – pomocné funkce, mixiny…
* `src/less/layout/` – layout stránky
* `src/less/lib/` – knihovny

Kompilujeme do `dist/css/style.css`.


## Javascript

* `src/js/index.js` – hlavní JS soubor

Závislosti řešíme pomocí Browserify.

## Závislosti a npm

Vše potřebné nainstalujete pomocí `npm install`.

Závislosti (jQuery, Fancybox nebo Normalize.CSS) spravujeme pomocí Node.js balíčkovacího systému https://www.npmjs.com/. Viz `package.json`.


## Grunt a automatizace

Důležité tásky:

* `grunt` - spustí vše a nastartuje vývojový server, otevře prohlížeč s nastartovanou synchronizací a pustí hlídání změn
* Pro jednotlivé typy assetů se může hodit `grunt img`, `grunt css`, `grunt js`.











