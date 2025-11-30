import * as dateFnsLocales from "date-fns/locale";
import * as dayPickerLocales from "./locale.js";

const dateFnsLocaleKeys = Object.keys(dateFnsLocales).filter((key) => {
  const locale = (dateFnsLocales as Record<string, unknown>)[key];
  return (
    typeof locale === "object" &&
    locale !== null &&
    "code" in (locale as Record<string, unknown>)
  );
});

test("exports a DayPicker locale with labels for every date-fns locale", () => {
  dateFnsLocaleKeys.forEach((key) => {
    const locale = (dayPickerLocales as Record<string, unknown>)[key] as {
      labels?: unknown;
    };
    expect(locale).toBeDefined();
    expect(locale?.labels).toBeDefined();
  });
});
