import { formatNumber } from "./formatNumber";

describe("formatNumber", () => {
  test.each([
    [1, "፩"],
    [10, "፲"],
    [12, "፲፪"],
    [21, "፳፩"],
    [100, "፻"],
    [1000, "፲፻"],
    [10000, "፼"],
    [1998, "፲፱፻፺፰"],
    [2000, "፳፻"],
    [2002, "፳፻፪"],
    [140000, "፲፬፼"],
    [123, "፻፳፫"],
    [1234, "፲፪፻፴፬"],
    [38965, "፫፼፹፱፻፷፭"],
  ])("formats %i using Ethiopian numerals", (value, expected) => {
    expect(formatNumber(value, "geez")).toBe(expected);
  });

  test.each([
    [123, undefined, "123"],
    [1234, undefined, "1,234"],
    [12345, undefined, "12,345"],
    [123, "latn" as const, "123"],
    [1234, "latn" as const, "1,234"],
    [12345, "latn" as const, "12,345"],
  ])("formats %i using latin numerals", (value, numerals, expected) => {
    expect(formatNumber(value, numerals)).toBe(expected);
  });

  test.each([
    [0, "geez" as const, "-"],
    [0, "latn" as const, "0"],
    [-123, "geez" as const, "-፻፳፫"],
    [-1234, "geez" as const, "-፲፪፻፴፬"],
    [-123, "latn" as const, "-123"],
    [-1234, "latn" as const, "-1,234"],
  ])("formats %i using %s numerals", (value, numerals, expected) => {
    expect(formatNumber(value, numerals)).toBe(expected);
  });
});
