import { DayFlag } from "./UI";
import { CalendarDay, defaultDateLib } from "./classes/index";
import { useGetModifiers } from "./useGetModifiers";

const dateLib = defaultDateLib;

const displayedMonth = new Date(2022, 10, 1);

const date1 = new Date(2022, 9, 30);
const date2 = new Date(2022, 10, 10);
const date3 = new Date(2022, 10, 11);
const date4 = new Date(2022, 10, 12);
const date5 = new Date(2022, 10, 13);
const date6 = new Date(2022, 10, 14);
const date7 = new Date(2022, 11, 1);

const day1 = new CalendarDay(date1, displayedMonth);
const day2 = new CalendarDay(date2, displayedMonth);
const day3 = new CalendarDay(date3, displayedMonth);
const day4 = new CalendarDay(date4, displayedMonth);
const day5 = new CalendarDay(date5, displayedMonth);
const day6 = new CalendarDay(date6, displayedMonth);
const day7 = new CalendarDay(date7, displayedMonth);

const days: CalendarDay[] = [day1, day2, day3, day4, day5, day6, day7];

const props = {
  disabled: [date2],
  hidden: [date3],
  modifiers: {
    custom: [date4],
    selected: [date6]
  },
  selected: date7,
  showOutsideDays: true,
  today: date5,
  timeZone: "UTC"
};

describe("useGetModifiers", () => {
  describe("default props", () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const getModifiers = useGetModifiers(days, props, dateLib);

    test("return the modifiers for a given day", () => {
      const modifiers = getModifiers(day2);

      expect(modifiers[DayFlag.focused]).toBe(false);
      expect(modifiers[DayFlag.disabled]).toBe(true);
      expect(modifiers[DayFlag.hidden]).toBe(false);
      expect(modifiers[DayFlag.outside]).toBe(false);
      expect(modifiers[DayFlag.today]).toBe(false);
      expect(modifiers.custom).toBe(false);
    });

    test("return the custom modifiers for a given day", () => {
      const modifiers = getModifiers(day4);
      expect(modifiers.custom).toBe(true);
    });

    test("return the custom `selected` modifier for a given day", () => {
      const modifiers = getModifiers(day6);
      expect(modifiers.selected).toBe(true);
    });

    test("return the today modifier for a given day", () => {
      const modifiers = getModifiers(day5);

      expect(modifiers[DayFlag.today]).toBe(true);
      expect(modifiers[DayFlag.focused]).toBe(false);
      expect(modifiers[DayFlag.disabled]).toBe(false);
      expect(modifiers[DayFlag.outside]).toBe(false);
      expect(modifiers[DayFlag.hidden]).toBe(false);
    });

    test("return the hidden modifier for a given day", () => {
      const modifiers = getModifiers(day3);

      expect(modifiers[DayFlag.hidden]).toBe(true);
      expect(modifiers[DayFlag.focused]).toBe(false);
      expect(modifiers[DayFlag.disabled]).toBe(false);
      expect(modifiers[DayFlag.outside]).toBe(false);
      expect(modifiers[DayFlag.today]).toBe(false);
    });

    test("return the modifiers for a given day before the displayed month", () => {
      const modifiers = getModifiers(day1);

      expect(modifiers[DayFlag.focused]).toBe(false);
      expect(modifiers[DayFlag.disabled]).toBe(false);
      expect(modifiers[DayFlag.hidden]).toBe(false);
      expect(modifiers[DayFlag.outside]).toBe(true);
      expect(modifiers[DayFlag.today]).toBe(false);
      expect(modifiers.selected).toBe(false);
    });

    test("return the modifiers for a given day after the displayed month", () => {
      const modifiers = getModifiers(day7);

      expect(modifiers[DayFlag.focused]).toBe(false);
      expect(modifiers[DayFlag.disabled]).toBe(false);
      expect(modifiers[DayFlag.hidden]).toBe(false);
      expect(modifiers[DayFlag.outside]).toBe(true);
      expect(modifiers[DayFlag.today]).toBe(false);
      expect(modifiers.selected).toBe(false);
    });
  });

  describe("with startMonth and endMonth props", () => {
    const startMonth = new Date(displayedMonth);
    startMonth.setDate(30);
    const endMonth = new Date(displayedMonth);
    endMonth.setDate(1);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const getModifiers = useGetModifiers(
      days,
      { ...props, startMonth, endMonth },
      dateLib
    );
    test("return the modifiers for a given day", () => {
      const modifiers = getModifiers(day2);

      expect(modifiers[DayFlag.focused]).toBe(false);
      expect(modifiers[DayFlag.disabled]).toBe(true);
      expect(modifiers[DayFlag.hidden]).toBe(false);
      expect(modifiers[DayFlag.outside]).toBe(false);
      expect(modifiers[DayFlag.today]).toBe(false);
      expect(modifiers.custom).toBe(false);
    });

    test("return the modifiers for a given day before the displayed month", () => {
      const modifiers = getModifiers(day1);

      expect(modifiers[DayFlag.focused]).toBe(false);
      expect(modifiers[DayFlag.disabled]).toBe(false);
      expect(modifiers[DayFlag.hidden]).toBe(true);
      expect(modifiers[DayFlag.outside]).toBe(true);
      expect(modifiers[DayFlag.today]).toBe(false);
      expect(modifiers.selected).toBe(false);
    });

    test("return the modifiers for a given day after the displayed month", () => {
      const modifiers = getModifiers(day7);

      expect(modifiers[DayFlag.focused]).toBe(false);
      expect(modifiers[DayFlag.disabled]).toBe(false);
      expect(modifiers[DayFlag.hidden]).toBe(true);
      expect(modifiers[DayFlag.outside]).toBe(true);
      expect(modifiers[DayFlag.today]).toBe(false);
      expect(modifiers.selected).toBe(false);
    });
  });
});
