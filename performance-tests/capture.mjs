import fs from "fs";
import { startFlow } from "lighthouse";
import open from "open";
import puppeteer from "puppeteer";

import lighthouseConfig from "./lighthouse-config.mjs";

const examples = [
  "Range"

  // "AutoFocus",
  // "ContainerAttributes",
  // "Controlled",
  // "ControlledSelection",
  // "CssModules",
  // "CssVariables"
  // "CustomCaption",
  // "CustomDayButton",
  // "CustomMultiple",
  // "CustomSingle",
  // "CustomWeek",
  // "DefaultMonth",
  // "Dialog",
  // "Disabled",
  // "DisableNavigation",
  // "Dropdown",
  // "DropdownMultipleMonths",
  // "Fixedweeks",
  // "FocusRecursive",
  // "Footer",
  // "Formatters",
  // "FromToMonth",
  // "FromToYear",
  // "HideNavigation",
  // "Input",
  // "InputRange",
  // "InputTime",
  // "ItalianLabels",
  // "ItalianLabels",
  // "Jalali",
  // "Keyboard",
  // "ModifiersClassnames",
  // "ModifiersCustom",
  // "ModifiersDisabled",
  // "ModifiersHidden",
  // "ModifiersSelected",
  // "ModifiersStyle",
  // "ModifiersToday",
  // "Multiple",
  // "MultipleMinMax",
  // "MultipleRequired",
  // "MultipleMonths",
  // "MultipleMonthsPaged",
  // "NumberingSystem",
  // "OutsideDays",
  // "PastDatesDisabled",
  // "Range",
  // "RangeExcludeDisabled",
  // "RangeMinMax",
  // "RangeRequired",
  // "RangeShiftKey",
  // "Rtl",
  // "Single",
  // "SingleControlled",
  // "SingleRequired",
  // "Spanish",
  // "SpanishWeekStartsOn",
  // "Start",
  // "StartEndMonths",
  // "StylingCss",
  // "StylingInline",
  // "StylingModifiers",
  // "TailwindCSS",
  // "Testcase1567",
  // "TestCase2047",
  // "TestCase2389",
  // "TimeZone",
  // "Utc",
  // "WeekIso",
  // "Weeknumber",
  // "WeeknumberCustom",
  // "WeeknumberIso",
  // "WeekStartsOn"
];

async function captureReport() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.emulateMediaFeatures([
    { name: "prefers-color-scheme", value: "light" }
  ]);
  const flow = await startFlow(page, {
    name: "DayPicker User Flow",
    config: lighthouseConfig
  });

  for (const example of examples) {
    process.stdout.write(`Navigating ${example} example...`);
    await flow.navigate(`http://localhost:4173/?example=${example}`, {
      name: `${example} example`
    });
    process.stdout.write(" done.\n");
  }

  await browser.close();

  const report = await flow.generateReport();

  fs.writeFileSync("flow.report.html", report);

  open("flow.report.html", { wait: false });
}

captureReport();
