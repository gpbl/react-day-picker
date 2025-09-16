import { enUS } from "date-fns/locale/en-US";
import { he } from "date-fns/locale/he";

import { format } from "./index";

describe("hebrew format", () => {
  const roshHashanah5785 = new Date(2024, 9, 3);

  test("formats caption in Hebrew", () => {
    const caption = format(roshHashanah5785, "LLLL y", { locale: he });
    expect(caption).toContain("5785");
    expect(caption).toMatch(/תשר/);
  });

  test("formats caption in English when locale=enUS", () => {
    const caption = format(roshHashanah5785, "LLLL y", { locale: enUS });
    expect(caption).toBe("Tishri 5785");
  });

  test("formats PPPP with weekday", () => {
    const longForm = format(roshHashanah5785, "PPPP", { locale: enUS });
    expect(longForm).toBe("Thursday, 1 Tishri 5785");
  });

  test("formats ISO-like string", () => {
    const isoLike = format(roshHashanah5785, "yyyy-MM-dd", { locale: enUS });
    expect(isoLike).toBe("5785-01-01");
  });
});
