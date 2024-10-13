import fs from "fs";
import { startFlow } from "lighthouse";
import open from "open";
import puppeteer from "puppeteer";

import { rangeLong } from "./flows/range-long.mjs";
import lighthouseConfig from "./lighthouse-config.mjs";

async function captureReport() {
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: { width: 1200, height: 800, deviceScaleFactor: 2 }
  });
  const page = await browser.newPage();
  await page.emulateMediaFeatures([
    { name: "prefers-color-scheme", value: "light" }
  ]);
  const flow = await startFlow(page, {
    name: "DayPicker Examples Flow",
    config: lighthouseConfig
  });

  await rangeLong(flow, page);

  await browser.close();

  const report = await flow.generateReport();

  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const reportFileName = `./reports/flow.report.${timestamp}.html`;
  fs.writeFileSync(reportFileName, report);
  open(reportFileName, { wait: false });
}

captureReport();
