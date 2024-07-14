import { labelGrid } from "./labelGrid";

const day = new Date(2022, 10, 21);

test("return the label", () => {
  expect(labelGrid(day)).toEqual("November 2022");
});
