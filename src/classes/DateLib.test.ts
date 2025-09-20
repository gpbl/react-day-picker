import { DateLib } from "./DateLib.js";

import type { Numerals } from "../types/shared.js";

const numeralCases: Array<[Numerals, string]> = [
  ["latn", "123"],
  ["arab", "١٢٣"],
  ["arabext", "۱۲۳"],
  ["deva", "१२३"],
  // Geez numerals are not supported by Intl.NumberFormat; DateLib falls back
  // to Latin digits for now when the locale does not provide them.
  ["geez", "123"],
  ["beng", "১২৩"],
  ["guru", "੧੨੩"],
  ["gujr", "૧૨૩"],
  ["orya", "୧୨୩"],
  ["tamldec", "௧௨௩"],
  ["telu", "౧౨౩"],
  ["knda", "೧೨೩"],
  ["mlym", "൧൨൩"],
  ["thai", "๑๒๓"],
  ["mymr", "၁၂၃"],
  ["khmr", "១២៣"],
  ["laoo", "໑໒໓"],
  ["tibt", "༡༢༣"],
];

describe("DateLib numerals", () => {
  test.each(numeralCases)(
    "formats numbers using %s digits",
    (numerals, expected) => {
      const dateLib = new DateLib({ numerals });
      expect(dateLib.formatNumber(123)).toBe(expected);
    },
  );
});
