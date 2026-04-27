import { createRequire } from "node:module";
import { DayPicker as BuddhistDayPicker } from "@daypicker/buddhist";
import { DayPicker } from "@daypicker/react";
import { es } from "@daypicker/react/locale";
import { es as esSubpath } from "@daypicker/react/locale/es";
import classNames from "@daypicker/react/style.module.css";
import React from "react";
import { render } from "@/test/render";
import "@daypicker/react/style.css";

const requirePackage = createRequire(__filename);

test("the scoped React package mirrors the DayPicker public surface", () => {
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

test("calendar packages render through the scoped React package boundary", () => {
  const calendar = render(
    <BuddhistDayPicker month={new Date(2024, 0, 1)} mode="single" />,
  );

  expect(calendar.container.querySelector(".rdp-root")).toBeInTheDocument();
});
