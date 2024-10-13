import fs from "fs";
import { startFlow } from "lighthouse";
import open from "open";
import puppeteer from "puppeteer";

import { rangeLong } from "./flows/range-long.mjs";
import lighthouseConfig from "./lighthouse-config.mjs";

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

  await flow.snapshot();

  const report = await flow.generateReport();

  await browser.close();

  const reportFileName = `./reports/report.html`;

  const jsonReport = await flow.createFlowResult(); // Generate the JSON report
  let hasFailure = false;

  for (const step of jsonReport.steps) {
    const accessibilityScore = step.lhr.categories.accessibility.score;
    const performanceScore = step.lhr.categories.performance.score;

    if (accessibilityScore < 1 || performanceScore < 1) {
      console.error(
        `Test failed on step "${step.name}": Accessibility score: ${accessibilityScore}, Performance score: ${performanceScore}`
      );
      hasFailure = true; // Mark as failure but continue
    }
  }

  if (hasFailure) {
    process.exit(1); // Exit only if one or more steps failed
  } else {
    console.log("Test passed: All steps meet the score threshold.");
  }

  fs.writeFileSync(reportFileName, report);
  open(reportFileName, { wait: false });
}

captureReport();
