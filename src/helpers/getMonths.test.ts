import { CalendarMonth } from "../classes";

import { getDates } from "./getDates";
import { getMonths } from "./getMonths";

describe("when first and last months are the same", () => {
  it("should return the months to display in the calendar", () => {
    const month = new Date(2024, 0, 1);
    const dates = getDates([month]);
    const months = getMonths([month], dates);
    expect(months).toHaveLength(1);
    expect(months[0]).toBeInstanceOf(CalendarMonth);
    expect(months[0].date).toBe(month);
    expect(months[0].weeks[0].days[1].date).toStrictEqual(new Date(2024, 0, 1));
    expect(months[months.length - 1]).toBeInstanceOf(CalendarMonth);
    expect(months[0].weeks[4].days[1].date).toStrictEqual(
      new Date(2024, 0, 29)
    );
  });
  describe("when week starts on Saturday", () => {
    it("should return the months to display in the calendar", () => {
      const month = new Date(2024, 0, 1);
      const dates = getDates([month], undefined, { weekStartsOn: 6 });
      const months = getMonths([month], dates, { weekStartsOn: 6 });

      expect(months[0].weeks[0].days[0].date).toStrictEqual(
        new Date(2023, 11, 30)
      );
      expect(months[months.length - 1]).toBeInstanceOf(CalendarMonth);
      expect(months[0].weeks[4].days[0].date).toStrictEqual(
        new Date(2024, 0, 27)
      );
    });
  });
  describe("when using ISO weeks", () => {
    it("should return the months to display in the calendar", () => {
      const month = new Date(2024, 0, 1);
      const dates = getDates([month], undefined, { ISOWeek: true });
      const months = getMonths([month], dates);

      expect(months[0].weeks[0].days[1].date).toStrictEqual(
        new Date(2024, 0, 2)
      );
      expect(months[months.length - 1]).toBeInstanceOf(CalendarMonth);
      expect(months[0].weeks[4].days[1].date).toStrictEqual(
        new Date(2024, 0, 29)
      );
    });
  });
  describe("when using fixed weeks", () => {
    it("should return the months to display in the calendar", () => {
      const month = new Date(2023, 4, 1); // month with 4 weeks
      const dates = getDates([month], undefined, { fixedWeeks: true });
      const months = getMonths([month], dates);

      expect(months[0].weeks[0].days[0].date).toStrictEqual(
        new Date(2023, 3, 30)
      );
      expect(months[months.length - 1]).toBeInstanceOf(CalendarMonth);
      expect(months[0].weeks[4].days[1].date).toStrictEqual(
        new Date(2023, 4, 29)
      );
    });
  });
});

describe("when first and last months are not the same", () => {
  it("should return the months to display in the calendar", () => {
    const firstMonth = new Date(2024, 0, 1);
    const lastMonth = new Date(2024, 2, 1);
    const dates = getDates([firstMonth, lastMonth]);
    const months = getMonths([firstMonth, lastMonth], dates);
    expect(months).toHaveLength(2);
    expect(months[0]).toBeInstanceOf(CalendarMonth);
    expect(months[0].date).toBe(firstMonth);
    expect(months[0].weeks[0].days[1].date).toStrictEqual(new Date(2024, 0, 1));
    expect(months[months.length - 1]).toBeInstanceOf(CalendarMonth);
    expect(months[0].weeks[4].days[1].date).toStrictEqual(
      new Date(2024, 0, 29)
    );
  });
});

describe("when reversing the order of the months", () => {
  it("should return the months to display in the calendar", () => {
    const firstMonth = new Date(2024, 0, 1);
    const lastMonth = new Date(2024, 2, 1);
    const dates = getDates([firstMonth, lastMonth]);
    const months = getMonths([firstMonth, lastMonth], dates, {
      reverseMonths: true
    });
    expect(months).toHaveLength(2);
    expect(months[0].date).toBe(lastMonth);
    expect(months[months.length - 1].date).toBe(firstMonth);
  });
});
