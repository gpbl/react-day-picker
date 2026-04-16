// @ts-nocheck
import React from "react";

import { DayPicker } from "react-day-picker-v9";

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
