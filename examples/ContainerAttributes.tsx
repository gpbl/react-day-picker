import React from "react";

import { DayPicker } from "react-day-picker";

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
