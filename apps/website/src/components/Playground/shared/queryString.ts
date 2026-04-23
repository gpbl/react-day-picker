type LocaleLike = {
  code?: string;
};

const qsProps = [
  "animate",
  "broadcastCalendar",
  "captionLayout",
  "defaultMonth",
  "dir",
  "disabled",
  "disableNavigation",
  "calendar",
  "firstDayOfWeek",
  "firstWeekContainsDate",
  "fixedWeeks",
  "hideNavigation",
  "hideWeekdays",
  "ISOWeek",
  "locale",
  "max",
  "min",
  "mode",
  "navLayout",
  "numberOfMonths",
  "numerals",
  "noonSafe",
  "pagedNavigation",
  "required",
  "resetOnSelect",
  "reverseMonths",
  "reverseYears",
  "selected",
  "showOutsideDays",
  "showWeekNumber",
  "startMonth",
  "endMonth",
  "month",
  "timeZone",
  "weeksStartOn",
  "weekStartsOn",
] as const;

const legacyMonthBounds = {
  fromMonth: "startMonth",
  toMonth: "endMonth",
} as const;

const typeMap: Record<
  string,
  "boolean" | "number" | "string" | "locale" | "date"
> = {
  animate: "boolean",
  broadcastCalendar: "boolean",
  calendar: "string",
  captionLayout: "string",
  defaultMonth: "date",
  dir: "string",
  disabled: "string",
  disableNavigation: "boolean",
  endMonth: "date",
  firstDayOfWeek: "number",
  firstWeekContainsDate: "number",
  fixedWeeks: "boolean",
  fromMonth: "date",
  hideNavigation: "boolean",
  hideWeekdays: "boolean",
  ISOWeek: "boolean",
  locale: "locale",
  max: "number",
  min: "number",
  mode: "string",
  month: "date",
  navLayout: "string",
  numberOfMonths: "number",
  numerals: "string",
  noonSafe: "boolean",
  pagedNavigation: "boolean",
  required: "boolean",
  resetOnSelect: "boolean",
  reverseMonths: "boolean",
  reverseYears: "boolean",
  selected: "string",
  showOutsideDays: "boolean",
  showWeekNumber: "boolean",
  startMonth: "date",
  timeZone: "string",
  toMonth: "date",
  weeksStartOn: "number",
  weekStartsOn: "number",
};

export function parsePlaygroundSearch<TLocale extends LocaleLike>(
  search: string,
  availableLocales: readonly TLocale[],
) {
  const params = new URLSearchParams(search);
  const parsedProps: Record<string, unknown> = {};

  [...qsProps, ...Object.keys(legacyMonthBounds)].forEach((key) => {
    if (!params.has(key)) {
      return;
    }
    const normalizedKey =
      legacyMonthBounds[key as keyof typeof legacyMonthBounds] ?? key;
    if (normalizedKey in parsedProps) {
      return;
    }
    const value = params.get(key);
    try {
      switch (typeMap[key]) {
        case "boolean":
          parsedProps[normalizedKey] = true;
          break;
        case "number":
          if (value !== null) {
            parsedProps[normalizedKey] = Number(value);
          }
          break;
        case "string":
          parsedProps[normalizedKey] = value ?? "";
          break;
        case "locale":
          if (!value) break;
          parsedProps.locale = availableLocales.find(
            (locale) => locale.code === value,
          );
          break;
        case "date": {
          if (!value) break;
          const timestamp = Number(value);
          const parsedDate = new Date(
            Number.isNaN(timestamp) ? value : timestamp,
          );
          if (!Number.isNaN(parsedDate.getTime())) {
            parsedProps[normalizedKey] = parsedDate;
          }
          break;
        }
        default:
          break;
      }
    } catch (error) {
      console.error(`Error parsing query string key "${key}":`, error);
    }
  });

  return parsedProps;
}

export function buildPlaygroundQueryString(
  updatedProps: Record<string, unknown>,
) {
  const qs: string[] = [];

  Object.entries(updatedProps)
    .filter(([key, value]) => !!value && qsProps.includes(key as never))
    .forEach(([key, value]) => {
      if (key === "locale") {
        if (
          typeof value === "object" &&
          value !== null &&
          "code" in value &&
          typeof value.code === "string"
        ) {
          qs.push(`locale=${value.code}`);
        }
      } else if (value instanceof Date) {
        qs.push(`${key}=${value.getTime()}`);
      } else {
        qs.push(`${key}${value === true ? "" : `=${value}`}`);
      }
    });

  return qs.length === 0 ? "" : `?${qs.join("&")}`;
}
