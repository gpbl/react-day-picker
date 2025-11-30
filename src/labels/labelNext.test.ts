import { enUS } from "date-fns/locale";

import { DateLib, type DayPickerLocale } from "../classes/DateLib.js";
import { getLabels } from "../helpers/getLabels.js";
import { it } from "../locales/it.js";

import { labelNext } from "./labelNext";

test("returns the default label when no locale translation is provided", () => {
  expect(labelNext(new Date())).toEqual("Go to the Next Month");
});

test("returns the translated label from the locale when available", () => {
  const labels = getLabels(undefined, new DateLib({ locale: it }).options);

  expect(labels.labelNext(new Date())).toEqual(
    "Vai al mese successivo",
  );
});

test("calls the locale label function when provided", () => {
  const locale: DayPickerLocale = {
    ...enUS,
    labels: {
      labelNext: (month) =>
        month ? `Next: ${month.toLocaleDateString("en-US", { month: "long" })}` : "Next",
    },
  };

  const labels = getLabels(undefined, new DateLib({ locale }).options);

  expect(labels.labelNext(new Date(2022, 5, 1))).toEqual("Next: June");
});
