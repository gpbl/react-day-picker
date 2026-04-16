// @ts-nocheck
import React from "react";

import { DayPicker } from "../dist/esm/index.js";

export function MultipleRequired() {
  return <DayPicker mode="multiple" required selected={[new Date()]} />;
}
