import fs from "fs";
import { startFlow } from "lighthouse";
import open from "open";
import puppeteer from "puppeteer";

import { rangeLong } from "./flows/range-long.mjs";
import lighthouseConfig from "./lighthouse-config.mjs";

const reportFileName = `./reports/report.html`;

async function captureReport() {
  const browser = await puppeteer.launch({
    headless: Boolean(process.env.CI) === true,
    executablePath: process.env.CHROME_PATH || undefined,
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

  const report = await flow.generateReport();
  await browser.close();

  fs.writeFileSync(reportFileName, report);

  const jsonReport = await flow.createFlowResult();
  let hasFailure = false;
  for (const step of jsonReport.steps) {
    const categories = step.lhr.categories;

    for (const key in categories) {
      const score = categories[key]?.score;

      if (score !== undefined && score < 1) {
        console.error(
          `Test failed on step "${step.name}" in category "${key}": Score: ${score}`
        );
        hasFailure = true; // Mark as failure but continue
      }
    }
  }
  if (process.env.CI && hasFailure) {
    throw new Error("Test failed: Some steps do not meet the score threshold.");
  }

  if (hasFailure) {
    console.error("Test failed: Some steps do not meet the score threshold.");
  } else {
    console.log("Test passed: All steps meet the score threshold.");
  }

  if (!process.env.CI) {
    open(reportFileName, { wait: false });
  }
}

captureReport();
