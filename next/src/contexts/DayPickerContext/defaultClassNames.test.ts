import { defaultClassNames } from "./defaultClassNames";

test("should match the snapshot", () => {
  expect(defaultClassNames).toMatchSnapshot();
});
