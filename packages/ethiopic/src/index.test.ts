import { amET } from "./index";

describe("@daypicker/ethiopic", () => {
  test("exports the amET locale from the package entry point", () => {
    expect(amET.code).toBe("am-ET");
    expect(amET.localize.month(0, { width: "wide" })).toBe("ጃንዋሪ");
  });
});
