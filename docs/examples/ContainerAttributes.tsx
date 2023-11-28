import { DayPicker } from 'react-day-picker';

/** Render a DayPicker adding extra HTML attribute to the root element. */
export function ContainerAttributes() {
  return (
    <DayPicker
      id="testId"
      className="testClass"
      data-test="testData"
      nonce="foo_nonce"
      title="foo_title"
      lang="it"
    />
  );
}
