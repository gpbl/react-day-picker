import { defaultDateLib } from "../classes/index.js";

import { getBroadcastWeeksInMonth } from "./getBroadcastWeeksInMonth";

describe("getBroadcastWeeksInMonth", () => {
  test.each`
    month                    | expectedWeeks
    ${new Date(2023, 0, 1)}  | ${5}
    ${new Date(2023, 1, 1)}  | ${4}
    ${new Date(2023, 2, 1)}  | ${4}
    ${new Date(2023, 3, 1)}  | ${5}
    ${new Date(2023, 4, 1)}  | ${4}
    ${new Date(2023, 5, 1)}  | ${4}
    ${new Date(2023, 6, 1)}  | ${5}
    ${new Date(2023, 7, 1)}  | ${4}
    ${new Date(2023, 8, 1)}  | ${4}
    ${new Date(2023, 9, 1)}  | ${5}
    ${new Date(2023, 10, 1)} | ${4}
    ${new Date(2023, 11, 1)} | ${5}
  `("returns $expectedWeeks weeks for $month", ({ month, expectedWeeks }) => {
    expect(getBroadcastWeeksInMonth(month, defaultDateLib)).toBe(expectedWeeks);
  });
});
