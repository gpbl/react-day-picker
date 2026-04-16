// @ts-nocheck
import React from "react";

import { DayPicker } from "../dist/esm/index.js";

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
