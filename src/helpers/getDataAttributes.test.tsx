import { getDataAttributes } from "./getDataAttributes.js";

// Mocking the types that are defined elsewhere.
// TODO: does it work? Replace the types with the actual types.
interface PropsBase {
  [key: string]: unknown;
}

test("return all data- attributes from the props", () => {
  const props: PropsBase = {
    "data-test-id": "123",
    "data-role": "button",
    "aria-label": "test element"
  };

  const result = getDataAttributes(props);

  expect(result).toEqual({
    "data-test-id": "123",
    "data-role": "button"
  });
});

test("return an empty object if there are no data- attributes", () => {
  const props: PropsBase = {
    "aria-label": "test element",
    class: "example-class"
  };

  const result = getDataAttributes(props);

  expect(result).toEqual({});
});

test("handle props with undefined or null values", () => {
  const props: PropsBase = {
    "data-test-id": undefined,
    "data-role": null,
    "aria-hidden": "true"
  };

  const result = getDataAttributes(props);

  expect(result).toEqual({
    "data-test-id": undefined,
    "data-role": null
  });
});
