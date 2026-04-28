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
  const displayedMonth = new Date(2024, 0, 1);
  const previousMonth = new Date(2023, 11, 1);
  const nextMonth = new Date(2024, 1, 1);
  const selectedDate = new Date(2024, 0, 15);

  const mockContextValue: DayPickerContext<{
    required: false;
    mode: "single";
  }> = {
    months: [new CalendarMonth(displayedMonth, [])],
    nextMonth,
    previousMonth,
    goToMonth: jest.fn(),
    getModifiers: jest.fn((_day: CalendarDay) => ({}) as Modifiers),
    selected: selectedDate,
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

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return the context value when used within a DayPicker provider", () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <dayPickerContext.Provider value={mockContextValue}>
        {children}
      </dayPickerContext.Provider>
    );

    const { result } = renderHook(() => useDayPicker(), { wrapper });
    expect(result.current).toEqual(mockContextValue);
  });

  it("keeps public calendar context values Date-shaped", () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <dayPickerContext.Provider value={mockContextValue}>
        {children}
      </dayPickerContext.Provider>
    );

    const { result } = renderHook(() => useDayPicker(), { wrapper });
    const context = result.current;
    const targetMonth = new Date(2024, 2, 1);

    expect(context.months[0].date).toBe(displayedMonth);
    expect(context.months[0].date).toBeInstanceOf(Date);
    expect(context.nextMonth).toBe(nextMonth);
    expect(context.nextMonth).toBeInstanceOf(Date);
    expect(context.previousMonth).toBe(previousMonth);
    expect(context.previousMonth).toBeInstanceOf(Date);
    expect(context.selected).toBe(selectedDate);
    expect(context.selected).toBeInstanceOf(Date);

    context.goToMonth(targetMonth);
    expect(mockContextValue.goToMonth).toHaveBeenCalledWith(targetMonth);

    context.isSelected?.(selectedDate);
    expect(mockContextValue.isSelected).toHaveBeenCalledWith(selectedDate);
  });
});
