import { grid, renderApp } from "@/test";

import { StylingInline } from "./StylingInline";

const today = new Date(2021, 10, 25);
jest.useFakeTimers().setSystemTime(today);

beforeEach(() => {
  renderApp(<StylingInline />);
});

test("the caption should apply the custom style", () => {
  const captionId = grid().getAttribute("aria-labelledby");
  const caption = captionId && document.getElementById(captionId);
  expect(caption).toHaveStyle({
    paddingBottom: "0.5em"
  });
});
