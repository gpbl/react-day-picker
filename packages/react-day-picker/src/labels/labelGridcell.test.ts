import { DateLib } from "../classes/DateLib.js";
import { de } from "../locale/de.js";

import { labelGridcell } from "./labelGridcell";

const day = new Date(2022, 10, 21);

test("return the label", () => {
  expect(labelGridcell(day)).toEqual("Monday, November 21, 2022");
});

describe("when the date library has no formatFullDate (older copy)", () => {
  const legacyDateLib = (
    options?: ConstructorParameters<typeof DateLib>[0],
  ) => {
    const dateLib = new DateLib(options);
    (dateLib as Partial<DateLib>).formatFullDate = undefined;
    return dateLib;
  };

  test("the default label falls back to PPPP instead of throwing", () => {
    expect(labelGridcell(day, undefined, undefined, legacyDateLib())).toEqual(
      "Monday, November 21st, 2022",
    );
  });

  test("a locale label falls back to PPPP instead of throwing", () => {
    const label = de.labels?.labelGridcell as typeof labelGridcell;
    expect(
      label(day, undefined, undefined, legacyDateLib({ locale: de })),
    ).toEqual("Montag, 21. November 2022");
  });
});
