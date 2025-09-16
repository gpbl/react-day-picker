import { enUS } from "date-fns/locale/en-US";
import { arSA } from "date-fns/locale/ar-SA";

import { format } from "./format.js";

describe("hijri format", () => {
  const date = new Date(2024, 9, 3);

  test("formats caption in Arabic", () => {
    const caption = format(date, "LLLL y", { locale: arSA });
    expect(caption).toContain("1446");
  });

  test("formats caption in English", () => {
    const caption = format(date, "LLLL y", { locale: enUS });
    expect(caption).toContain("1446");
    expect(caption).toMatch(/Rabi/);
  });
});
