import { rowheader, renderApp } from "@/test";

import { WeeknumberCustom } from "./WeeknumberCustom";

beforeEach(() => {
  renderApp(<WeeknumberCustom />);
});

test("should display the 1st week (even if December)", () => {
  expect(rowheader("Week 1")).toBeInTheDocument();
});
