import { format } from "date-fns/format";
import type { Locale } from "date-fns/locale";
import { de } from "date-fns/locale/de";
import { enUS } from "date-fns/locale/en-US";
import { eo } from "date-fns/locale/eo";
import { ja } from "date-fns/locale/ja";
import { sl } from "date-fns/locale/sl";
import { sq } from "date-fns/locale/sq";
import { zhCN } from "date-fns/locale/zh-CN";

import { getFullDatePattern } from "./getFullDatePattern";

const pattern = (date: Date, locale: Locale) =>
  getFullDatePattern(date, locale, (d, p) => format(d, p, { locale }));

test("replaces an ordinal glued to the day number", () => {
  expect(pattern(new Date(2026, 0, 22), enUS)).toBe("EEEE, MMMM d, y");
});

test("replaces a zero-padded day", () => {
  expect(pattern(new Date(2026, 0, 1), sl)).toBe("EEEE, d. MMMM y");
});

test("returns PPPP when the day already matches the day number", () => {
  expect(pattern(new Date(2026, 0, 22), sl)).toBe("PPPP");
  expect(pattern(new Date(2026, 0, 22), de)).toBe("PPPP");
  expect(pattern(new Date(2026, 0, 22), eo)).toBe("PPPP");
  expect(pattern(new Date(2026, 0, 22), ja)).toBe("PPPP");
  expect(pattern(new Date(2026, 0, 22), zhCN)).toBe("PPPP");
});

test("checks the ordinal of the given date", () => {
  expect(pattern(new Date(2026, 0, 1), sq)).toBe("PPPP");
  expect(pattern(new Date(2026, 0, 4), sq)).toBe("EEEE, MMMM d, y");
});

test("leaves quoted literals untouched", () => {
  const locale = {
    formatLong: { date: () => "EEEE, do 'dd do' MMMM" },
  } as unknown as Locale;
  expect(
    getFullDatePattern(new Date(2026, 0, 22), locale, (d, p) =>
      format(d, p, { locale: enUS }),
    ),
  ).toBe("EEEE, d 'dd do' MMMM");
});

test("returns PPPP without a locale", () => {
  expect(getFullDatePattern(new Date(), undefined, () => "")).toBe("PPPP");
});
