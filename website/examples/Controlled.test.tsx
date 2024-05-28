import { act, screen } from "@testing-library/react";

import { mockDate, grid, renderApp, user } from "../test-v8";

import { Controlled } from "./Controlled";

mockDate(new Date(2022, 5, 10));

describe('when the "Today" button is clicked', () => {
  const todayButton = () => screen.getByRole("button", { name: "Go to Today" });
  beforeEach(async () => {
    renderApp(<Controlled />);
    await act(() => user.click(todayButton()));
  });
  test("the button should be disabled", async () => {
    expect(todayButton()).toBeDisabled();
  });
  test("should display the current month", () => {
    expect(grid()).toHaveAccessibleName("June 2022");
  });
});
