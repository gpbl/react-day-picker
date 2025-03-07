import React from "react";

import { renderHook } from "@testing-library/react";

import { Animation, DayFlag, SelectionState, UI } from "./UI";
import { CalendarDay } from "./classes/CalendarDay";
import { CalendarMonth } from "./classes/CalendarMonth";
import { DayPickerProps } from "./types/props";
import { Modifiers } from "./types/shared";
import {
  DayPickerContext,
  dayPickerContext,
  useDayPicker
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
    getModifiers: jest.fn((day: CalendarDay) => ({}) as Modifiers),
    selected: undefined,
    select: jest.fn(),
    isSelected: jest.fn((date: Date) => false),
    components: {
      Button: jest.fn(),
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
      YearsDropdown: jest.fn()
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
      [Animation.weeks_enter_after]: "",
      [Animation.weeks_prev_exit]: "",
      [Animation.weeks_prev_enter]: "",
      [Animation.weeks_next_exit]: "",
      [Animation.caption_next_enter]: "",
      [Animation.caption_prev_exit]: "",
      [Animation.caption_prev_enter]: "",
      [Animation.caption_next_exit]: ""
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
      labelDay: jest.fn(),
      labelWeekday: jest.fn(),
      labelWeekNumber: jest.fn(),
      labelWeekNumberHeader: jest.fn()
    },
    formatters: {
      formatCaption: jest.fn(),
      formatDay: jest.fn(),
      formatMonthDropdown: jest.fn(),
      formatMonthCaption: jest.fn(),
      formatWeekNumber: jest.fn(),
      formatWeekNumberHeader: jest.fn(),
      formatWeekdayName: jest.fn(),
      formatYearDropdown: jest.fn(),
      formatYearCaption: jest.fn()
    },
    dayPickerProps: {
      mode: "single",
      required: false
    } as DayPickerProps
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
