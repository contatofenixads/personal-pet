// Gera o PNG 1080x1920 a partir do banner.html (precisa de site.jpg e bio.jpg na mesma pasta: prints 750x1624 das páginas no celular)
// Uso: node render.js   (Playwright instalado)
const path = require('path');
let chromium; try { ({ chromium } = require('playwright')); } catch { ({ chromium } = require('/opt/npm-tools/node_modules/playwright')); }
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1080, height: 1920 } });
  await p.goto('file://' + path.join(__dirname, 'banner.html'));
  await p.waitForTimeout(800);
  await p.screenshot({ path: path.join(__dirname, 'banner-9x16.png') });
  await b.close();
})();
