#!/usr/bin/env node
// Usage: node screenshot.js <url> [outDir] [settleMs]
// Screenshots a page at mobile/tablet/desktop viewports.
// Scrolls the full page to trigger lazy-loaded content and let intro
// animations / preloaders finish before capturing.
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const TARGET_URL = process.argv[2];
const OUT_DIR = path.resolve(process.argv[3] || 'screenshots');
const SETTLE_MS = Number(process.argv[4] || 2500);

if (!TARGET_URL) {
  console.error('Usage: node screenshot.js <url> [outDir] [settleMs]');
  process.exit(1);
}

const VIEWPORTS = [
  { name: 'mobile', width: 390, height: 844 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1440, height: 900 },
];

// Scroll from top to bottom in steps so lazy-loaded images/sections render,
// then return to the top for a clean full-page capture.
async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let y = 0;
      const step = window.innerHeight;
      const timer = setInterval(() => {
        window.scrollBy(0, step);
        y += step;
        if (y >= document.body.scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 200);
    });
  });
  await page.evaluate(() => window.scrollTo(0, 0));
}

(async () => {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage();

  for (const { name, width, height } of VIEWPORTS) {
    await page.setViewportSize({ width, height });
    await page.goto(TARGET_URL, { waitUntil: 'load', timeout: 60000 });
    await page.waitForTimeout(SETTLE_MS); // let preloader / intro animation finish
    await autoScroll(page);
    await page.waitForTimeout(SETTLE_MS); // let lazy content settle after scroll
    await page.screenshot({ path: path.join(OUT_DIR, `${name}.png`), fullPage: true });
    console.log(`Saved ${name}.png (${width}x${height})`);
  }

  await browser.close();
})();
