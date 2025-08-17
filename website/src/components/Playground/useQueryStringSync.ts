import { useHistory, useLocation } from "@docusaurus/router";
import { useEffect, useMemo, useState } from "react";
import type { DayPickerProps } from "react-day-picker";
import * as locales from "react-day-picker/locale";

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
  "fromMonth",
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
  "pagedNavigation",
  "required",
  "reverseMonths",
  "reverseYears",
  "selected",
  "showOutsideDays",
  "showWeekNumber",
  "timeZone",
  "toMonth",
  "weeksStartOn",
  "weekStartsOn",
];

export type DayPickerPropsWithCalendar = DayPickerProps & {
  calendar?: "gregorian" | "persian";
};

export function useQueryStringSync(basePath: string = "/playground") {
  const history = useHistory();
  const location = useLocation();

  const parseQueryString = (search: string): DayPickerPropsWithCalendar => {
    const params = new URLSearchParams(search);
    const parsedProps: DayPickerPropsWithCalendar = {};
    const typeMap: Record<string, "boolean" | "number" | "string" | "locale"> =
      {
        animate: "boolean",
        broadcastCalendar: "boolean",
        calendar: "string",
        captionLayout: "string",
        defaultMonth: "string",
        dir: "string",
        disabled: "string",
        disableNavigation: "boolean",
        firstDayOfWeek: "number",
        firstWeekContainsDate: "number",
        fixedWeeks: "boolean",
        fromMonth: "string",
        hideNavigation: "boolean",
        hideWeekdays: "boolean",
        ISOWeek: "boolean",
        locale: "locale",
        max: "number",
        min: "number",
        mode: "string",
        navLayout: "string",
        numberOfMonths: "number",
        numerals: "string",
        pagedNavigation: "boolean",
        required: "boolean",
        reverseMonths: "boolean",
        reverseYears: "boolean",
        selected: "string",
        showOutsideDays: "boolean",
        showWeekNumber: "boolean",
        timeZone: "string",
        toMonth: "string",
        weeksStartOn: "number",
        weekStartsOn: "number",
      };

    qsProps.forEach((key) => {
      if (params.has(key)) {
        const value = params.get(key) || true;
        try {
          switch (typeMap[key]) {
            case "boolean":
              parsedProps[key as keyof DayPickerPropsWithCalendar] = !!key;
              break;
            case "number":
              parsedProps[key as keyof DayPickerPropsWithCalendar] =
                Number(value);
              break;
            case "string":
              parsedProps[key as keyof DayPickerPropsWithCalendar] =
                value || "";
              break;
            case "locale":
              parsedProps.locale = Object.values(locales).find(
                (locale) => locale.code === value,
              );
              break;
            default:
              break;
          }
        } catch (error) {
          console.error(`Error parsing query string key "${key}":`, error);
        }
      }
    });
    return parsedProps;
  };

  const initialProps: DayPickerProps = parseQueryString(location.search);

  const [props, setProps] = useState<DayPickerPropsWithCalendar>(initialProps);

  const updateQueryString = useMemo(
    () => (updatedProps: DayPickerProps) => {
      const qs: string[] = [];
      Object.entries(updatedProps)
        .filter(([key, value]) => !!value && qsProps.includes(key))
        .forEach(([key, value]) => {
          if (key === "locale") {
            if (!value) return;
            qs.push(`locale=${value.code}`);
          } else {
            qs.push(`${key}${value === true ? "" : `=${value}`}`);
          }
        });

      const newQueryString = qs.length === 0 ? "" : `?${qs.join("&")}`;
      if (location.search !== newQueryString) {
        history.replace(basePath + newQueryString);
      }
    },
    [history, location.search, basePath],
  );

  useEffect(() => {
    updateQueryString(props);
  }, [props, updateQueryString]);

  return { props, setProps };
}
