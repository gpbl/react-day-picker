import { formatDay } from "./formatDay.js";

const date = new Date(2022, 10, 21);

test("should return the formatted day", () => {
  expect(formatDay(date)).toEqual("21");
});
