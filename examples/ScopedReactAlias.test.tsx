import { createRequire } from "node:module";
import { DayPicker as BuddhistDayPicker } from "@daypicker/buddhist";
import {
  DayPicker,
  type MonthCaptionProps,
  useDayPicker as useScopedDayPicker,
} from "@daypicker/react";
import { es } from "@daypicker/react/locale";
import { es as esSubpath } from "@daypicker/react/locale/es";
import classNames from "@daypicker/react/style.module.css";
import React from "react";
import {
  DayPicker as LegacyDayPicker,
  useDayPicker as useLegacyDayPicker,
} from "react-day-picker";
import { render } from "@/test/render";
import "@daypicker/react/style.css";

const requirePackage = createRequire(__filename);

function CoInstalledMonthCaption(props: MonthCaptionProps) {
  const scopedContext = useScopedDayPicker();
  const legacyContext = useLegacyDayPicker();

  return (
    <span data-testid="co-installed-caption">
      {props.calendarMonth.date.getFullYear()}-{scopedContext.months.length}-
      {legacyContext.months.length}
    </span>
  );
}

test("the React package mirrors the DayPicker public surface", () => {
  const requiredPackage = requirePackage(
    "@daypicker/react",
  ) as typeof import("@daypicker/react");

  expect(requiredPackage.DayPicker).toBeDefined();
  expect(DayPicker).toBeDefined();
  expect(esSubpath).toBe(es);
  expect(classNames).toBeDefined();

  const scopedCalendar = render(
    <DayPicker month={new Date(2024, 0, 1)} mode="single" />,
  );
  expect(
    scopedCalendar.container.querySelector(".rdp-root"),
  ).toBeInTheDocument();
});

test("same-version scoped and legacy imports share the DayPicker implementation", () => {
  expect(DayPicker).toBe(LegacyDayPicker);

  const calendar = render(
    <DayPicker
      month={new Date(2024, 0, 1)}
      components={{ MonthCaption: CoInstalledMonthCaption }}
    />,
  );

  expect(calendar.getByTestId("co-installed-caption")).toHaveTextContent(
    "2024-1-1",
  );
});

test("calendar packages render through the React package boundary", () => {
  const calendar = render(
    <BuddhistDayPicker month={new Date(2024, 0, 1)} mode="single" />,
  );

  expect(calendar.container.querySelector(".rdp-root")).toBeInTheDocument();
});
