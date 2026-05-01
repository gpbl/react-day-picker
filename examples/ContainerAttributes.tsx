import { DayPicker } from "@daypicker/react";
import React from "react";

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
