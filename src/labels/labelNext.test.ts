import { labelNext } from "./labelNext";

test("should return the label", () => {
  expect(labelNext(new Date(), {})).toEqual("Next Month");
});
