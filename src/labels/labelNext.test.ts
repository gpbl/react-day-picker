import { labelNext } from "./labelNext";

test("should return the label", () => {
  expect(labelNext(new Date(), {})).toEqual("Go to the Next Month");
});
