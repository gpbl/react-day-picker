/**
 * @param {import("lighthouse").UserFlow} flow
 * @param {import("puppeteer").Page} page
 */
export async function rangeLong(flow, page) {
  await flow.navigate("http://localhost:4173/?example=RangeLong", {
    name: "Range selection with disabled dates"
  });
  await flow.startTimespan();

  // Click a day after the range
  await page.click('td[data-day="2024-10-16"] button');

  // Await the cell to be aria-selected
  await page.waitForSelector('td[data-day="2024-10-16"][aria-selected="true"]');
  await flow.endTimespan();
}
