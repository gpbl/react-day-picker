import { labelNext } from "./labelNext.js"

test("should return the label", () => {
  expect(labelNext(new Date(), {})).toEqual("Next Month");
});
