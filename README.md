# Příklad k přednášce o Critical CSS

[Článek s obsahem přednášky](http://www.vzhurudolu.cz/prednaska/frontendisticz-critical-css-144)

**Autor:** Martin Michálek, martin@vzhurudolu.cz

## Závislosti a npm

Vše potřebné nainstalujete pomocí `npm install`.

Závislosti (jQuery, Fancybox nebo Normalize.CSS) spravujeme pomocí Node.js balíčkovacího systému https://www.npmjs.com/. Viz `package.json`.

## Grunt a automatizace

Důležité tásky:

* `grunt` - spustí vše a nastartuje vývojový server, otevře prohlížeč s nastartovanou synchronizací a pustí hlídání změn
* Pro jednotlivé typy assetů se může hodit `grunt img`, `grunt css`, `grunt js`.
* Nezbytné CSS generuje `grunt criticalcss`.











