import { getDaysInMonth } from "./daysInMonth.js";

describe("getDaysInMonth", () => {
  describe("when checking converter boundaries", () => {
    test("returns a valid length for the first supported month", () => {
      const days = getDaysInMonth(1343, 0);

      expect([29, 30]).toContain(days);
    });

    test("returns a valid length for the last supported month", () => {
      const days = getDaysInMonth(1500, 11);

      expect([29, 30]).toContain(days);
    });

    test("does not throw for 1500-12", () => {
      expect(() => getDaysInMonth(1500, 11)).not.toThrow();
    });
  });

  describe("when scanning supported years", () => {
    test("always returns 29 or 30 days", () => {
      for (let year = 1343; year <= 1500; year += 1) {
        for (let monthIndex = 0; monthIndex < 12; monthIndex += 1) {
          const days = getDaysInMonth(year, monthIndex);
          expect([29, 30]).toContain(days);
        }
      }
    });
  });
});
