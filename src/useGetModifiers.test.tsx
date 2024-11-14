import { DayFlag } from "./UI";
import { CalendarDay, defaultDateLib } from "./classes/index";
import { useGetModifiers } from "./useGetModifiers";

const dateLib = defaultDateLib;

const month1 = new Date(2022, 10, 1);
const month2 = new Date(2022, 11, 1);

const date1 = new Date(2022, 10, 10);
const date2 = new Date(2022, 10, 11);
const date3 = new Date(2022, 10, 12);
const date4 = new Date(2022, 10, 13);
const date5 = new Date(2022, 10, 14);
const date6 = new Date(2022, 10, 30);

const day1 = new CalendarDay(date1, month1);
const day2 = new CalendarDay(date2, month1);
const day3 = new CalendarDay(date3, month1);
const day4 = new CalendarDay(date4, month1);
const day5 = new CalendarDay(date5, month1);
const day6 = new CalendarDay(date6, month2);

const days: CalendarDay[] = [day1, day2, day3, day4, day5, day6];

const props = {
  disabled: [date1],
  hidden: [date2],
  modifiers: {
    custom: [date3],
    selected: [date5]
  },
  selected: date6,
  showOutsideDays: true,
  today: date4,
  timeZone: "UTC"
};

describe("useGetModifiers", () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const getModifiers = useGetModifiers(days, props, dateLib);

  test("return the modifiers for a given day", () => {
    const modifiers = getModifiers(day1);

    expect(modifiers[DayFlag.focused]).toBe(false);
    expect(modifiers[DayFlag.disabled]).toBe(true);
    expect(modifiers[DayFlag.hidden]).toBe(false);
    expect(modifiers[DayFlag.outside]).toBe(false);
    expect(modifiers[DayFlag.today]).toBe(false);
    expect(modifiers.custom).toBe(false);
  });

  test("return the custom modifiers for a given day", () => {
    const modifiers = getModifiers(day3);
    expect(modifiers.custom).toBe(true);
  });

  test("return the custom `selected` modifier for a given day", () => {
    const modifiers = getModifiers(day5);
    expect(modifiers.selected).toBe(true);
  });

  test("return the today modifier for a given day", () => {
    const modifiers = getModifiers(day4);
    expect(modifiers[DayFlag.today]).toBe(true);
  });

  test("return the hidden modifier for a given day", () => {
    const modifiers = getModifiers(day2);
    expect(modifiers[DayFlag.hidden]).toBe(true);
  });

  test("return the outside modifier for a given day", () => {
    const modifiers = getModifiers(day6);

    expect(modifiers[DayFlag.outside]).toBe(true);
  });
});
