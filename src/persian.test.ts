import { getDateLib } from "./persian.js";

describe("Persian date lib with time zones", () => {
  const dateLib = getDateLib({ timeZone: "Asia/Tehran" });

  test("navigates months without falling back a year", () => {
    const start = dateLib.startOfMonth(dateLib.newDate(1933, 5, 1));
    const next = dateLib.addMonths(start, 1);

    expect(dateLib.getYear(next)).toBeGreaterThanOrEqual(1933);
    expect(next.getTime()).not.toBeNaN();
    expect(dateLib.getMonth(next)).not.toBe(dateLib.getMonth(start));
  });
});
