import { renderHook } from "@testing-library/react";
import React from "react";
import type { CalendarDay } from "./classes/CalendarDay";
import { CalendarMonth } from "./classes/CalendarMonth";
import type { DayPickerProps } from "./types/props";
import type { Modifiers } from "./types/shared";
import { Animation, DayFlag, SelectionState, UI } from "./UI";
import {
  type DayPickerContext,
  dayPickerContext,
  useDayPicker,
} from "./useDayPicker";

describe("useDayPicker", () => {
  const mockContextValue: DayPickerContext<{
    required: false;
    mode: "single";
  }> = {
    months: [new CalendarMonth(new Date(), [])],
    nextMonth: new Date(),
    previousMonth: new Date(),
    goToMonth: jest.fn(),
    getModifiers: jest.fn((_day: CalendarDay) => ({}) as Modifiers),
    selected: undefined,
    select: jest.fn(),
    isSelected: jest.fn((_date: Date) => false),
    components: {
      Chevron: jest.fn(),
      CaptionLabel: jest.fn(),
      Day: jest.fn(),
      DayButton: jest.fn(),
      Dropdown: jest.fn(),
      DropdownNav: jest.fn(),
      Footer: jest.fn(),
      Month: jest.fn(),
      MonthCaption: jest.fn(),
      MonthGrid: jest.fn(),
      Months: jest.fn(),
      Nav: jest.fn(),
      Option: jest.fn(),
      PreviousMonthButton: jest.fn(),
      NextMonthButton: jest.fn(),
      Root: jest.fn(),
      Select: jest.fn(),
      Weeks: jest.fn(),
      Week: jest.fn(),
      Weekday: jest.fn(),
      Weekdays: jest.fn(),
      WeekNumber: jest.fn(),
      WeekNumberHeader: jest.fn(),
      MonthsDropdown: jest.fn(),
      YearsDropdown: jest.fn(),
    },
    classNames: {
      [UI.Root]: "",
      [UI.Chevron]: "",
      [UI.Day]: "",
      [UI.DayButton]: "",
      [UI.CaptionLabel]: "",
      [UI.Dropdowns]: "",
      [UI.Dropdown]: "",
      [UI.DropdownRoot]: "",
      [UI.Footer]: "",
      [UI.MonthGrid]: "",
      [UI.MonthCaption]: "",
      [UI.MonthsDropdown]: "",
      [UI.Month]: "",
      [UI.Months]: "",
      [UI.Nav]: "",
      [UI.NextMonthButton]: "",
      [UI.PreviousMonthButton]: "",
      [UI.Week]: "",
      [UI.Weeks]: "",
      [UI.Weekday]: "",
      [UI.Weekdays]: "",
      [UI.WeekNumber]: "",
      [UI.WeekNumberHeader]: "",
      [UI.YearsDropdown]: "",
      [SelectionState.range_end]: "",
      [SelectionState.range_middle]: "",
      [SelectionState.range_start]: "",
      [SelectionState.selected]: "",
      [DayFlag.disabled]: "",
      [DayFlag.hidden]: "",
      [DayFlag.outside]: "",
      [DayFlag.focused]: "",
      [DayFlag.today]: "",
      [Animation.weeks_after_enter]: "",
      [Animation.weeks_before_exit]: "",
      [Animation.weeks_before_enter]: "",
      [Animation.weeks_after_exit]: "",
      [Animation.caption_after_enter]: "",
      [Animation.caption_before_exit]: "",
      [Animation.caption_before_enter]: "",
      [Animation.caption_after_exit]: "",
    },
    styles: {},
    labels: {
      labelNav: jest.fn(),
      labelGrid: jest.fn(),
      labelGridcell: jest.fn(),
      labelMonthDropdown: jest.fn(),
      labelYearDropdown: jest.fn(),
      labelNext: jest.fn(),
      labelPrevious: jest.fn(),
      labelDayButton: jest.fn(),
      labelWeekday: jest.fn(),
      labelWeekNumber: jest.fn(),
      labelWeekNumberHeader: jest.fn(),
    },
    formatters: {
      formatCaption: jest.fn(),
      formatDay: jest.fn(),
      formatMonthDropdown: jest.fn(),
      formatWeekNumber: jest.fn(),
      formatWeekNumberHeader: jest.fn(),
      formatWeekdayName: jest.fn(),
      formatYearDropdown: jest.fn(),
    },
    dayPickerProps: {
      mode: "single",
      required: false,
    } as DayPickerProps,
  };

  it("should return the context value when used within a DayPicker provider", () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <dayPickerContext.Provider value={mockContextValue}>
        {children}
      </dayPickerContext.Provider>
    );

    const { result } = renderHook(() => useDayPicker(), { wrapper });
    expect(result.current).toEqual(mockContextValue);
  });
});
