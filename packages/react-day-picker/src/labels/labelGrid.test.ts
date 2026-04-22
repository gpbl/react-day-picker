import { ja } from "../locale/ja.js";

import { labelGrid } from "./labelGrid";

const day = new Date(2022, 10, 21);

test("return the label", () => {
  expect(labelGrid(day)).toEqual("November 2022");
});

test("returns year-first labels when required", () => {
  expect(labelGrid(day, { locale: ja })).toEqual("2022年11月");
});
