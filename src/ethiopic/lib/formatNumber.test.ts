import { formatNumber } from "./formatNumber";

describe("formatNumber", () => {
  test("should format numbers using Ethiopian numerals", () => {
    expect(formatNumber(1, "geez")).toBe("፩");
    expect(formatNumber(10, "geez")).toBe("፲");
    expect(formatNumber(12, "geez")).toBe("፲፪");
    expect(formatNumber(21, "geez")).toBe("፳፩");
    expect(formatNumber(100, "geez")).toBe("፻");
    expect(formatNumber(1000, "geez")).toBe("፲፻");
    expect(formatNumber(10000, "geez")).toBe("፼");

    // years
    expect(formatNumber(1998, "geez")).toBe("፲፱፻፺፰");
    expect(formatNumber(2000, "geez")).toBe("፳፻");
    expect(formatNumber(2002, "geez")).toBe("፳፻፪");

    // Complex numbers
    expect(formatNumber(140000, "geez")).toBe("፲፬፼");
    expect(formatNumber(123, "geez")).toBe("፻፳፫");
    expect(formatNumber(1234, "geez")).toBe("፲፪፻፴፬");
    expect(formatNumber(38965, "geez")).toBe("፫፼፹፱፻፷፭");
  });

  test("should format numbers using latin numerals by default", () => {
    expect(formatNumber(123)).toBe("123");
    expect(formatNumber(1234)).toBe("1,234");
    expect(formatNumber(12345)).toBe("12,345");

    // Explicit latin format
    expect(formatNumber(123, "latn")).toBe("123");
    expect(formatNumber(1234, "latn")).toBe("1,234");
    expect(formatNumber(12345, "latn")).toBe("12,345");
  });

  test("should handle zero and negative numbers correctly", () => {
    // Zero
    expect(formatNumber(0, "geez")).toBe("-"); // Special case in Geez
    expect(formatNumber(0, "latn")).toBe("0");

    // Negative numbers
    expect(formatNumber(-123, "geez")).toBe("-፻፳፫");
    expect(formatNumber(-1234, "geez")).toBe("-፲፪፻፴፬");
    expect(formatNumber(-123, "latn")).toBe("-123");
    expect(formatNumber(-1234, "latn")).toBe("-1,234");
  });
});
