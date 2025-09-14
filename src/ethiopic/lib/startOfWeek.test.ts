import { startOfWeek } from "./startOfWeek";

describe("startOfWeek", () => {
  test("should return Monday when given a Monday", () => {
    const monday = new Date(2024, 2, 18); // Monday, March 18, 2024
    const result = startOfWeek(monday);
    expect(result.getDay()).toBe(1); // Monday is 1
    expect(result.toISOString()).toBe(monday.toISOString());
  });

  test("should return previous Monday when given a Wednesday", () => {
    const wednesday = new Date(2024, 2, 20); // Wednesday, March 20, 2024
    const result = startOfWeek(wednesday);
    const expected = new Date(2024, 2, 18); // Should return Monday, March 18, 2024
    expect(result.toISOString()).toBe(expected.toISOString());
  });

  test("should return previous Monday when given a Sunday", () => {
    const sunday = new Date(2024, 2, 24); // Sunday, March 24, 2024
    const result = startOfWeek(sunday);
    const expected = new Date(2024, 2, 18); // Should return Monday, March 18, 2024
    expect(result.toISOString()).toBe(expected.toISOString());
  });

  test("should handle month boundaries correctly", () => {
    const saturday = new Date(2024, 2, 2); // Saturday, March 2, 2024
    const result = startOfWeek(saturday);
    const expected = new Date(2024, 1, 26); // Should return Monday, February 26, 2024
    expect(result.toISOString()).toBe(expected.toISOString());
  });

  test("should handle year boundaries correctly", () => {
    const wednesday = new Date(2024, 0, 3); // Wednesday, January 3, 2024
    const result = startOfWeek(wednesday);
    const expected = new Date(2024, 0, 1); // Should return Monday, January 1, 2024
    expect(result.toISOString()).toBe(expected.toISOString());
  });
});
