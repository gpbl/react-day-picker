import { act } from "@testing-library/react";
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
  focusedElement,
  grid,
  gridcell,
  nextButton,
  prevButton,
  renderApp,
  user,
  mockDate
} from "../test-v8";

import { Keyboard } from "./Keyboard";

const today = new Date(2022, 5, 10);
mockDate(today);

describe.each(["ltr", "rtl"])("when text direction is %s", (dir: string) => {
  beforeEach(() => {
    renderApp(<Keyboard mode="single" dir={dir} />);
  });
  describe("when clicking the previous month button", () => {
    beforeEach(() => act(() => user.click(prevButton())));
    test("should display the previous month", () => {
      expect(grid("May 2022")).toBeInTheDocument();
    });
  });
  describe("when clicking the next month button", () => {
    beforeEach(() => act(() => user.click(nextButton())));

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

    beforeEach(() => act(() => gridcell(day).focus()));
    test("the day button should be focused", () => {
      expect(focusedElement()).toBe(gridcell(day));
    });
    describe("when the Arrow Left is pressed", () => {
      beforeEach(() => act(() => user.type(focusedElement(), "{arrowleft}")));
      if (dir === "rtl") {
        test("should focus the next day", () => {
          expect(gridcell(nextDay)).toHaveFocus();
        });
      } else {
        test("should display the previous month", () => {
          expect(grid("May 2022")).toBeInTheDocument();
        });
        test("should focus the previous day", () => {
          expect(gridcell(prevDay)).toHaveFocus();
        });
      }
    });
    describe("when the Arrow Right is pressed", () => {
      beforeEach(() => act(() => user.type(focusedElement(), "{arrowright}")));
      if (dir === "rtl") {
        test("should display the previous month", () => {
          expect(grid("May 2022")).toBeInTheDocument();
        });
        test("should focus the previous day", () => {
          expect(gridcell(prevDay)).toHaveFocus();
        });
      } else {
        test("should focus the next day", () => {
          expect(gridcell(nextDay)).toHaveFocus();
        });
      }
    });
    describe("when the Arrow Up is pressed", () => {
      beforeEach(() => act(() => user.type(focusedElement(), "{arrowup}")));
      test("should display the previous month", () => {
        expect(grid("May 2022")).toBeInTheDocument();
      });
      test("should focus the day in the previous week", () => {
        expect(gridcell(prevWeekDay)).toHaveFocus();
      });
    });
    describe("when the Arrow Down is pressed", () => {
      beforeEach(() => act(() => user.type(focusedElement(), "{arrowdown}")));
      test("should display the same month", () => {
        expect(grid("June 2022")).toBeInTheDocument();
      });
      test("should focus the day in the next week", () => {
        expect(gridcell(nextWeekDay)).toHaveFocus();
      });
    });
    describe("when Page Up is pressed", () => {
      beforeEach(() => {
        return act(() => user.type(focusedElement(), "{pageup}"));
      });
      it("should display the previous month", () => {
        expect(grid("May 2022")).toBeInTheDocument();
      });
      it("should focus the day in the previous month", () => {
        expect(gridcell(prevMonth)).toHaveFocus();
      });
    });
    describe("when Page Down is pressed", () => {
      beforeEach(() => act(() => user.type(focusedElement(), "{pagedown}")));
      it("should display the next month", () => {
        expect(grid("July 2022")).toBeInTheDocument();
      });
      it("should focus the day in the next month", () => {
        expect(gridcell(nextMonth)).toHaveFocus();
      });
    });
    describe("when Shift + Page Up is pressed", () => {
      beforeEach(() =>
        act(() => user.type(focusedElement(), "{shift>}{pageup}"))
      );
      it("should display the previous year", () => {
        expect(grid("June 2021")).toBeInTheDocument();
      });
      it("should focus the day in the previous year", () => {
        expect(gridcell(prevYear)).toHaveFocus();
      });
    });
    describe("when Shift + Page Down is pressed", () => {
      beforeEach(() =>
        act(() => user.type(focusedElement(), "{shift>}{pagedown}"))
      );
      it("should display the next year", () => {
        expect(grid("June 2023")).toBeInTheDocument();
      });
      it("should focus the day in the next yeaer", () => {
        expect(gridcell(nextYear)).toHaveFocus();
      });
    });
    describe("when Home is pressed", () => {
      beforeEach(() => act(() => user.type(focusedElement(), "{home}")));
      it("should focus the start of the week", () => {
        expect(gridcell(startOfWeekDay)).toHaveFocus();
      });
    });
    describe("when End is pressed", () => {
      beforeEach(() => act(() => user.type(focusedElement(), "{end}")));
      it("should focus the end of the week", () => {
        expect(gridcell(endOfWeekDay)).toHaveFocus();
      });
    });
  });

  describe("when the last day is focused", () => {
    const day = lastDayOfMonth(today);
    const nextDay = addDays(day, 1);
    const prevDay = addDays(day, -1);

    beforeEach(() => act(() => gridcell(day).focus()));
    describe("when the Arrow Right is pressed", () => {
      beforeEach(() => act(() => user.type(focusedElement(), "{arrowright}")));
      if (dir === "rtl") {
        test("should focus the previous day", () => {
          expect(gridcell(prevDay)).toHaveFocus();
        });
      } else {
        test("should display the next month", () => {
          expect(grid("July 2022")).toBeInTheDocument();
        });
        test("should focus the next day", () => {
          const nextDay = addDays(day, 1);
          expect(gridcell(nextDay)).toHaveFocus();
        });
      }
    });
    describe("when the Arrow Left is pressed", () => {
      beforeEach(() => act(() => user.type(focusedElement(), "{arrowleft}")));
      if (dir === "rtl") {
        test("should display the next month", () => {
          expect(grid("July 2022")).toBeInTheDocument();
        });
        test("should focus the next day", () => {
          expect(gridcell(nextDay)).toHaveFocus();
        });
      } else {
        test("should display the same month", () => {
          expect(grid("June 2022")).toBeInTheDocument();
        });
        test("should focus the previous day", () => {
          const prevDay = addDays(day, -1);
          expect(gridcell(prevDay)).toHaveFocus();
        });
      }
    });
    describe("when the Arrow Up is pressed", () => {
      beforeEach(() => act(() => user.type(focusedElement(), "{arrowup}")));
      test("should display the same month", () => {
        expect(grid("June 2022")).toBeInTheDocument();
      });
      test("should focus the day in the previous week", () => {
        const prevDay = addWeeks(day, -1);
        expect(gridcell(prevDay)).toHaveFocus();
      });
    });
    describe("when the Arrow Down is pressed", () => {
      beforeEach(() => act(() => user.type(focusedElement(), "{arrowdown}")));
      test("should display the next month", () => {
        expect(grid("July 2022")).toBeInTheDocument();
      });
      test("should focus the day in the next week", () => {
        const nextDay = addWeeks(day, 1);
        expect(gridcell(nextDay)).toHaveFocus();
      });
    });
  });
});

describe("when week is set to start on a Monday", () => {
  const day = setDate(today, 10);
  const startOfWeekDay = startOfWeek(day, { weekStartsOn: 1 });
  const endOfWeekDay = endOfWeek(day, { weekStartsOn: 1 });

  beforeEach(() => {
    renderApp(<Keyboard mode="single" weekStartsOn={1} />);
    act(() => gridcell(day).focus());
  });

  describe("when Home is pressed", () => {
    beforeEach(() => act(() => user.type(focusedElement(), "{home}")));
    it("should focus the start of the week being Monday", () => {
      expect(gridcell(startOfWeekDay)).toHaveFocus();
    });
  });
  describe("when End is pressed", () => {
    beforeEach(() => act(() => user.type(focusedElement(), "{end}")));
    it("should focus the end of the week being Sunday", () => {
      expect(gridcell(endOfWeekDay)).toHaveFocus();
    });
  });
});
