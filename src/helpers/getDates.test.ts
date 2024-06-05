import { getDates } from "./getDates";

describe("when the first month and the last month are the same", () => {
  describe("when the month has 6 weeks", () => {
    const month = new Date(2023, 11, 1);
    describe("when not using fixed weeks", () => {
      it("should return 42 dates", () => {
        const dates = getDates([month], undefined, {
          fixedWeeks: false
        });
        expect(dates).toHaveLength(42);
        expect(dates[0]).toEqual(new Date(2023, 10, 26));
        expect(dates[dates.length - 1]).toEqual(new Date(2024, 0, 6));
      });
    });
    describe("when using fixed weeks", () => {
      it("should return 42 dates", () => {
        const dates = getDates([month], undefined, {
          fixedWeeks: true
        });
        expect(dates).toHaveLength(42);
        expect(dates[0]).toEqual(new Date(2023, 10, 26));
        expect(dates[dates.length - 1]).toEqual(new Date(2024, 0, 6));
      });
    });
  });
  describe("when the month has 5 weeks", () => {
    const month = new Date(2023, 4, 1);
    describe("when not using fixed weeks", () => {
      it("should return 35 dates", () => {
        const dates = getDates([month], undefined, {
          fixedWeeks: false
        });
        expect(dates).toHaveLength(35);
        expect(dates[0]).toEqual(new Date(2023, 3, 30));
        expect(dates[dates.length - 1]).toEqual(new Date(2023, 5, 3));
      });
    });
    describe("when using fixed weeks", () => {
      it("should return 42 dates", () => {
        const dates = getDates([month], undefined, {
          fixedWeeks: true
        });
        expect(dates).toHaveLength(42);
        expect(dates[0]).toEqual(new Date(2023, 3, 30));
        expect(dates[dates.length - 1]).toEqual(new Date(2023, 5, 10));
      });
    });
  });
  describe("when using Monday as first day of the week", () => {
    const month = new Date(2023, 4, 1);
    it("the first day should be Monday", () => {
      const dates = getDates([month], undefined, { weekStartsOn: 1 });
      expect(dates[0]).toBeMonday();
      expect(dates[0]).toEqual(new Date(2023, 4, 1));
      expect(dates[dates.length - 1]).toEqual(new Date(2023, 5, 4));
    });
  });
  describe("when using a max date", () => {
    const month = new Date(2023, 4, 1);
    const maxDate = new Date(2023, 4, 15);

    it("the last day should be the max date", () => {
      const dates = getDates([month], maxDate, { weekStartsOn: 1 });
      expect(dates).toHaveLength(15);
      expect(dates[dates.length - 1]).toEqual(maxDate);
    });
  });
  describe("when using ISO weeks", () => {
    const month = new Date(2023, 4, 1);
    it("the first day should be Monday", () => {
      const dates = getDates([month], undefined, { ISOWeek: true });
      expect(dates[0]).toBeMonday();
      expect(dates[0]).toEqual(new Date(2023, 4, 1));
      expect(dates[dates.length - 1]).toEqual(new Date(2023, 5, 4));
    });
  });
});

describe("when the first month and the last month are different", () => {
  const firstMonth = new Date(2023, 4, 1);
  const lastMonth = new Date(2023, 11, 1);
  describe("when not using fixed weeks", () => {
    it("should return an array of dates", () => {
      const dates = getDates([firstMonth, lastMonth], undefined, {
        fixedWeeks: false
      });
      expect(dates).toHaveLength(252);
      expect(dates[0]).toEqual(new Date(2023, 3, 30));
      expect(dates[dates.length - 1]).toEqual(new Date(2024, 0, 6));
    });
  });
  describe("when using a max date", () => {
    const firstMonth = new Date(2023, 4, 1);
    const lastMonth = new Date(2023, 11, 1);
    const maxDate = new Date(2023, 5, 15);

    it("the last day should be the max date", () => {
      const dates = getDates([firstMonth, lastMonth], maxDate, {
        weekStartsOn: 1
      });
      expect(dates).toHaveLength(46);
      expect(dates[dates.length - 1]).toEqual(maxDate);
    });
  });
  describe("when using ISO weeks", () => {
    const month = new Date(2023, 4, 1);
    it("the first day should be Monday", () => {
      const dates = getDates([month], undefined, { ISOWeek: true });
      expect(dates[0]).toBeMonday();
      expect(dates[0]).toEqual(new Date(2023, 4, 1));
      expect(dates[dates.length - 1]).toEqual(new Date(2023, 5, 4));
    });
  });
});
