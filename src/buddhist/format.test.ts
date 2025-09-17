import { format } from "./lib/format";

describe("buddhist format", () => {
  const date = new Date(2024, 11, 22); // 2024-12-22 -> BE 2567

  test("LLLL y uses BE year", () => {
    const result = format(date, "LLLL y");
    expect(result.endsWith("2567")).toBe(true);
  });

  test("yyyy token is BE year", () => {
    expect(format(date, "yyyy")).toBe("2567");
  });

  test("PPP keeps text and replaces year", () => {
    const result = format(date, "PPP");
    expect(result.includes("2567")).toBe(true);
  });
});
