import React, { act } from "react";

import {
  addDays,
  addMonths,
  addWeeks,
  addYears,
  endOfWeek,
  lastDayOfMonth,
  setDate,
  startOfWeek
} from "date-fns";

import {
  grid,
  nextButton,
  dateButton,
  activeElement,
  previousButton
} from "@/test/elements";
import { render } from "@/test/render";
import { user } from "@/test/user";

import { Keyboard } from "./Keyboard";

const today = new Date(2022, 5, 10);

beforeAll(() => jest.setSystemTime(today));
afterAll(() => jest.useRealTimers());

describe.each(["ltr", "rtl"])("when text direction is %s", (dir: string) => {
  beforeEach(() => {
    render(<Keyboard mode="single" dir={dir} />);
  });
  describe("when clicking the previous month button", () => {
    beforeEach(() => user.click(previousButton()));
    test("should display the previous month", () => {
      expect(grid("May 2022")).toBeInTheDocument();
    });
  });
  describe("when clicking the next month button", () => {
    beforeEach(() => user.click(nextButton()));

    test("should display the next month", () => {
      expect(grid("July 2022")).toBeInTheDocument();
    });
  });

  describe("when the first day is focused", () => {
    const day = setDate(today, 1);
    const nextDay = addDays(day, 1);
    const prevDay = addDays(day, -1);
    const nextMonth = addMonths(day, 1);
    const prevMonth = addMonths(day, -1);
    const nextYear = addYears(day, 1);
    const prevYear = addYears(day, -1);
    const prevWeekDay = addWeeks(day, -1);
    const nextWeekDay = addWeeks(day, 1);
    const startOfWeekDay = startOfWeek(day);
    const endOfWeekDay = endOfWeek(day);

    beforeEach(() => act(() => dateButton(day).focus()));
    test("the day button should be focused", () => {
      expect(activeElement()).toBe(dateButton(day));
    });
    describe("when the Arrow Left is pressed", () => {
      beforeEach(() => user.type(activeElement(), "{arrowleft}"));
      if (dir === "rtl") {
        test("should focus the next day", () => {
          expect(dateButton(nextDay)).toHaveFocus();
        });
      } else {
        test("should display the previous month", () => {
          expect(grid("May 2022")).toBeInTheDocument();
        });
        test("should focus the previous day", () => {
          expect(dateButton(prevDay)).toHaveFocus();
        });
      }
    });
    describe("when the Arrow Right is pressed", () => {
      beforeEach(() => user.type(activeElement(), "{arrowright}"));
      if (dir === "rtl") {
        test("should display the previous month", () => {
          expect(grid("May 2022")).toBeInTheDocument();
        });
        test("should focus the previous day", () => {
          expect(dateButton(prevDay)).toHaveFocus();
        });
      } else {
        test("should focus the next day", () => {
          expect(dateButton(nextDay)).toHaveFocus();
        });
      }
    });
    describe("when the Arrow Up is pressed", () => {
      beforeEach(() => user.type(activeElement(), "{arrowup}"));
      test("should display the previous month", () => {
        expect(grid("May 2022")).toBeInTheDocument();
      });
      test("should focus the day in the previous week", () => {
        expect(dateButton(prevWeekDay)).toHaveFocus();
      });
    });
    describe("when the Arrow Down is pressed", () => {
      beforeEach(() => user.type(activeElement(), "{arrowdown}"));
      test("should display the same month", () => {
        expect(grid("June 2022")).toBeInTheDocument();
      });
      test("should focus the day in the next week", () => {
        expect(dateButton(nextWeekDay)).toHaveFocus();
      });
    });
    describe("when Page Up is pressed", () => {
      beforeEach(() => {
        return user.type(activeElement(), "{pageup}");
      });
      it("should display the previous month", () => {
        expect(grid("May 2022")).toBeInTheDocument();
      });
      it("should focus the day in the previous month", () => {
        expect(dateButton(prevMonth)).toHaveFocus();
      });
    });
    describe("when Page Down is pressed", () => {
      beforeEach(() => user.type(activeElement(), "{pagedown}"));
      it("should display the next month", () => {
        expect(grid("July 2022")).toBeInTheDocument();
      });
      it("should focus the day in the next month", () => {
        expect(dateButton(nextMonth)).toHaveFocus();
      });
    });
    describe("when Shift + Page Up is pressed", () => {
      beforeEach(() => user.type(activeElement(), "{shift>}{pageup}"));
      it("should display the previous year", () => {
        expect(grid("June 2021")).toBeInTheDocument();
      });
      it("should focus the day in the previous year", () => {
        expect(dateButton(prevYear)).toHaveFocus();
      });
    });
    describe("when Shift + Page Down is pressed", () => {
      beforeEach(() => {
        return user.type(activeElement(), "{shift>}{pagedown}");
      });
      it("should display the next year", () => {
        expect(grid("June 2023")).toBeInTheDocument();
      });
      it("should focus the day in the next yeaer", () => {
        expect(dateButton(nextYear)).toHaveFocus();
      });
    });
    describe("when Home is pressed", () => {
      beforeEach(() => user.type(activeElement(), "{home}"));
      it("should focus the start of the week", () => {
        expect(dateButton(startOfWeekDay)).toHaveFocus();
      });
    });
    describe("when End is pressed", () => {
      beforeEach(() => user.type(activeElement(), "{end}"));
      it("should focus the end of the week", () => {
        expect(dateButton(endOfWeekDay)).toHaveFocus();
      });
    });
  });

  describe("when the last day is focused", () => {
    const day = lastDayOfMonth(today);
    const nextDay = addDays(day, 1);
    const prevDay = addDays(day, -1);

    beforeEach(() => {
      return act(() => dateButton(day).focus());
    });
    describe("when the Arrow Right is pressed", () => {
      beforeEach(() => user.type(activeElement(), "{arrowright}"));
      if (dir === "rtl") {
        test("should focus the previous day", () => {
          expect(dateButton(prevDay)).toHaveFocus();
        });
      } else {
        test("should display the next month", () => {
          expect(grid("July 2022")).toBeInTheDocument();
        });
        test("should focus the next day", () => {
          const nextDay = addDays(day, 1);
          expect(dateButton(nextDay)).toHaveFocus();
        });
      }
    });
    describe("when the Arrow Left is pressed", () => {
      beforeEach(() => user.type(activeElement(), "{arrowleft}"));
      if (dir === "rtl") {
        test("should display the next month", () => {
          expect(grid("July 2022")).toBeInTheDocument();
        });
        test("should focus the next day", () => {
          expect(dateButton(nextDay)).toHaveFocus();
        });
      } else {
        test("should display the same month", () => {
          expect(grid("June 2022")).toBeInTheDocument();
        });
        test("should focus the previous day", () => {
          const prevDay = addDays(day, -1);
          expect(dateButton(prevDay)).toHaveFocus();
        });
      }
    });
    describe("when the Arrow Up is pressed", () => {
      beforeEach(() => user.type(activeElement(), "{arrowup}"));
      test("should display the same month", () => {
        expect(grid("June 2022")).toBeInTheDocument();
      });
      test("should focus the day in the previous week", () => {
        const prevDay = addWeeks(day, -1);
        expect(dateButton(prevDay)).toHaveFocus();
      });
    });
    describe("when the Arrow Down is pressed", () => {
      beforeEach(() => user.type(activeElement(), "{arrowdown}"));
      test("should display the next month", () => {
        expect(grid("July 2022")).toBeInTheDocument();
      });
      test("should focus the day in the next week", () => {
        const nextDay = addWeeks(day, 1);
        expect(dateButton(nextDay)).toHaveFocus();
      });
    });
  });
});

describe("when week is set to start on a Monday", () => {
  const day = setDate(today, 10);
  const startOfWeekDay = startOfWeek(day, { weekStartsOn: 1 });
  const endOfWeekDay = endOfWeek(day, { weekStartsOn: 1 });

  beforeEach(() => {
    render(<Keyboard mode="single" weekStartsOn={1} />);
    act(() => dateButton(day).focus());
  });

  describe("when Home is pressed", () => {
    beforeEach(() => user.type(activeElement(), "{home}"));
    it("should focus the start of the week being Monday", () => {
      expect(dateButton(startOfWeekDay)).toHaveFocus();
    });
  });
  describe("when End is pressed", () => {
    beforeEach(() => user.type(activeElement(), "{end}"));
    it("should focus the end of the week being Sunday", () => {
      expect(dateButton(endOfWeekDay)).toHaveFocus();
    });
  });
});
