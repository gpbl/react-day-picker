import { CalendarDay } from "../classes";
import { defaultDateLib } from "../classes/DateLib";
import type { DayPickerProps, MoveFocusBy, MoveFocusDir } from "../types";

import { getNextFocus } from "./getNextFocus";

const props: Pick<
  DayPickerProps,
  "disabled" | "hidden" | "startMonth" | "endMonth"
> = {
  disabled: [],
  hidden: [],
};

test("should return `undefined` if `attempt` exceeds 365", () => {
  const focusedDay = new CalendarDay(
    new Date(2020, 0, 1),
    new Date(2020, 0, 1),
    defaultDateLib,
  );
  const moveBy: MoveFocusBy = "day";
  const moveDir: MoveFocusDir = "after";
  const result = getNextFocus(
    moveBy,
    moveDir,
    focusedDay,
    undefined,
    undefined,
    props,
    defaultDateLib,
    366,
  );
  expect(result).toBeUndefined();
});

test("should return the focus date if it is not disabled or hidden", () => {
  const focusedDay = new CalendarDay(
    new Date(2020, 0, 1),
    new Date(2020, 0, 1),
    defaultDateLib,
  );
  const expectedDate = new Date(2020, 0, 2);
  const result = getNextFocus(
    "day",
    "after",
    focusedDay,
    undefined,
    undefined,
    props,
    defaultDateLib,
  );
  expect(result?.date).toEqual(expectedDate);
});

test("should return the next focus date if it is disabled", () => {
  const focusedDay = new CalendarDay(
    new Date(2020, 0, 1),
    new Date(2020, 0, 1),
    defaultDateLib,
  );
  const disabledDate = new Date(2020, 0, 2);
  const expectedDate = new Date(2020, 0, 3);
  const result = getNextFocus(
    "day",
    "after",
    focusedDay,
    undefined,
    undefined,
    {
      ...props,
      disabled: [disabledDate],
    },
    defaultDateLib,
  );
  expect(result?.date).toEqual(expectedDate);
});

test("should return the next focus date if it is hidden", () => {
  const focusedDay = new CalendarDay(
    new Date(2020, 0, 1),
    new Date(2020, 0, 1),
    defaultDateLib,
  );
  const hiddenDate = new Date(2020, 0, 2);
  const expectedDate = new Date(2020, 0, 3);
  const result = getNextFocus(
    "day",
    "after",
    focusedDay,
    undefined,
    undefined,
    {
      ...props,
      hidden: [hiddenDate],
    },
    defaultDateLib,
  );
  expect(result?.date).toEqual(expectedDate);
});

describe("when the target day is disabled", () => {
  const weekends = { dayOfWeek: [0, 6] };

  function getNextFocusDate(
    moveBy: MoveFocusBy,
    moveDir: MoveFocusDir,
    date: Date,
    disabled: DayPickerProps["disabled"],
    navStart?: Date,
    navEnd?: Date,
  ) {
    return getNextFocus(
      moveBy,
      moveDir,
      new CalendarDay(date, date, defaultDateLib),
      navStart,
      navEnd,
      { ...props, disabled },
      defaultDateLib,
    )?.date;
  }

  test("moving by month focuses the nearest focusable day in that month", () => {
    // Saturday 14 February 2026 is disabled
    expect(
      getNextFocusDate("month", "after", new Date(2026, 0, 14), weekends),
    ).toEqual(new Date(2026, 1, 13));
    // Saturday 14 March 2026 is disabled
    expect(
      getNextFocusDate("month", "before", new Date(2026, 3, 14), weekends),
    ).toEqual(new Date(2026, 2, 13));
  });

  test("moving by month does not leave the target month", () => {
    // Saturday 28 February 2026 is disabled
    expect(
      getNextFocusDate("month", "after", new Date(2026, 0, 31), weekends),
    ).toEqual(new Date(2026, 1, 27));
  });

  test("moving by month prefers the move direction between equally near days", () => {
    const disabled = [new Date(2026, 1, 14)];
    expect(
      getNextFocusDate("month", "after", new Date(2026, 0, 14), disabled),
    ).toEqual(new Date(2026, 1, 15));
    expect(
      getNextFocusDate("month", "before", new Date(2026, 2, 14), disabled),
    ).toEqual(new Date(2026, 1, 13));
  });

  test("moving by month skips months without focusable days", () => {
    const disabled = { from: new Date(2026, 1, 1), to: new Date(2027, 1, 28) };
    expect(
      getNextFocusDate("month", "after", new Date(2026, 0, 14), disabled),
    ).toEqual(new Date(2027, 2, 14));
    expect(
      getNextFocusDate("month", "before", new Date(2027, 2, 14), disabled),
    ).toEqual(new Date(2026, 0, 14));
  });

  test("moving by month returns `undefined` when no later day is focusable", () => {
    const disabled = { after: new Date(2026, 0, 20) };
    expect(
      getNextFocusDate("month", "after", new Date(2026, 0, 14), disabled),
    ).toBeUndefined();
  });

  test("moving by month stays within the navigation end", () => {
    // Saturday 28 February 2026 is disabled and February is the last month
    expect(
      getNextFocusDate(
        "month",
        "after",
        new Date(2026, 1, 14),
        weekends,
        undefined,
        new Date(2026, 1, 28),
      ),
    ).toEqual(new Date(2026, 1, 27));
  });

  test("moving by year focuses the nearest focusable day in that month", () => {
    // Saturday 16 January 2027 is disabled
    expect(
      getNextFocusDate("year", "after", new Date(2026, 0, 16), weekends),
    ).toEqual(new Date(2027, 0, 15));
  });

  test("moving to the start of the week focuses its first focusable day", () => {
    expect(
      getNextFocusDate(
        "startOfWeek",
        "before",
        new Date(2026, 0, 14),
        weekends,
      ),
    ).toEqual(new Date(2026, 0, 12));
  });

  test("moving to the end of the week focuses its last focusable day", () => {
    // The end of the week is at the last millisecond of the day
    expect(
      getNextFocusDate(
        "endOfWeek",
        "after",
        new Date(2026, 0, 14),
        weekends,
      )?.toDateString(),
    ).toBe(new Date(2026, 0, 16).toDateString());
  });

  test("moving to the start of the week stays within the navigation start", () => {
    // 1 January 2026 is a Thursday and the first navigable day
    const disabled = [new Date(2026, 0, 1)];
    expect(
      getNextFocusDate(
        "startOfWeek",
        "before",
        new Date(2026, 0, 2),
        disabled,
        new Date(2026, 0, 1),
      ),
    ).toEqual(new Date(2026, 0, 2));
  });

  test("moving within a week without focusable days returns `undefined`", () => {
    const disabled = { from: new Date(2026, 0, 11), to: new Date(2026, 0, 17) };
    expect(
      getNextFocusDate(
        "startOfWeek",
        "before",
        new Date(2026, 0, 14),
        disabled,
      ),
    ).toBeUndefined();
    expect(
      getNextFocusDate("endOfWeek", "after", new Date(2026, 0, 14), disabled),
    ).toBeUndefined();
  });

  test("moving to the start or end of a broadcast week does not search the broadcast month", () => {
    // With broadcastCalendar, these moves reach the broadcast month bounds:
    // 29 December 2025 and 25 January 2026 for 14 January 2026
    const disabled = [new Date(2025, 11, 29), new Date(2026, 0, 25)];
    const focusedDay = new CalendarDay(
      new Date(2026, 0, 14),
      new Date(2026, 0, 14),
      defaultDateLib,
    );
    const broadcastProps = { ...props, disabled, broadcastCalendar: true };
    expect(
      getNextFocus(
        "startOfWeek",
        "before",
        focusedDay,
        undefined,
        undefined,
        broadcastProps,
        defaultDateLib,
      )?.date,
    ).not.toEqual(new Date(2025, 11, 30));
    expect(
      getNextFocus(
        "endOfWeek",
        "after",
        focusedDay,
        undefined,
        undefined,
        broadcastProps,
        defaultDateLib,
      )?.date,
    ).not.toEqual(new Date(2026, 0, 24));
  });
});
