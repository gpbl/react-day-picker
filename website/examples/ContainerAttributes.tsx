import { DayPicker } from "react-day-picker";

/**
 * Pass selected HTML attributes and `data-` attributes to the root element.
 *
 * @exampleTitle Container Attributes
 */
export function ContainerAttributes() {
  return (
    <DayPicker
      id="testId"
      className="testClass"
      data-test="testData"
      nonce="foo_nonce"
      title="foo_title"
      lang="it"
      mode="multiple"
    />
  );
}
