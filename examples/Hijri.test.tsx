import React from "react";

import { grid } from "@/test/elements";
import { render } from "@/test/render";
import { setTestTime } from "@/test/setTestTime";
import { Hijri } from "./Hijri";

const today = new Date(2025, 2, 8);

setTestTime(today);
test("renders Ramadan 1446 with Arabic defaults", () => {
  render(<Hijri />);
  expect(grid("رمضان ١٤٤٦")).toBeInTheDocument();
});
